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
    <base-card class="mt-10"
      >
        <base-paragraph>{{ t('intro') }}</base-paragraph>
        <base-paragraph>
          {{ t('symposiumPage.p1') }}
        </base-paragraph>
        <base-paragraph>
          {{ t('symposiumPage.p2') }}
        </base-paragraph>
        <base-list style="color: #134b7a">
          <li>
            <b>{{ t('symposiumPage.l1B') }}</b> {{ t('symposiumPage.l1') }}
          </li>
          <li>
            <b>{{ t('symposiumPage.l2B') }}</b> {{ t('symposiumPage.l2') }}

          </li>
          <li>
            <b>{{ t('symposiumPage.l3B') }}</b> {{ t('symposiumPage.l3') }}
          </li>
        </base-list>
        <base-paragraph>
          {{ t('symposiumPage.p3') }}
        </base-paragraph>
        <base-paragraph>
          {{ t('symposiumPage.p4') }}
        </base-paragraph>
        <base-paragraph>
          {{ t('symposiumPage.p5') }}
        </base-paragraph>
        <base-paragraph>
          {{ t('symposiumPage.p6') }}
        </base-paragraph>
        <base-paragraph>
          {{ t('symposiumPage.p7') }}
        </base-paragraph>
        <base-paragraph class="text-center">
          <b>
            {{ t('symposiumPage.p8') }}
          </b>
        </base-paragraph>
        <base-paragraph>
          {{ t('symposiumPage.p9') }}
        </base-paragraph>
        <v-row>
          <v-col cols="4">
            <div class="d-flex flex-column align-center">
              <base-paragraph class="text-center">
                <b>{{ t('symposiumPage.signatures.sig1B') }} </b> <br/>
                {{ t('symposiumPage.signatures.sig1') }}
              </base-paragraph>
              <v-img :width="200" :src="oneSignature"></v-img>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="d-flex flex-column align-center">
              <base-paragraph class="text-center">
                <b>{{ t('symposiumPage.signatures.sig2B') }} </b> <br/>
                {{ t('symposiumPage.signatures.sig2') }}
              </base-paragraph>
              <v-img :width="200" :src="twoSignature"></v-img>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="d-flex flex-column align-center">
              <base-paragraph class="text-center">
                <b>{{ t('symposiumPage.signatures.sig3B') }} </b> <br/>
                {{ t('symposiumPage.signatures.sig3') }}
              </base-paragraph>
              <v-img :width="200" :src="threeSignature"></v-img>
            </div>
          </v-col>
        </v-row>
    </base-card>
  </base-container>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseList from "@/components/BaseList.vue";
// import oneSignature from "@/assets/Potpis1.png";
// import twoSignature from "@/assets/Potpis2.png";
// import threeSignature from "@/assets/Potpis3.png";
import SmallCard from "@/components/SmallCard.vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.hero-title {
  font-size: 1.8rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 0.7rem;
  }

}
</style>
