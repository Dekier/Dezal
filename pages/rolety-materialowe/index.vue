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

// Dane do galerii zdjęć
const bottomImages = ref([
  { id: 1, url: '/images/rolety/dezal-poznan-roleta-materiałowa-1.webp' },
  { id: 2, url: '/images/rolety/dezal-poznan-roleta-materiałowa-2.webp' },
  { id: 3, url: '/images/rolety/dezal-poznan-roleta-materiałowa-3.webp' },
  { id: 4, url: '/images/rolety/dezal-poznan-roleta-materiałowa-4.webp' },
]);

// Dane do boxów
const offerData = ref({
  title: 'Zobacz również',
  description:
    'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-rzymskie',
    'plisy',
    'zaluzje',
    'verticale',
    'moskitiery',
  ],
});

const offerBoxesJson = ref(offers.boxes);

const pageData = computed(() => {
  const box = offerBoxesJson.value[1];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/rolety/dezal-poznan-roleta-materiałowa-3.webp',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  title: 'Rolety Materiałowe na wymiar w Poznaniu | Deżal.',
  meta: [
    {
      name: 'description',
      content:
        'Klasyczne i nowoczesne rolety materiałowe na wymiar – montaż w Poznaniu i okolicach. Szeroki wybór tkanin, profesjonalny pomiar i doradztwo od firmy Deżal.',
    },
    {
      name: 'keywords',
      content:
        'rolety materiałowe, rolety materiałowe poznań, rolety na wymiar, osłony okienne, montaż rolet, tkaniny zaciemniające, rolety wewnętrzne',
    },
  ],
});
</script>

<style scoped lang="scss"></style>
