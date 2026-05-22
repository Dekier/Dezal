<template>
  <Header />
  <NuxtPage />
  <Cookies v-if="visibleCookies" @hideCookies="hideCookies" />
  <Offer :offer-data="offerData" :offer-boxes-json="offersJson" />

  <Contact />
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const visibleCookies = ref(true);
import offers from '~~/public/offers-landing.json';

const offersJson = ref(offers.boxes);
const offerData = ref({
  title: 'Zobacz również',
  description: '',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'zaluzje-drewniane',
    'zaluzje-aluminiowe',
    'verticale',
    'moskitiery',
  ],
});

onMounted(() => {
  if (localStorage.cookies) {
    visibleCookies.value = false;
  }
});

const hideCookies = () => {
  visibleCookies.value = false;
  localStorage.cookies = 'false';
};
</script>

<style lang="scss" scoped>
@use 'articles' as *;
</style>
