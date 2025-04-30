<template>
  <div class="Plisy__main-container">
    <ProductInformation :page-data="pageData" :bottom-images="bottomImages" />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import offers from '~/public/offers.json';

// Obrazki na dole strony
const bottomImages = ref([
  { id: 1, url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-2.webp' },
  { id: 2, url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp' },
  { id: 3, url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-4.webp' },
]);

// Dane do boksów "Zobacz również"
const offerData = ref({
  title: 'Zobacz również',
  description:
    'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'verticale',
    'moskitiery',
  ],
});

// Fetch JSON z public/offers.json
const offerBoxesJson = ref(offers.boxes);

// Dynamiczne dane do ProductInformation
const pageData = computed(() => {
  const boxes = offerBoxesJson.value;
  if (!boxes.length) return [];

  return [
    {
      id: 0,
      title: boxes[7]?.title ?? '',
      url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.webp',
      description: boxes[7]?.description ?? '',
    },
    {
      id: 1,
      title: boxes[8]?.title ?? '',
      url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp',
      description: boxes[8]?.description ?? '',
    },
  ];
});

definePageMeta({
  title: 'Żaluzje drewniane i aluminiowe – Poznań i okolice',
  meta: [
    {
      name: 'description',
      content:
        'Stylowe żaluzje na wymiar – drewno, aluminium, szeroki wybór kolorów. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Żaluzje drewniane i aluminiowe – Poznań i okolice',
    },
    {
      property: 'og:description',
      content:
        'Stylowe żaluzje na wymiar – drewno, aluminium, szeroki wybór kolorów. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-żaluzja-drewniana-1.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Żaluzje na wymiar - Poznań',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/zaluzje',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.85,
  },
});
</script>

<style scoped lang="scss">
/* ewentualne style dodatkowe */
</style>
