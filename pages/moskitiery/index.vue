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
  { id: 1, url: '/images/moskitiery/dezal-poznan-moskitiera-2.webp' },
  { id: 2, url: '/images/moskitiery/dezal-poznan-moskitiera-3.webp' },
  { id: 3, url: '/images/moskitiery/dezal-poznan-moskitiera-1.webp' },
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
          url: '/images/moskitiery/dezal-poznan-moskitiera-2.webp',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  title: 'Moskitiery Poznań – ochrona przed owadami',
  meta: [
    {
      name: 'description',
      content:
        'Moskitiery ramkowe – na każdy typ okna. Montaż w Poznaniu i okolicach. Skuteczna ochrona przed owadami.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-moskitiera-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Moskitiery - DEŻAL Poznań',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/moskitiery',
});
</script>
