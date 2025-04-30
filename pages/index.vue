<template>
  <div>
    <Hero />
    <AboutCompany />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
    <Contact />
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

useHead({
  title: 'Rolety Poznań – nowoczesne plisy, żaluzje i osłony okienne',
  meta: [
    {
      name: 'description',
      content:
        'Rolety, plisy, żaluzje i moskitiery w Poznaniu – oferujemy nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Rolety Poznań – nowoczesne plisy, żaluzje i osłony okienne',
    },
    {
      property: 'og:description',
      content:
        'Rolety, plisy, żaluzje i moskitiery w Poznaniu – oferujemy nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-dzień-noc-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Roleta dzień noc w salonie',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl',
});
</script>
