<template>
  <div>
    <ProductInformation :page-data="pageData" :bottom-images="bottomImages" />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHead, useFetch } from '#imports';

import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';

const bottomImages = ref([
  { id: 1, url: '/images/moskitiery/dezal-poznan-moskitiera-1.webp' },
]);

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
    'verticale',
  ],
});

// Pobieramy JSON z folderu public
const { data: rawData } = await useFetch('/offers.json');

const offerBoxesJson = ref([]);
if (rawData.value?.boxes) {
  offerBoxesJson.value = rawData.value.boxes;
}

// Przekształcamy dane dla komponentu ProductInformation
const pageData = computed(() => {
  const box = offerBoxesJson.value[6]; // indeks 6 = moskitiery
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/moskitiery/dezal-poznan-moskitiera-1.webp',
          description: box.description,
        },
      ]
    : [];
});

// SEO
useHead({
  title: 'Moskitiery w Poznaniu od firmy Deżal',
  meta: [
    {
      name: 'description',
      content: 'Maskitiery na okna w Poznaniu na Piątkowie. Montaż w cene!',
    },
  ],
});
</script>
