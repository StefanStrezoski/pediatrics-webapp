<script setup lang="ts">

import BaseContainer from "@/components/BaseContainer.vue";
import imgMK from "@/assets/Pediatri_Prva_strana_MK.jpg"
import imgEN from "@/assets/Pediatri_Prva_strana_EN.jpg"
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const showPopup = ref(true);

const currentImage = computed(() => {
  return locale.value === 'en' ? imgEN : imgMK;
});
</script>

<template>
  <base-container>
    <!-- Non-obstructive floating popup banner -->
    <v-card v-if="showPopup" class="popup-banner pa-5 elevation-12" style="border-left: 8px solid #d32f2f;">
      <div class="d-flex justify-space-between align-start mb-3">
        <div class="d-flex align-center">
          <v-icon icon="mdi-alert-circle" color="red-darken-2" size="32" class="mr-2"></v-icon>
          <span class="text-h4 font-weight-black text-red-darken-2" style="letter-spacing: 1px;">{{ t('popup.title')
          }}</span>
        </div>
        <v-btn icon="mdi-close" variant="text" density="compact" color="grey-darken-1"
          @click="showPopup = false"></v-btn>
      </div>
      <div class="text-body-1 font-weight-bold text-grey-darken-4 mt-2" style="line-height: 1.5;">
        <p class="mb-4" v-html="t('popup.p1')"></p>
        <p class="mb-0" v-html="t('popup.p2')"></p>
      </div>
    </v-card>

    <div class="text-h4 font-weight-bold mb-6 text-center text-primary-dark">
      {{ t('programPage.title') }}
    </div>
    <v-img :src="currentImage" alt="About"
      :class="{ 'desktop-image': currentImage === imgMK || currentImage === imgEN }"></v-img>
  </base-container>
</template>

<style scoped>
.v-img {
  width: 100%;
}

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

@media (min-width: 768px) {
  .desktop-image {
    max-height: 750px;
    object-fit: cover;
  }
}
</style>
