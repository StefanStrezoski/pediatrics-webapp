<script setup>
/* eslint-disable */
import { ref } from "vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseList from "@/components/BaseList.vue";
import SmallCard from "@/components/SmallCard.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// const formRef = ref(null);
//
// const form = ref({
//   name: '',
//   email: '',
//   institution: '',
//   title: ''
// });
//
// const file = ref(null);
// const message = ref('');
// const success = ref(false);
// const loading = ref(false);
//
// const validRule = [value => !!value || t('required')];
//
// async function handleSubmit() {
//   try {
//     message.value = '';
//     success.value = false;
//     loading.value = true;
//
//     if (!formRef.value) {
//       message.value = 'Form reference is not available.';
//       loading.value = false;
//       return;
//     }
//
//     const isValid = await formRef.value.validate();
//     if (!isValid.valid) {
//       message.value = t('errorMsg');
//       loading.value = false;
//       return;
//     }
//
//     if (!file.value) {
//       message.value = t('selectFile');
//       loading.value = false;
//       return;
//     }
//     const fileExtension = file.value.name.match(/\.[^.]+$/)[0];
//     const fileName = `submissions/${Date.now()}_${uuidv4()}${fileExtension}`;
//
//     const { error: uploadError } = await supabase.storage
//       .from('abstracts')
//       .upload(fileName, file.value);
//
//     if (uploadError) {
//       message.value = 'File upload failed: ' + uploadError.message;
//       loading.value = false;
//       return;
//     }
//
//
//     const { error: dbError } = await supabase.from('abstract_submissions').insert({
//       name: form.value.name,
//       email: form.value.email,
//       institution: form.value.institution,
//       abstract_title: form.value.title,
//       file_name: fileName,
//     });
//
//     if (dbError) {
//       message.value = 'Failed to save submission: ' + dbError.message;
//       loading.value = false;
//       return;
//     }
//
//     message.value = t('abstractPage.successMsg');
//     success.value = true;
//     loading.value = false;
//
//     form.value = { name: '', email: '', institution: '', title: '' };
//     file.value = null;
//
//     formRef.value?.resetValidation();
//     formRef.value?.reset();
//   } catch (error) {
//     message.value = t('abstractPage.unexpectedError');
//     loading.value = false;
//   }
// }
</script>

<template>
  <base-container>
    <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
      <v-card-text class="text-h5 font-weight-bold">{{ t('abstractPage.title') }}</v-card-text>
    </v-card>
    <base-card>
      <base-paragraph>
        <span v-html="t('abstractPage.submission.text')"></span>
      </base-paragraph>
      <base-paragraph class="text-center website-link">
        <span v-html="t('abstractPage.submission.link')"></span>
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.requirements.font')"></span>
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.requirements.content')"></span>
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.requirements.structure')"></span>
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.requirements.language')"></span>
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.requirements.example')"></span>
      </base-paragraph>
      <base-paragraph>
        {{ t('abstractPage.process.typeSelection') }}
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.process.scientificBoardDesc')"></span>
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.presentation.oral')"></span>
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('abstractPage.presentation.poster')"></span>
      </base-paragraph>
      <base-list class="text-center mt-10 mb-10" style="color: #26A69A">
        <li><span v-html="t('abstractPage.deadlines.submission')"></span></li>
        <li><span v-html="t('abstractPage.deadlines.confirmation')"></span></li>
      </base-list>
      <div class="mt-10 mb-10" style="border: 3px solid red; border-radius: 15px;">
        <base-paragraph class="text-center">
          <span v-html="t('abstractPage.notes.accreditation')"></span>
        </base-paragraph>
        <base-paragraph class="text-center text-red">
          <span v-html="t('abstractPage.notes.publication')"></span>
        </base-paragraph>
      </div>
    </base-card>
  </base-container>
</template>

<style scoped>
.title-card {
  background-color:  #028e9a;
  color: white;
}
.website-link {
  color: #028e9a;
  font-size: 36px;
}
@media (max-width: 768px) {
  .website-link {
    font-size: 24px;
  }
}
</style>
