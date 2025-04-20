<template>
  <div>
    <ProductInformation :page-data="pageData" :bottom-images="bottomImages" />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import offers from '~/public/offers.json';
import { useHead } from '#imports';

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

const offerBoxesJson = ref(offers.boxes);

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
  title: 'Moskitiery na wymiar w Poznaniu | Deżal.',
  meta: [
    {
      name: 'description',
      content:
        'Moskitiery na wymiar z montażem w Poznaniu – skuteczna ochrona przed owadami. Ramkowe, rolowane i drzwiowe rozwiązania od firmy Deżal. Pomiar i doradztwo gratis.',
    },
    {
      name: 'keywords',
      content:
        'moskitiery, moskitiery poznań, moskitiery na wymiar, moskitiery ramkowe, moskitiery drzwiowe, montaż moskitier, ochrona przed owadami, osłony okienne',
    },
  ],
});
</script>
