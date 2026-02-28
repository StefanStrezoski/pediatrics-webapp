<script setup>
/* eslint-disable */
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseList from "@/components/BaseList.vue";
import ParagraphNoIndent from "@/components/ParagraphNoIndent.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/supabase/supabase.js";

const { t, tm, rt } = useI18n();

const formRef = ref(null);
const form = ref({
  name: '',
  email: '',
  phone: '',
  institution: '',
  category: null,
});
const file = ref(null);
const message = ref('');
const success = ref(false);
const loading = ref(false);
const hide = ref(false);

const categoryOptions = [
  { title: '1', value: 1 },
  { title: '2', value: 2 },
  { title: '3', value: 3 },
  { title: '4', value: 4 },
];

const validRule = [value => !!value || t('feesPage.required')];
const phoneRule = [
  value => !!value || t('feesPage.required'),
  value => /^[0-9+()-]{8,}$/.test(value) || t('feesPage.invalidPhone'),
];
const fileRule = [
  () => form.value.category !== 4 || !!file.value || t('feesPage.selectFile'),
];

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
      message.value = t('feesPage.errorMsg');
      loading.value = false;
      return;
    }

    let fileName = null;

    if (form.value.category === 3) {
      if (!file.value) {
        message.value = t('feesPage.selectFile');
        loading.value = false;
        return;
      }

      const fileExtension = file.value.name.match(/\.[^.]+$/)[0].toLowerCase();
      fileName = `pediatrics-documents/${Date.now()}_${uuidv4()}${fileExtension}`;

      const { error: uploadError } = await supabase.storage
        .from('projects')
        .upload(fileName, file.value);

      if (uploadError) {
        message.value = `File upload failed: ${uploadError.message}`;
        loading.value = false;
        return;
      }

    }

    const { error: dbError } = await supabase.from('document_submissions_pediatrics').insert({
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      institution: form.value.institution,
      category: form.value.category,
      file_name: fileName,
    });

    if (dbError) {
      message.value = `Failed to save submission: ${dbError.message}`;
      loading.value = false;
      return;
    }

    message.value = t('feesPage.successMsg') || 'Submission successful!';
    success.value = true;
    loading.value = false;

    form.value = { name: '', email: '', phone: '', institution: '', category: null };
    file.value = null;

    formRef.value?.resetValidation();
    formRef.value?.reset();
  } catch (error) {
    message.value = t('feesPage.unexpectedError') || 'An unexpected error occurred.';
    loading.value = false;
  }
}
</script>

<template>
  <base-container>
    <base-card>
      <paragraph-no-indent class="text-center">
        <span style="color: #26A69A" class="text-h5 font-weight-bold">{{ t('feesPage.title') }}</span>
      </paragraph-no-indent>
      <v-card outlined class="mt-5 mb-5">
        <v-responsive>
          <v-table class="elevation-1">
            <thead>
              <tr>
                <th class="text-center text-white border" style="background-color: #028e9a;">
                  {{ t('feesPage.table.headers.category') }}
                </th>
                <th class="text-center text-white border" style="background-color: #028e9a;">
                  {{ t('feesPage.table.headers.participantType') }}
                </th>
                <th class="text-center text-white border" style="background-color: #028e9a;">
                  {{ t('feesPage.table.headers.early') }}
                </th>
                <th class="text-center text-white border" style="background-color: #028e9a;">
                  {{ t('feesPage.table.headers.mid') }}
                </th>
                <th class="text-center text-white border" style="background-color: #028e9a;">
                  {{ t('feesPage.table.headers.late') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 4" :key="i">
                <td class="cell-bg border" style="background-color: #70bbc2;">
                  {{ t(`feesPage.table.row${i}.id`) }}
                </td>
                <td class="cell-bg border" style="background-color: #70bbc2;">
                  <span v-html="t(`feesPage.table.row${i}.type`)"></span>
                </td>
                <td class="cell-bg border" style="background-color: #70bbc2;">
                  <span v-html="t(`feesPage.table.row${i}.price1`)"></span>
                </td>
                <td class="cell-bg border" style="background-color: #70bbc2;">
                  <span v-html="t(`feesPage.table.row${i}.price2`)"></span>
                </td>
                <td class="cell-bg border" style="background-color: #70bbc2;">
                  <span v-html="t(`feesPage.table.row${i}.price3`)"></span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-responsive>
      </v-card>
      <paragraph-no-indent class="text-center">
        <b><span class="text-red">{{ t('feesPage.info.vat') }}</span></b>
      </paragraph-no-indent>
      <paragraph-no-indent class="text-center">
        <b style="color: #26A69A">
          <span v-html="t('feesPage.info.calculation')"></span>
        </b>
      </paragraph-no-indent>
      <small-card class="mb-5" style="background-color: #028e9a;">
        <v-row>
          <v-col cols="6">
            <base-list class="text-white font-weight-bold">
              <li v-for="(item, index) in tm('feesPage.info.includes.col1')" :key="index">{{ rt(item) }}</li>
            </base-list>
          </v-col>
          <v-col cols="6">
            <base-list class="text-white font-weight-bold">
              <li v-for="(item, index) in tm('feesPage.info.includes.col2')" :key="index">{{ rt(item) }}</li>
            </base-list>
          </v-col>
        </v-row>
        <base-paragraph class="text-center mt-5 text-white">&#11088;&#11088;&#11088; {{ t('feesPage.info.dinner')
          }}</base-paragraph>
      </small-card>
      <paragraph-no-indent>
        <b>
          <span v-html="t('feesPage.notes.students')"></span>
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent>
        <b>
          <span v-html="t('feesPage.notes.companies')"></span>
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent class="text-center">
        <b>
          <span v-html="t('feesPage.notes.hotel')"></span>
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent class="text-center mb-10">
        <b>
          <span v-html="t('feesPage.notes.meals')"></span>
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent class="text-center">
        <b style="color: #26A69A">
          <span v-html="t('feesPage.payment')"></span>
        </b>
      </paragraph-no-indent>
    </base-card>
    <small-card class="mt-10" v-if="!hide">
      <v-form @submit.prevent="handleSubmit" ref="formRef">
        <v-text-field variant="outlined" density="comfortable" v-model="form.name" :label="t('feesPage.form.nameLabel')"
          required :rules="validRule" />
        <v-text-field variant="outlined" density="comfortable" v-model="form.email"
          :label="t('feesPage.form.emailLabel')" required type="email" :rules="validRule" />
        <v-text-field variant="outlined" density="comfortable" v-model="form.phone"
          :label="t('feesPage.form.phoneLabel')" required :rules="phoneRule" />
        <v-text-field variant="outlined" density="comfortable" v-model="form.institution"
          :label="t('feesPage.form.institutionLabel')" required :rules="validRule" />
        <v-select variant="outlined" density="comfortable" v-model="form.category"
          :label="t('feesPage.form.categoryLabel')" :items="categoryOptions" item-title="title" item-value="value"
          required :rules="validRule" />
        <v-file-input v-if="form.category === 3" v-model="file" :label="t('feesPage.form.uploadLabel')"
          accept="image/jpeg,image/png,image/heic" :rules="fileRule" variant="outlined" density="comfortable"
          show-size />
        <v-btn type="submit" color="primary" class="mt-4" :loading="loading">
          {{ t('feesPage.form.submitLabel') }}
        </v-btn>
        <v-alert v-if="message" class="mt-4" :type="success ? 'success' : 'error'" border="start" variant="tonal">
          {{ message }}
        </v-alert>
      </v-form>
    </small-card>
  </base-container>
</template>

<style scoped></style>
