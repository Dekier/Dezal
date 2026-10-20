<template>
  <div class="layout">
    <Header />
    <NuxtPage />
    <FloatingNotices />
    <Offer :offer-data="offerData" :offer-boxes-json="offersJson" />

    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloatingNotices from '~/components/FloatingNotices.vue';

import offers from '~/assets/content/offers-landing.json';

const offersJson = ref(offers.boxes);
const offerData = ref({
  title: 'Nasza oferta',
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
</script>

<style lang="scss" scoped>
@use 'articles' as *;
</style>
