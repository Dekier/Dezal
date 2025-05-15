<template>
  <div>
    <ProductInformation :page-data="pageData" :bottom-images="bottomImages" />
    <Offer :offer-data="offerData" :offer-boxes-json="offersJson" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import offerPage from '~/public/offers.json';
import offers from '~/public/offers-landing.json';

// Zdjęcia do dolnej galerii
const bottomImages = ref([
  { id: 1, url: '/images/verticale/dezal-poznan-roleta-verticale-1.webp' },
]);

// Dane do komponentu Offer
const offerData = ref({
  title: 'Zobacz również',
  description:
    'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'zaluzje-drewniane',
    'zaluzje-aluminiowe',
    'moskitiery',
  ],
});

// Pobieranie danych z public/offers.json

const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

// Dane do komponentu ProductInformation
const pageData = computed(() => {
  const box = offerPageJson.value[5];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/verticale/dezal-poznan-roleta-verticale-1.webp',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  title: 'Verticale (żaluzje pionowe) – elegancja i funkcjonalność',
  meta: [
    {
      name: 'description',
      content:
        'Żaluzje pionowe do biur i domów. Verticale na wymiar z montażem w Poznaniu. Elegancja, zaciemnienie i kontrola światła. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Verticale (żaluzje pionowe) – elegancja i funkcjonalność',
    },
    {
      property: 'og:description',
      content:
        'Żaluzje pionowe do biur i domów. Verticale na wymiar z montażem w Poznaniu. Elegancja, zaciemnienie i kontrola światła. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-verticale-1.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Verticale - żaluzje pionowe DEŻAL',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/verticale',
});
</script>
