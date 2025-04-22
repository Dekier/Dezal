<template>
  <div>
    <Hero />
    <AboutCompany />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import offers from '~/public/offers.json';
const offerData = ref({
  title: 'Oferujemy',
  description: 'W naszej ofercie znajdziesz:',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'zaluzje',
    'verticale',
    'moskitiery',
  ],
});

const offerBoxesJson = ref(offers.boxes);

definePageMeta({
  title: 'Rolety Poznań – DEŻAL: nowoczesne plisy, żaluzje i osłony okienne',
  description:
    'Rolety, plisy, żaluzje i moskitiery w Poznaniu – DEŻAL oferuje nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena.',
  ogImage: {
    url: '/images/offer/dezal-poznan-roleta-dzień-noc-2.webp',
    alt: 'Roleta dzień noc w salonie',
  },
  canonical: 'https://dezalroletypoznan.pl',
  sitemap: {
    changefreq: 'monthly',
    priority: 1,
  },
});
</script>
