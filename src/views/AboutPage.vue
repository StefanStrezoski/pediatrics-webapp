<script setup lang="ts">

import BaseContainer from "@/components/BaseContainer.vue";
import imgMK from "@/assets/Pediatri_Prva_strana_MK.jpg"
import imgEN from "@/assets/Pediatri_Prva_strana_EN.jpg"
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const currentImage = computed(() => {
  return locale.value === 'en' ? imgEN : imgMK;
});
</script>

<template>
  <base-container>
    <v-img
      :src="currentImage"
      alt="About"
      :class="{ 'desktop-image': currentImage === imgMK || currentImage === imgEN }"
    ></v-img>
  </base-container>
</template>

<style scoped>
.v-img {
  width: 100%;
}


@media (min-width: 768px) {
  .desktop-image {
    max-height: 750px;
    object-fit: cover;
  }
}
</style>
