<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import {ref} from "vue";


const embedCode = ref(`
<iframe style="width:100%;height:600px" src="https://online.anyflip.com/ujmxk/gkcv/index.html"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>
`)
</script>

<template>
  <base-container>
    <base-card>
        <div v-html="embedCode"></div>
    </base-card>
  </base-container>
</template>

<style scoped>

</style>
