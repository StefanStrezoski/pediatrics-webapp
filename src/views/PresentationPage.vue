<script setup>
/* eslint-disable */
import BaseContainer from "@/components/BaseContainer.vue";
import SmallCard from "@/components/SmallCard.vue";
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {v4 as uuidv4} from "uuid";
import {supabase} from "@/supabase/supabase.js";

const { t } = useI18n();

const formRef = ref(null);

const form = ref({
  name: '',
  email: '',
  institution: '',
  title: ''
});

const file = ref(null);
const message = ref('');
const success = ref(false);
const loading = ref(false);

const validRule = [value => !!value || t('required')];

async function handleSubmit() {
  try {
    message.value = '';
    success.value = false;
    loading.value = true;

    if (!formRef.value) {
      message.value = 'Form reference is not available.';
      loading.value = false;
      return;
    }

    const isValid = await formRef.value.validate();
    if (!isValid.valid) {
      message.value = t('errorMsg');
      loading.value = false;
      return;
    }

    if (!file.value) {
      message.value = t('selectFile');
      loading.value = false;
      return;
    }
    const fileExtension = file.value.name.match(/\.[^.]+$/)[0];
    const fileName = `presentations/${Date.now()}_${uuidv4()}${fileExtension}`;

    const {error: uploadError} = await supabase.storage
      .from('abstracts')
      .upload(fileName, file.value);

    if (uploadError) {
      message.value = 'File upload failed: ' + uploadError.message;
      loading.value = false;
      return;
    }


    const {error: dbError} = await supabase.from('presentation_submissions').insert({
      name: form.value.name,
      email: form.value.email,
      institution: form.value.institution,
      presentation_title: form.value.title,
      file_name: fileName,
    });

    if (dbError) {
      message.value = 'Failed to save submission: ' + dbError.message;
      loading.value = false;
      return;
    }

    message.value = t('presentationPage.successMsg');
    success.value = true;
    loading.value = false;

    form.value = {name: '', email: '', institution: '', title: ''};
    file.value = null;

    formRef.value?.resetValidation();
    formRef.value?.reset();
  } catch (error) {
    message.value = t('presentationPage.unexpectedError') || 'An unexpected error occurred.';
    loading.value = false;
  }
}


</script>

<template>
  <base-container>
    <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
      <v-card-text><h3>{{ t('presentationPage.title') }}</h3></v-card-text>
    </v-card>
    <small-card class="mt-10">
      <v-form @submit.prevent="handleSubmit" ref="formRef">
        <v-text-field variant="outlined" density="comfortable" v-model="form.name" :label="t('presentationPage.nameLabel')" required :rules="validRule"/>
        <v-text-field variant="outlined" density="comfortable" v-model="form.email" :label="t('presentationPage.emailLabel')" required type="email" :rules="validRule"/>
        <v-text-field variant="outlined" density="comfortable" v-model="form.institution" :label="t('presentationPage.institutionLabel')" required :rules="validRule"/>
        <v-text-field variant="outlined" density="comfortable" v-model="form.title" :label="t('presentationPage.titleLabel')" required :rules="validRule"/>

        <v-file-input
          v-model="file"
          :label="t('presentationPage.uploadLabel')"
          accept=".ppt,.pptx,.doc,.docx,.pdf"
          required
          :rules="validRule"
          variant="outlined" density="comfortable"
          show-size
        />

        <v-btn type="submit" color="primary" class="mt-4" :loading="loading">
          {{ t('presentationPage.submitLabel') }}
        </v-btn>
        <v-alert
          v-if="message"
          class="mt-4"
          :type="success ? 'success' : 'error'"
          border="start"
          variant="tonal"
        >
          {{ message }}
        </v-alert>
      </v-form>
    </small-card>
  </base-container>
</template>

<style scoped>
.title-card {
  background-color: #125280;
  color: white;
}
</style>
