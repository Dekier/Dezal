<template>
  <div>
    <Hero />
    <AboutCompany />
    <LandingOffer :offer-boxes-json="offerBoxesJson" />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import offers from '~/public/offers-landing.json';

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
      content: '/images/offer/dezal-poznan-roleta-dzien-noc-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Roleta dzień noc w salonie',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl',
});
</script>
