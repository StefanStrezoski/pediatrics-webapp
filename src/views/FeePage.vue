<script setup>
/* eslint-disable */
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseList from "@/components/BaseList.vue";
import ParagraphNoIndent from "@/components/ParagraphNoIndent.vue";
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {v4 as uuidv4} from "uuid";
import {supabase} from "@/supabase/supabase.js";

const { t } = useI18n();

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
  { title: '5', value: 5 },
];

const validRule = [value => !!value || t('required')];
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

    if (form.value.category === 4) {
      if (!file.value) {
        message.value = t('feesPage.selectFile');
        loading.value = false;
        return;
      }

      const fileExtension = file.value.name.match(/\.[^.]+$/)[0].toLowerCase();
      fileName = `documents/${Date.now()}_${uuidv4()}${fileExtension}`;

      const { error: uploadError } = await supabase.storage
        .from('abstracts')
        .upload(fileName, file.value);

      if (uploadError) {
        message.value = `File upload failed: ${uploadError.message}`;
        loading.value = false;
        return;
      }

    }

    const { error: dbError } = await supabase.from('document_submissions').insert({
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
        <b><span class="text-orange-darken-3">{{ t('feesPage.p1B') }}</span></b>
      </paragraph-no-indent>
      <v-card outlined class="mt-5 mb-5">
        <v-responsive>
          <v-table class="elevation-1">
            <thead>
            <tr>
              <th class="text-center bg-light-blue-darken-2 border">
                {{ t('feesPage.t0') }}
              </th>
              <th class="text-center bg-light-blue-darken-2 border">
                {{ t('feesPage.t1') }}
              </th>
              <th class="text-center bg-light-blue-darken-2 border">
                {{ t('feesPage.t2') }}
              </th>
              <th class="text-center bg-light-blue-darken-2 border">
                {{ t('feesPage.t3') }}
              </th>
              <th class="text-center bg-light-blue-darken-2 border">
                {{ t('feesPage.t4') }}
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td00')}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td1').split('/')[0]}} <br/>
                {{ t('feesPage.td1').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td2').split('/')[0]}} <br/>
                {{ t('feesPage.td2').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td3').split('/')[0]}} <br/>
                {{ t('feesPage.td3').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td4').split('/')[0]}} <br/>
                {{ t('feesPage.td4').split('/')[1]}}
              </td>
            </tr>
            <tr>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td01')}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td5').split('/')[0]}} <br/>
                {{ t('feesPage.td5').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td6').split('/')[0]}} <br/>
                {{ t('feesPage.td6').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td7').split('/')[0]}} <br/>
                {{ t('feesPage.td7').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td8').split('/')[0]}} <br/>
                {{ t('feesPage.td8').split('/')[1]}}
              </td>
            </tr>
            <tr>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td02')}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td9').split('/')[0]}} <br/>
                {{ t('feesPage.td9').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td10').split('/')[0]}} <br/>
                {{ t('feesPage.td10').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td11').split('/')[0]}} <br/>
                {{ t('feesPage.td11').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td12').split('/')[0]}} <br/>
                {{ t('feesPage.td12').split('/')[1]}}
              </td>
            </tr>
            <tr>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td03') }}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                &#11088;{{ t('feesPage.td13').split('/')[0]}} <br/>
                {{ t('feesPage.td13').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td14').split('/')[0]}} <br/>
                {{ t('feesPage.td14').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td15').split('/')[0]}} <br/>
                {{ t('feesPage.td15').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td16').split('/')[0]}} <br/>
                {{ t('feesPage.td16').split('/')[1]}}
              </td>
            </tr>
            <tr>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td04') }}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                &#11088;&#11088;{{ t('feesPage.td17').split('/')[0]}} <br/>
                {{ t('feesPage.td17').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td18').split('/')[0]}} <br/>
                {{ t('feesPage.td18').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td19').split('/')[0]}} <br/>
                {{ t('feesPage.td19').split('/')[1]}}
              </td>
              <td class="bg-light-blue-lighten-4 border">
                {{ t('feesPage.td20').split('/')[0]}} <br/>
                {{ t('feesPage.td20').split('/')[1]}}
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-responsive>
      </v-card>
      <paragraph-no-indent class="text-center">
        <b><span class="text-orange-darken-3">{{ t('feesPage.p2B') }}</span></b>
      </paragraph-no-indent>
      <paragraph-no-indent class="text-center">
        <b style="color: #125280">
          {{ t('feesPage.p3B') }}
        </b>
      </paragraph-no-indent>
      <small-card class="bg-light-blue-darken-2 mb-5">
        <v-row>
          <v-col cols="6">
            <base-list class="text-white font-weight-bold">
              <li>{{ t('feesPage.l1') }}</li>
              <li>{{ t('feesPage.l2') }}</li>
              <li>{{ t('feesPage.l3') }}</li>
            </base-list>
          </v-col>
          <v-col cols="6">
            <base-list class="text-white font-weight-bold">
              <li>{{ t('feesPage.l4') }}</li>
              <li>{{ t('feesPage.l5') }}</li>
              <li>{{ t('feesPage.l6') }} &#11088;&#11088;&#11088;</li>
            </base-list>
          </v-col>
        </v-row>
      </small-card>
      <paragraph-no-indent>
        <b>
          {{ t('feesPage.p4B') }}&#11088;: {{ t('feesPage.p4B2') }} <span class="text-orange-darken-3">{{ t('feesPage.p4Y')}}</span>
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent>
        <b>
          {{ t('feesPage.p5B') }}&#11088;&#11088;: {{ t('feesPage.p5B2') }} <span class="text-orange-darken-3">{{ t('feesPage.p5Y')}}</span>
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent>
        <b>
          {{ t('feesPage.p6B') }}&#11088;&#11088;&#11088;: <span class="text-decoration-underline">{{ t('feesPage.p6U') }}</span> {{ t('feesPage.p6B2') }}
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent>
        <b>
          <span class="text-decoration-underline">{{ t('feesPage.p7U') }}</span> {{ t('feesPage.p7B')}}
        </b>
      </paragraph-no-indent>
      <paragraph-no-indent class="text-center">
        <b style="color: #125280">
          {{ t('feesPage.p8B') }} <br/>
          {{ t('feesPage.p8B2').split('/')[0] }} | {{ t('feesPage.p8B2').split('/')[1] }}<br/>
          {{ t('feesPage.p8B3') }} <br/>
          <span class="text-orange-darken-3">{{ t('feesPage.p8Y') }}</span>
        </b>
      </paragraph-no-indent>
    </base-card>
    <small-card class="mt-10" v-if="hide">
      <v-form @submit.prevent="handleSubmit" ref="formRef">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="form.name"
          :label="t('feesPage.nameLabel')"
          required
          :rules="validRule"
        />
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="form.email"
          :label="t('feesPage.emailLabel')"
          required
          type="email"
          :rules="validRule"
        />
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="form.phone"
          :label="t('feesPage.phoneLabel')"
          required
          :rules="phoneRule"
        />
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="form.institution"
          :label="t('feesPage.institutionLabel')"
          required
          :rules="validRule"
        />
        <v-select
          variant="outlined"
          density="comfortable"
          v-model="form.category"
          :label="t('feesPage.categoryLabel')"
          :items="categoryOptions"
          item-title="title"
          item-value="value"
          required
          :rules="validRule"
        />
        <v-file-input
          v-if="form.category === 4"
          v-model="file"
          :label="t('feesPage.uploadLabel')"
          accept="image/jpeg,image/png,image/heic"
          :rules="fileRule"
          variant="outlined"
          density="comfortable"
          show-size
        />
        <v-btn type="submit" color="primary" class="mt-4" :loading="loading">
          {{ t('feesPage.submitLabel') }}
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
</style>
