<script setup>

import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseList from "@/components/BaseList.vue";
import SmallCard from "@/components/SmallCard.vue";
import ParagraphNoIndent from "@/components/ParagraphNoIndent.vue";
import hotelOne from '@/assets/Hotel 1.png'
import hotelTwo from '@/assets/Hotel 2.png'
import hotelThree from '@/assets/Hotel 3.png'
import BaseParagraph from "@/components/BaseParagraph.vue";
import brandLogo from "@/assets/LogoGNA.png"
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <base-container>
    <base-card>
      <paragraph-no-indent class="text-center">
        <b><span class="text-orange-darken-3">{{ t('accommodationPage.p1B') }}</span></b>
      </paragraph-no-indent>
      <v-card rounded="l" class="mb-2 pa-1 text-center bg-light-blue-darken-4">
        <v-card-text><b>{{ t('accommodationPage.p2B') }}</b></v-card-text>
      </v-card>
      <v-card outlined class="mt-5 mb-5">
        <v-responsive>
          <v-table>
            <thead>
            <tr>
              <th class="text-center bg-light-blue-darken-4 border">{{ t('accommodationPage.t1') }}</th>
              <th class="text-center bg-light-blue-darken-4 border">{{ t('accommodationPage.t2') }}</th>
              <th class="text-center bg-light-blue-darken-4 border">{{ t('accommodationPage.t3') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th rowspan="2" class="bg-light-blue-lighten-4 border text-center">{{ t('accommodationPage.td1').split('/')[0] }} &#11088;&#11088;&#11088;&#11088; <br/> {{ t('accommodationPage.td1').split('/')[1] }} </th>
              <td class="bg-light-blue-lighten-4 border">{{ t('accommodationPage.td2') }}</td>
              <td class="bg-light-blue-lighten-4 border"><b>{{ t('accommodationPage.td3B') }}</b></td>
            </tr>
            <tr>
              <td class="bg-light-blue-lighten-4 border">{{ t('accommodationPage.td4') }}</td>
              <td class="bg-light-blue-lighten-4 border"><b>{{ t('accommodationPage.td5B') }}</b></td>
            </tr>
            </tbody>
          </v-table>
        </v-responsive>
      </v-card>
      <paragraph-no-indent class="text-center">
        <b>{{ t('accommodationPage.p3B') }}</b>
      </paragraph-no-indent>
      <small-card class="bg-light-blue-darken-4 mb-5">
        <paragraph-no-indent class="text-center"><span class="text-orange-darken-3"><b>{{ t('accommodationPage.p4B') }}</b></span></paragraph-no-indent>
        <base-list class="font-weight-bold">
          <li>{{ t('accommodationPage.l1') }} <span class="text-orange-darken-3">{{ t('accommodationPage.l1Y') }}</span>{{ t('accommodationPage.l1_2') }} <span class="text-orange-darken-3">{{ t('accommodationPage.l1Y2') }}</span>{{ t('accommodationPage.l1_3') }}</li>
          <li>{{ t('accommodationPage.l2') }} <span class="text-orange-darken-3">{{ t('accommodationPage.l2Y') }}</span>{{ t('accommodationPage.l2_2') }} <span class="text-orange-darken-3">{{ t('accommodationPage.l2Y2') }}</span>{{ t('accommodationPage.l2_3') }}</li>
          <li>{{ t('accommodationPage.l3') }} <span class="text-orange-darken-3">{{ t('accommodationPage.l3Y') }}</span>{{ t('accommodationPage.l3_2') }}</li>
        </base-list>
      </small-card>
      <paragraph-no-indent>
        <b>{{ t('accommodationPage.p5B') }}</b>
      </paragraph-no-indent>
      <paragraph-no-indent class="mb-5">
        <b>{{ t('accommodationPage.p6B') }}</b>
      </paragraph-no-indent>
      <div class="d-inline-block align-center">
        <v-img :src="brandLogo" :width="'10rem'"></v-img>
      </div>
      <small-card class="bg-light-blue-darken-4" elevation="0">
        <v-row dense no-gutters>
          <v-col cols="6">
            <v-row dense no-gutters justify="center" align="center">
              <v-icon class="pa-7 responsive-icon" color="white">mdi-phone-in-talk</v-icon>
              <ul class="font-weight-bold text-left custom-list" style="list-style-type: none">
                <li><a href="tel:071/317-377" class="text-white text-decoration-none">071/317-377</a>, {{ t('accommodationPage.marjan') }}</li>
                <li><a href="tel:070/392-638" class="text-white text-decoration-none">070/392-638</a>, {{ t('accommodationPage.lara') }}</li>
              </ul>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row dense no-gutters justify="center" align="center">
              <v-icon class="responsive-icon pa-7" color="white">mdi-email-outline</v-icon>
              <ul class="font-weight-bold text-left custom-list" style="list-style-type: none">
                <li><a href="mailto:globalneta@gmail.com" class="text-white">globalneta@gmail.com</a> {{ t('accommodationPage.andor') }}</li>
                <li><a href="mailto:globalnetadv@globalnetadv.mk" class="text-white">globalnetadv@globalnetadv.mk</a></li>
              </ul>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense no-gutters>
          <v-col cols="12" class="d-inline-flex justify-center align-center">
              <v-icon class="responsive-icon pa-7" color="white">mdi-web</v-icon>
              <paragraph-no-indent class="text-center font-weight-bold">
                <a href="https://globalnetadv.mk/" target="_blank" class="text-white">www.globalnetadv.mk/</a>
              </paragraph-no-indent>
          </v-col>
        </v-row>
      </small-card>
      <v-row class="mt-5" justify="center" align="center">
        <v-col cols="4">
          <v-img :src="hotelOne" alt="hotel 1"></v-img>
        </v-col>
        <v-col cols="4">
          <v-img :src="hotelTwo" alt="hotel 2"></v-img>
        </v-col>
        <v-col cols="4">
          <v-img :src="hotelThree" alt="hotel 3"></v-img>
        </v-col>
      </v-row>
      <base-paragraph class="text-center mb-0">
        <a href="https://pharmacypractice2025.mk/" target="_blank" class="text-decoration-none text-lg-h4 font-weight-bold"><span class="text-orange-darken-3">www.pharmacypractice2025.mk</span></a>
      </base-paragraph>
    </base-card>
  </base-container>
</template>

<style scoped>
.title-card {
  background-color: #125280;
  color: white;
}
.responsive-icon {
  font-size: 2.5rem;
}
@media (max-width: 768px) {
  .responsive-icon {
    font-size: 1.5rem;
  }
}
.custom-list {
  font-size: 1.2rem;
  text-align: left;
  list-style-position: inside;
}

@media (max-width: 768px) {
  .custom-list {
    font-size: 0.7rem;
    text-align: left;
    list-style-position: inside;
  }
}
</style>
