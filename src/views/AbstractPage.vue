<script setup>
/* eslint-disable */
import { ref } from "vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseList from "@/components/BaseList.vue";
import SmallCard from "@/components/SmallCard.vue";
import { v4 as uuidv4 } from 'uuid';
import { useI18n } from 'vue-i18n';
import { supabase } from '@/supabase/supabase.js';

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
    const fileName = `submissions/${Date.now()}_${uuidv4()}${fileExtension}`;

    const { error: uploadError } = await supabase.storage
      .from('abstracts')
      .upload(fileName, file.value);

    if (uploadError) {
      message.value = 'File upload failed: ' + uploadError.message;
      loading.value = false;
      return;
    }


    const { error: dbError } = await supabase.from('abstract_submissions').insert({
      name: form.value.name,
      email: form.value.email,
      institution: form.value.institution,
      abstract_title: form.value.title,
      file_name: fileName,
    });

    if (dbError) {
      message.value = 'Failed to save submission: ' + dbError.message;
      loading.value = false;
      return;
    }

    message.value = t('abstractPage.successMsg');
    success.value = true;
    loading.value = false;

    form.value = { name: '', email: '', institution: '', title: '' };
    file.value = null;

    formRef.value?.resetValidation();
    formRef.value?.reset();
  } catch (error) {
    message.value = t('abstractPage.unexpectedError');
    loading.value = false;
  }
}
</script>

<template>
  <base-container>
    <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
      <v-card-text>{{ t('abstractPage.titleB') }}</v-card-text>
    </v-card>
    <base-card>
      <base-paragraph>
        {{ t('abstractPage.p1B') }}
      </base-paragraph>
      <base-paragraph>
        {{ t('abstractPage.p2') }} <b>{{ t('abstractPage.p2B') }}</b> {{ t('abstractPage.p2_2') }} <b>{{ t('abstractPage.p2B2') }}</b> {{ t('abstractPage.p2_3') }} <b>{{ t('abstractPage.p2B3') }}</b> {{ t('abstractPage.p2_4') }} <b>{{ t('abstractPage.p2B4') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('abstractPage.p3') }} <b>{{ t('abstractPage.p3B') }}</b> {{ t('abstractPage.p3_2') }} <b>{{ t('abstractPage.p3B2') }}</b>{{ t('abstractPage.p3_3') }} <b>{{ t('abstractPage.p3B3') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('abstractPage.p4') }} <b>{{ t('abstractPage.p4B') }}</b>{{ t('abstractPage.p4_2') }}
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('abstractPage.p5B') }}</b> {{ t('abstractPage.p5') }} <b>{{ t('abstractPage.p5B2') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('abstractPage.p6') }} <b>{{ t('abstractPage.p6B') }}</b> {{ t('abstractPage.p6_2') }}
      </base-paragraph>
      <base-paragraph>
        {{ t('abstractPage.p7') }} <b>{{ t('abstractPage.p7B') }}</b> {{ t('abstractPage.p7_2') }} <b>{{ t('abstractPage.p7B2') }}</b>{{ t('abstractPage.p7_3') }}
      </base-paragraph>
      <base-list class="text-center" style="color: #134b7a">
        <li><b>{{ t('abstractPage.l1B') }}</b></li>
        <li><b>{{ t('abstractPage.l2B') }}</b></li>
      </base-list>
      <base-paragraph>
        <b><span class="text-orange-darken-3">{{ t('abstractPage.p8B').split(': ')[0] }}:</span> {{ t('abstractPage.p8B').split(': ')[1] }} <span class="text-decoration-underline">{{ t('abstractPage.p8U') }}</span></b>
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('abstractPage.p9B') }}</b>
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('abstractPage.p10B') }}</b>
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('abstractPage.p11B').split(': ')[0] }}:</b> <a href="https://bulletin.mfd.org.mk" target="_blank" class="text-decoration-none">{{ t('abstractPage.p11B').split(': ')[1] }}</a>
      </base-paragraph>
      <base-paragraph>
        <b><span class="text-orange-darken-3">{{ t('abstractPage.p12B').split(': ')[0] }}:</span> {{ t('abstractPage.p12B').split(': ')[1] }}</b>
      </base-paragraph>
      <base-paragraph class="d-inline-block align-center">
        <v-btn
          :href="t('abstractPage.filePath')"
          download
          prepend-icon="mdi-download"
          color="primary"
          variant="outlined"
        >
          {{ t('abstractPage.p13') }}
        </v-btn>
      </base-paragraph>
    </base-card>
    <small-card class="mt-10 text-center">
<!--      <v-form @submit.prevent="handleSubmit" ref="formRef">-->
<!--        <v-text-field variant="outlined" density="comfortable" v-model="form.name" :label="t('abstractPage.nameLabel')" required :rules="validRule"/>-->
<!--        <v-text-field variant="outlined" density="comfortable" v-model="form.email" :label="t('abstractPage.emailLabel')" required type="email" :rules="validRule"/>-->
<!--        <v-text-field variant="outlined" density="comfortable" v-model="form.institution" :label="t('abstractPage.institutionLabel')" required :rules="validRule"/>-->
<!--        <v-text-field variant="outlined" density="comfortable" v-model="form.title" :label="t('abstractPage.titleLabel')" required :rules="validRule"/>-->

<!--        <v-file-input-->
<!--          v-model="file"-->
<!--          :label="t('abstractPage.uploadLabel')"-->
<!--          accept=".doc,.docx"-->
<!--          required-->
<!--          :rules="validRule"-->
<!--          variant="outlined" density="comfortable"-->
<!--          show-size-->
<!--        />-->

<!--        <v-btn type="submit" color="primary" class="mt-4" :loading="loading">-->
<!--          {{ t('abstractPage.submitLabel') }}-->
<!--        </v-btn>-->
<!--        <v-alert-->
<!--          v-if="message"-->
<!--          class="mt-4"-->
<!--          :type="success ? 'success' : 'error'"-->
<!--          border="start"-->
<!--          variant="tonal"-->
<!--        >-->
<!--          {{ message }}-->
<!--        </v-alert>-->
<!--      </v-form>-->
      <h1 style="color: red">{{ t('abstractPage.expired') }}</h1>
    </small-card>
  </base-container>
</template>

<style scoped>
.title-card {
  background-color: #125280;
  color: white;
}
</style>
