<template>
  <base-container>
    <small-card>
      <base-paragraph class="hero-title text-center">
        <b>
          {{ t('navtitle.one') }} <br/>
          {{ t('navtitle.two') }}
        </b>
      </base-paragraph>
    </small-card>
    <base-card class="mt-10 mb-5">
      <base-paragraph><b>{{ t('intro') }}</b></base-paragraph>
      <base-paragraph>
        <span v-html="t('symposiumPage.p1')"></span>
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p2') }}
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p3') }}
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('symposiumPage.p4') }}</b>
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('symposiumPage.p5') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p6') }}
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('symposiumPage.p7')"></span>
      </base-paragraph>
      <base-paragraph>
        <b>
          {{ t('symposiumPage.p8') }}
        </b>
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('symposiumPage.p9') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p10') }}
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p11') }}
      </base-paragraph>
    </base-card>
    <base-card>
      <img :src="obrakanje2" class="float-image" />
      <base-paragraph>
        <b>{{ t('symposiumPage.p12') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p13') }}
      </base-paragraph>
      <base-paragraph>
        <span v-html="t('symposiumPage.p14')"></span>
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p15') }}
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('symposiumPage.p16') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p17') }}
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p18') }}
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p19') }}
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('symposiumPage.p20') }}</b>
      </base-paragraph>
      <base-paragraph>
        {{ t('symposiumPage.p21') }}
      </base-paragraph>
    </base-card>
  </base-container>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import SmallCard from "@/components/SmallCard.vue";
import {useI18n} from "vue-i18n";
import obrakanje2 from "@/assets/obrakanje2.jpg";

const { t } = useI18n();
</script>

<style scoped>
.hero-title {
  font-size: 1.8rem;
}

.float-image {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
  width: 200px; /* Adjust size as needed, or let it be natural but likely strictly bounded */
  border-radius: 8px; /* Optional but looks nice */
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 0.7rem;
  }

  .float-image {
    width: 100%;
    float: none;
    margin-right: 0;
    margin-bottom: 15px;
  }
}
</style>
