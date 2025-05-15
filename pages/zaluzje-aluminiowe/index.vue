<template>
  <div class="Plisy__main-container">
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

// Obrazki na dole strony
const bottomImages = ref([
  { id: 1, url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.webp' },
  { id: 2, url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-2.webp' },
  { id: 3, url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-3.webp' },
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
    'zaluzje-drewniane',
  ],
});

// Fetch JSON z public/offers.json
const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

// Dynamiczne dane do ProductInformation
const pageData = computed(() => {
  const boxes = offerPageJson.value;
  if (!boxes.length) return [];

  return [
    {
      id: 0,
      title: boxes[7]?.title ?? '',
      url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.webp',
      description: boxes[7]?.description ?? '',
    },
  ];
});

useHead({
  title: 'Stylowe żaluzje aluminiowe na wymiar – Poznań i okolice',
  meta: [
    {
      name: 'description',
      content:
        'Stylowe żaluzje na wymiar –  aluminium, szeroki wybór kolorów. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Żaluzje aluminiowe – Poznań i okolice',
    },
    {
      property: 'og:description',
      content:
        'Stylowe żaluzje na wymiar – aluminium, szeroki wybór kolorów. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Żaluzje na wymiar - Poznań',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/zaluzje',
});
</script>

<style scoped lang="scss">
/* ewentualne style dodatkowe */
</style>
