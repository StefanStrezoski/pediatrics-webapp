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

const { t, tm, rt } = useI18n();
</script>

<template>
  <base-container>
    <base-card>
      <paragraph-no-indent class="text-center mb-5">
        <span style="color: #26A69A" class="text-h5 font-weight-bold">{{ t('accommodationPage.title') }}</span>
      </paragraph-no-indent>
      <v-card rounded="l" class="mb-2 pa-1 text-center text-white" style="background-color: #028e9a;">
        <v-card-text><b>{{ t('accommodationPage.subtitle') }}</b></v-card-text>
      </v-card>
      <v-card outlined class="mt-5 mb-5">
        <v-responsive>
          <v-table>
            <thead>
            <tr>
              <th class="text-center text-white border" style="background-color: #028e9a">{{ t('accommodationPage.table.headers.hotel') }}</th>
              <th class="text-center text-white border" style="background-color: #028e9a">{{ t('accommodationPage.table.headers.accommodation') }}</th>
              <th class="text-center text-white border" style="background-color: #028e9a">{{ t('accommodationPage.table.headers.price') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th rowspan="2" class="border text-center" style="background-color: #70bbc2">
                <span v-html="t('accommodationPage.table.row1.hotel')"></span>
              </th>
              <td class="border" style="background-color: #70bbc2">{{ t('accommodationPage.table.row1.type') }}</td>
              <td class="border" style="background-color: #70bbc2"><b>{{ t('accommodationPage.table.row1.price') }}</b></td>
            </tr>
            <tr>
              <td class="border" style="background-color: #70bbc2">{{ t('accommodationPage.table.row2.type') }}</td>
              <td class="border" style="background-color: #70bbc2"><b>{{ t('accommodationPage.table.row2.price') }}</b></td>
            </tr>
            </tbody>
          </v-table>
        </v-responsive>
      </v-card>
      <paragraph-no-indent class="text-center">
        <b>{{ t('accommodationPage.note') }}</b>
      </paragraph-no-indent>
      <small-card class="mb-5 text-white" style="background-color: #028e9a">
        <paragraph-no-indent class="text-center"><b v-html="t('accommodationPage.cancellation.title')"></b></paragraph-no-indent>
        <base-list class="font-weight-bold">
          <li v-for="(item, index) in tm('accommodationPage.cancellation.items')" :key="index">
            <span v-html="rt(item)"></span>
          </li>
        </base-list>
      </small-card>
      <paragraph-no-indent class="text-center">
        <b>{{ t('accommodationPage.accessNote') }}</b>
      </paragraph-no-indent>
      <paragraph-no-indent class="mb-5">
        <b>{{ t('accommodationPage.contactInfo') }}</b>
      </paragraph-no-indent>
      <div class="d-inline-block align-center">
        <v-img :src="brandLogo" :width="'10rem'"></v-img>
      </div>
      <small-card elevation="0" style="background-color: #028e9a">
        <v-row dense no-gutters>
          <v-col cols="6">
            <v-row dense no-gutters justify="center" align="center">
              <v-icon class="pa-7 responsive-icon" color="white">mdi-phone-in-talk</v-icon>
              <ul class="font-weight-bold text-left custom-list" style="list-style-type: none">
                <li class="text-white"><a href="tel:071/317-377" class="text-white text-decoration-none">071/317-377</a>, {{ t('accommodationPage.contacts.marjan') }}</li>
                <li class="text-white"><a href="tel:070/392-638" class="text-white text-decoration-none">070/392-638</a>, {{ t('accommodationPage.contacts.lara') }}</li>
              </ul>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row dense no-gutters justify="center" align="center">
              <v-icon class="responsive-icon pa-7" color="white">mdi-email-outline</v-icon>
              <ul class="font-weight-bold text-left custom-list" style="list-style-type: none">
                <li class="text-white"><a href="mailto:globalneta@gmail.com" class="text-white">globalneta@gmail.com</a> {{ t('accommodationPage.contacts.andor') }}</li>
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
        <a href="https://congress2026.mk/" target="_blank" class="text-decoration-none text-lg-h4 font-weight-bold"><span class="text-red">www.congress2026.mk</span></a>
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
