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
import offers from '~~/public/offers-landing.json';

const offerBoxesJson = ref(offers.boxes);

useHead({
  title: 'Rolety Poznań – nowoczesne plisy, żaluzje i osłony okienne',
  htmlAttrs: {
    lang: 'pl-PL',
  },
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

useSchemaOrg([
  defineLocalBusiness({
    name: 'Deżal Rolety Poznań',
    url: 'https://dezalroletypoznan.pl',
    telephone: '+48 603 630 299', // Pamiętaj o prefiksie +48
    address: {
      addressLocality: 'Poznań',
      addressRegion: 'wielkopolskie',
      postalCode: '60-692', // Twój kod pocztowy
      streetAddress: 'ul. Jaroczyńskiego 41',
      addressCountry: 'PL' // KRYTYCZNE: Jasny sygnał, że to Polska
    },
    image: 'https://dezalroletypoznan.pl/images/logo-rect.png',
  })
])
</script>
