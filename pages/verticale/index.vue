<template>
  <div>
    <ProductInformation :page-data="pageData" :bottom-images="bottomImages" />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import offers from '~/public/offers.json';

// Zdjęcia do dolnej galerii
const bottomImages = ref([
  { id: 1, url: '/images/verticale/deżal-poznań-roleta-verticale-1.webp' },
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
    'zaluzje',
    'moskitiery',
  ],
});

// Pobieranie danych z public/offers.json
const offerBoxesJson = ref(offers.boxes);

// Dane do komponentu ProductInformation
const pageData = computed(() => {
  const box = offerBoxesJson.value[5];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/verticale/deżal-poznań-roleta-verticale-1.webp',
          description: box.description,
        },
      ]
    : [];
});

definePageMeta({
  title: 'Verticale (żaluzje pionowe) – elegancja i funkcjonalność',
  description:
    'Żaluzje pionowe do biur i domów. Verticale na wymiar z montażem w Poznaniu. Elegancja, zaciemnienie i kontrola światła. Darmowy pomiar i indywidualna wycena.',
  ogImage: {
    url: '/images/offer/dezal-poznan-roleta-verticale-1.webp',
    alt: 'Verticale - żaluzje pionowe DEŻAL',
  },
  canonical: 'https://dezalroletypoznan.pl/verticale',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.75,
  },
});
</script>
