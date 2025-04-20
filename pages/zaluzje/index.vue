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

// SEO
useHead({
  title: 'Żaluzje drewniane i aluminiowe w Poznaniu od firmy Deżal.',
  meta: [
    {
      name: 'description',
      content:
        'Żaluzje drewniane i aluminiowe w Poznaniu na Piątkowie. Montaż w cenie!',
    },
  ],
});
</script>

<style scoped lang="scss">
/* ewentualne style dodatkowe */
</style>
