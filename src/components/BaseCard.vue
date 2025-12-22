<script setup>
// import CardBackground from '@/assets/CardBackground.png';
</script>

<template>
  <v-card
    class="base-card"
    :elevation="8"
    rounded="xl"
    :style="{ backgroundImage: `url(${CardBackground})` }"
  >
    <v-card-text class="text-center">
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.base-card {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
