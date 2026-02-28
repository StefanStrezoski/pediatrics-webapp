<template>
  <base-container>
    <!-- Title Section -->
    <small-card class="mt-10 mb-8 pa-0 overflow-hidden hero-header">
      <div class="pa-4 text-center">
        <h1 class="text-h4 font-weight-bold text-white">{{ t('membershipPage.title') }}</h1>
      </div>
    </small-card>

    <!-- Download Section -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-btn href="/files/Membership.docx" target="_blank" color="primary" prepend-icon="mdi-file-pdf-box"
          size="large" class="text-none">
          {{ t('membershipPage.downloadLink') }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Forms Section -->
    <v-row>
      <!-- PAGNIA Form -->
      <v-col cols="12" md="12">
        <base-card>
          <div class="text-h5 font-weight-bold mb-6 color-primary text-center">
            {{ t('membershipPage.pagniaTitle') }}
          </div>
          <v-form ref="pagniaFormRef" v-model="pagniaValid" lazy-validation>
            <v-text-field v-model="pagniaData.name" :label="t('membershipPage.labels.name')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="pagniaData.email" :label="t('membershipPage.labels.email')" :rules="[
              v => !!v || t('membershipPage.validation.required'),
              v => /.+@.+\..+/.test(v) || t('membershipPage.validation.email')
            ]" variant="outlined" required></v-text-field>

            <v-text-field v-model="pagniaData.phone" :label="t('membershipPage.labels.phone')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="pagniaData.licenseNumber" :label="t('membershipPage.labels.licenseNumber')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="pagniaData.institution" :label="t('membershipPage.labels.institution')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="pagniaData.specialization" :label="t('membershipPage.labels.specialization')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-btn :loading="pagniaLoading" color="primary" class="mt-4 w-100" @click="submitForm('pagnia')">
              {{ t('membershipPage.labels.submit') }}
            </v-btn>
          </v-form>
        </base-card>
      </v-col>

      <!-- Neonatology Form -->
      <v-col cols="12" md="6" v-if="hide">
        <base-card>
          <div class="text-h5 font-weight-bold mb-6 color-primary text-center">
            {{ t('membershipPage.neonatologyTitle') }}
          </div>
          <v-form ref="neonatoFormRef" v-model="neonatoValid" lazy-validation>
            <v-text-field v-model="neonatoData.name" :label="t('membershipPage.labels.name')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="neonatoData.email" :label="t('membershipPage.labels.email')" :rules="[
              v => !!v || t('membershipPage.validation.required'),
              v => /.+@.+\..+/.test(v) || t('membershipPage.validation.email')
            ]" variant="outlined" required></v-text-field>

            <v-text-field v-model="neonatoData.phone" :label="t('membershipPage.labels.phone')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="neonatoData.licenseNumber" :label="t('membershipPage.labels.licenseNumber')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="neonatoData.institution" :label="t('membershipPage.labels.institution')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-text-field v-model="neonatoData.specialization" :label="t('membershipPage.labels.specialization')"
              :rules="[v => !!v || t('membershipPage.validation.required')]" variant="outlined" required></v-text-field>

            <v-btn :loading="neonatoLoading" color="primary" class="mt-4 w-100" @click="submitForm('neonato')">
              {{ t('membershipPage.labels.submit') }}
            </v-btn>
          </v-form>
        </base-card>
      </v-col>
    </v-row>

    <!-- Feedback Snackbar -->
    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
      {{ snackbarText }}
    </v-snackbar>
  </base-container>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { supabase } from "@/supabase/supabase.js";
import BaseCard from '@/components/BaseCard.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import SmallCard from '@/components/SmallCard.vue';


const { t } = useI18n();

const hide = ref(false);

const pagniaFormRef = ref(null);
const neonatoFormRef = ref(null);
const pagniaValid = ref(false);
const neonatoValid = ref(false);
const pagniaLoading = ref(false);
const neonatoLoading = ref(false);

const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('success');

const pagniaData = ref({
  name: '',
  email: '',
  phone: '',
  licenseNumber: '',
  institution: '',
  specialization: ''
});

const neonatoData = ref({
  name: '',
  email: '',
  phone: '',
  licenseNumber: '',
  institution: '',
  specialization: ''
});

const submitForm = async (type) => {
  const formRef = type === 'pagnia' ? pagniaFormRef.value : neonatoFormRef.value;
  const data = type === 'pagnia' ? pagniaData.value : neonatoData.value;
  const loading = type === 'pagnia' ? pagniaLoading : neonatoLoading;

  const { valid } = await formRef.validate();
  if (!valid) return;

  loading.value = true;
  try {
    const { error } = await supabase.from('membership_pediatrics').insert({
      name: data.name,
      email: data.email,
      phone_number: data.phone,
      license_number: data.licenseNumber,
      institution: data.institution,
      specialization: data.specialization,
      type: type // 'pagnia' or 'neonato'
    });

    if (error) throw error;

    snackbarText.value = t('membershipPage.successMsg');
    snackbarColor.value = 'success';
    snackbar.value = true;

    // Reset form
    formRef.reset();
    if (type === 'pagnia') {
      pagniaData.value = { name: '', email: '', phone: '', licenseNumber: '', institution: '', specialization: '' };
    } else {
      neonatoData.value = { name: '', email: '', phone: '', licenseNumber: '', institution: '', specialization: '' };
    }
  } catch (err) {
    console.error(err);
    snackbarText.value = t('membershipPage.errorMsg');
    snackbarColor.value = 'error';
    snackbar.value = true;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.hero-header {
  background: linear-gradient(135deg, #028e9a 0%, #26A69A 100%);
}

.color-primary {
  color: #028e9a;
}

.base-container {
  padding-bottom: 50px;
}
</style>
