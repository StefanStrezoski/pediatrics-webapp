<template>
  <base-container>
    <small-card>
      <base-paragraph class="hero-title text-center">
        <b>
          {{ t('navtitle.one') }} <br />
          {{ t('navtitle.two') }}
        </b>
      </base-paragraph>
    </small-card>
    <base-card class="mt-10 mb-5">
      <img :src="obrakanje1" class="float-image" />
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
    <v-row class="mt-5">
      <v-col cols="12">
        <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
          <v-card-text><b class="text-h5 font-weight-bold">{{ t('organizationPage.title1') }}</b></v-card-text>
        </v-card>
        <small-card>
          <v-row>
            <v-col cols="6">
              <base-list class="org-items">
                <li>{{ t('organizationPage.l1') }}</li>
                <li>{{ t('organizationPage.l2') }}</li>
                <li>{{ t('organizationPage.l3') }}</li>
                <li>{{ t('organizationPage.l4') }}</li>
                <li>{{ t('organizationPage.l5') }}</li>
                <li>{{ t('organizationPage.l6') }}</li>
                <li>{{ t('organizationPage.l7') }}</li>
                <li>{{ t('organizationPage.l8') }}</li>
                <li>{{ t('organizationPage.l9') }}</li>
                <li>{{ t('organizationPage.l10') }}</li>
              </base-list>
            </v-col>
            <v-col cols="6">
              <base-list class="org-items">
                <li>{{ t('organizationPage.l11') }}</li>
                <li>{{ t('organizationPage.l12') }}</li>
                <li>{{ t('organizationPage.l13') }}</li>
                <li>{{ t('organizationPage.l14') }}</li>
                <li>{{ t('organizationPage.l15') }}</li>
                <li>{{ t('organizationPage.l16') }}</li>
                <li>{{ t('organizationPage.l17') }}</li>
                <li>{{ t('organizationPage.l18') }}</li>
                <li>{{ t('organizationPage.l19') }}</li>
              </base-list>
            </v-col>
          </v-row>
        </small-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
          <v-card-text><b class="text-h5 font-weight-bold">{{ t('organizationPage.title2') }}</b></v-card-text>
        </v-card>
        <small-card>
          <v-row>
            <v-col cols="6">
              <base-list class="org-items">
                <li>{{ t('organizationPage.l20') }}</li>
                <li>{{ t('organizationPage.l21') }}</li>
                <li>{{ t('organizationPage.l22') }}</li>
                <li>{{ t('organizationPage.l23') }}</li>
                <li>{{ t('organizationPage.l24') }}</li>
                <li>{{ t('organizationPage.l25') }}</li>
                <li>{{ t('organizationPage.l26') }}</li>
                <li>{{ t('organizationPage.l27') }}</li>
                <li>{{ t('organizationPage.l28') }}</li>
                <li>{{ t('organizationPage.l29') }}</li>
              </base-list>
            </v-col>
            <v-col cols="6">
              <base-list class="org-items">
                <li>{{ t('organizationPage.l30') }}</li>
                <li>{{ t('organizationPage.l31') }}</li>
                <li>{{ t('organizationPage.l32') }}</li>
                <li>{{ t('organizationPage.l33') }}</li>
                <li>{{ t('organizationPage.l34') }}</li>
                <li>{{ t('organizationPage.l35') }}</li>
                <li>{{ t('organizationPage.l36') }}</li>
                <li>{{ t('organizationPage.l37') }}</li>
                <li>{{ t('organizationPage.l38') }}</li>
                <li>{{ t('organizationPage.l39') }}</li>
              </base-list>
            </v-col>
          </v-row>
        </small-card>
      </v-col>
    </v-row>
  </base-container>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseList from "@/components/BaseList.vue";
import SmallCard from "@/components/SmallCard.vue";
import { useI18n } from "vue-i18n";
import obrakanje2 from "@/assets/obrakanje2.jpg";
import obrakanje1 from "@/assets/obrakanje1.jpg";

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
  width: 20%;
  /* Fluid width */
  min-width: 150px;
  /* Minimum size to keep it readable */
  max-width: 20%;
  /* Safety to strictly bound it */
  height: auto;
  /* Maintain aspect ratio */
  border-radius: 8px;
  /* Optional but looks nice */
}

.org-items {
  list-style-type: none;
  text-align: left;
}

.title-card {
  background-color: #028e9a;
  color: white;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 0.7rem;
  }

  .float-image {
    width: auto;
    max-width: 40%;
    /* distinct from desktop, allow it to take up to 40% of mobile screen */
    float: left;
    margin-right: 15px;
    margin-bottom: 10px;
  }
}
</style>
