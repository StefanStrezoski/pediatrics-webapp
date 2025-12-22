<script setup>

import BaseContainer from "@/components/BaseContainer.vue";
import BaseList from "@/components/BaseList.vue";
import SmallCard from "@/components/SmallCard.vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <base-container>
    <v-row>
      <v-col cols="6">
        <v-card rounded="xl" class="mb-2 pa-1 text-left title-card">
          <v-card-text><b>{{ t('organizationPage.title1') }}</b></v-card-text>
        </v-card>
        <small-card class="pl-0">
          <base-list class="org-items">
            <li>
              {{ t('organizationPage.l1') }}
            </li>
            <li>
              {{ t('organizationPage.l2') }}
            </li>
            <li>
              {{ t('organizationPage.l3') }}
            </li>
          </base-list>
        </small-card>
      </v-col>
      <v-col cols="6">
        <v-card rounded="xl" class="mb-2 pa-1 text-left title-card">
          <v-card-text><b>{{ t('organizationPage.title2') }}</b></v-card-text>
        </v-card>
        <small-card class="pl-0">
          <base-list class="org-items">
            <li>
              {{ t('organizationPage.l4') }}
            </li>
            <li>
              {{ t('organizationPage.l5') }}
            </li>
            <li>
              {{ t('organizationPage.l6') }}
            </li>
          </base-list>
        </small-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
          <v-card-text><b>{{ t('organizationPage.title3') }}</b></v-card-text>
        </v-card>
        <small-card>
          <v-row>
            <v-col cols="12">
              <base-list class="org-items">
                <li>{{ t('organizationPage.l7') }}</li>
                <li>{{ t('organizationPage.l8') }}</li>
              </base-list>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <base-list class="org-items">
                <li>{{ t('organizationPage.l9') }}</li>
                <li>{{ t('organizationPage.l10') }}</li>
                <li>{{ t('organizationPage.l11') }}</li>
                <li>{{ t('organizationPage.l12') }}</li>
                <li>{{ t('organizationPage.l13') }}</li>
                <li>{{ t('organizationPage.l14') }}</li>
                <li>{{ t('organizationPage.l15') }}</li>
                <li>{{ t('organizationPage.l16') }}</li>
              </base-list>
            </v-col>
            <v-col cols="6">
              <base-list class="org-items">
                <li>{{ t('organizationPage.l17') }}</li>
                <li>{{ t('organizationPage.l18') }}</li>
                <li>{{ t('organizationPage.l19') }}</li>
                <li>{{ t('organizationPage.l20') }}</li>
                <li>{{ t('organizationPage.l21') }}</li>
                <li>{{ t('organizationPage.l22') }}</li>
                <li>{{ t('organizationPage.l23') }}</li>
                <li>{{ t('organizationPage.l24') }}</li>
              </base-list>
            </v-col>
          </v-row>
        </small-card>
      </v-col>
    </v-row>
  </base-container>
</template>

<style scoped>
.org-items{
  list-style-type: none;
  text-align: left;
}
.title-card {
  background-color: #125280;
  color: white;
}
</style>
