<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <base-container>
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
