<script setup>
import { ref } from "vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const showPopup = ref(true);
</script>

<template>
  <base-container>
    <!-- Non-obstructive floating popup banner -->
    <v-card 
      v-if="showPopup" 
      class="popup-banner pa-5 elevation-12" 
      style="border-left: 8px solid #d32f2f;"
    >
      <div class="d-flex justify-space-between align-start mb-3">
        <div class="d-flex align-center">
          <v-icon icon="mdi-alert-circle" color="red-darken-2" size="32" class="mr-2"></v-icon>
          <span class="text-h4 font-weight-black text-red-darken-2" style="letter-spacing: 1px;">ВАЖНО</span>
        </div>
        <v-btn icon="mdi-close" variant="text" density="compact" color="grey-darken-1" @click="showPopup = false"></v-btn>
      </div>
      <div class="text-body-1 font-weight-bold text-grey-darken-4 mt-2" style="line-height: 1.5;">
        <p class="mb-4">
          Стручните состаноци се Акредитирани од страна на Лекарската Комора на РСM, и тоа со 
          <span class="font-weight-black text-red-darken-2 text-h6">4</span> бодови за слушатели и 
          <span class="font-weight-black text-red-darken-2 text-h6">6</span> бодови за предавачите.
        </p>
        <p class="mb-0">
          Конгресот е Акредитиран од страна на Лекарската Комора на РСM, и тоа со 
          <span class="font-weight-black text-red-darken-2 text-h6">12</span> бодови за слушатели и 
          <span class="font-weight-black text-red-darken-2 text-h6">20</span> бодови за предавачите.
        </p>
      </div>
    </v-card>
    <div class="text-h4 font-weight-bold mb-6 text-center text-primary-dark">
      {{ t('programPage.title') }}
    </div>

    <!-- Friday -->
    <v-row class="mb-4">
      <v-col cols="12" class="text-center">
        <div class="text-h5 font-weight-bold mb-3 day-header">
          {{ t('programPage.days.friday') }}
        </div>
      </v-col>
    </v-row>

    <!-- Workshops -->
    <base-card class="mb-6 elevation-2 overflow-hidden">
      <div class="category-header pa-3 px-6">
        <v-icon icon="mdi-presentation" color="white" class="mr-2" />
        <span class="text-h6 font-weight-bold text-white">{{ t('programPage.workshops.title') }}</span>
      </div>
      <v-list density="comfortable" class="text-left">
        <v-list-item v-for="i in 5" :key="'w' + i">
          <template v-slot:prepend>
            <v-icon icon="mdi-circle-small" color="primary" />
          </template>
          <v-list-item-title class="text-wrap">
            {{ t(`programPage.workshops.w${i}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </base-card>

    <!-- Session 1 -->
    <base-card class="mb-8 elevation-2 overflow-hidden">
      <div class="category-header pa-3 px-6 secondary">
        <v-icon icon="mdi-account-group" color="white" class="mr-2" />
        <span class="text-h6 font-weight-bold text-white">{{ t('programPage.sessions.title') }}</span>
      </div>
      <v-list density="comfortable" class="text-left">
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-circle-small" color="secondary" />
          </template>
          <v-list-item-title class="text-wrap">
            {{ t('programPage.sessions.s1') }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </base-card>

    <!-- Saturday -->
    <v-row class="mb-4">
      <v-col cols="12" class="text-center">
        <div class="text-h5 font-weight-bold mb-3 day-header">
          {{ t('programPage.days.saturday') }}
        </div>
      </v-col>
    </v-row>

    <base-card class="mb-8 elevation-2 overflow-hidden">
      <div class="category-header pa-3 px-6 secondary">
        <v-icon icon="mdi-account-group" color="white" class="mr-2" />
        <span class="text-h6 font-weight-bold text-white">{{ t('programPage.sessions.title') }}</span>
      </div>
      <v-list density="comfortable" class="text-left">
        <v-list-item v-for="i in [2, 4, 5, 6]" :key="'s' + i">
          <template v-slot:prepend>
            <v-icon icon="mdi-circle-small" color="secondary" />
          </template>
          <v-list-item-title class="text-wrap">
            {{ t(`programPage.sessions.s${i}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </base-card>

    <!-- Sunday -->
    <v-row class="mb-4">
      <v-col cols="12" class="text-center">
        <div class="text-h5 font-weight-bold mb-3 day-header">
          {{ t('programPage.days.sunday') }}
        </div>
      </v-col>
    </v-row>

    <base-card class="mb-6 elevation-2 overflow-hidden">
      <div class="category-header pa-3 px-6 secondary">
        <v-icon icon="mdi-account-group" color="white" class="mr-2" />
        <span class="text-h6 font-weight-bold text-white">{{ t('programPage.sessions.title') }}</span>
      </div>
      <v-list density="comfortable" class="text-left">
        <v-list-item v-for="i in [7, 8]" :key="'s' + i">
          <template v-slot:prepend>
            <v-icon icon="mdi-circle-small" color="secondary" />
          </template>
          <v-list-item-title class="text-wrap">
            {{ t(`programPage.sessions.s${i}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </base-card>

    <!-- Poster Session -->
    <base-card class="mb-12 elevation-2 overflow-hidden accent-card">
      <div class="category-header pa-3 px-6 accent">
        <v-icon icon="mdi-file-presentation-box" color="white" class="mr-2" />
        <span class="text-h6 font-weight-bold text-white">{{ t('programPage.poster.title') }}</span>
      </div>
      <v-card-text class="pa-6 text-left">
        <div class="text-h6 font-weight-medium text-grey-darken-3">
          {{ t('programPage.poster.desc') }}
        </div>
      </v-card-text>
    </base-card>
  </base-container>
</template>

<style scoped>
.popup-banner {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  max-width: 480px;
  background-color: white;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .popup-banner {
    bottom: 16px;
    right: 16px;
    left: 16px;
    max-width: none;
  }
}

.text-primary-dark {
  color: #165557;
}

.day-header {
  color: #165557;
  border-bottom: 3px solid #01c0ce;
  display: inline-block;
  padding-bottom: 4px;
}

.category-header {
  background: linear-gradient(135deg, #165557 0%, #018e9a 100%);
}

.category-header.secondary {
  background: linear-gradient(135deg, #018e9a 0%, #01c0ce 100%);
}

.category-header.accent {
  background: linear-gradient(135deg, #01c0ce 0%, #81e6d9 100%);
}

.accent-card {
  border: 2px solid #81e6d9;
}

.v-list-item-title {
  font-size: 1.1rem !important;
  line-height: 1.4 !important;
  text-align: left !important;
}

@media (max-width: 600px) {
  .v-list-item-title {
    font-size: 0.95rem !important;
  }
}
</style>
