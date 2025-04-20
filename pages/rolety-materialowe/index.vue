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

const { data: rawData } = await useFetch('/offers.json');

const offerBoxesJson = ref([]);
if (rawData.value?.boxes) {
  offerBoxesJson.value = rawData.value.boxes;
}

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
  title: 'Rolety Materiałowe w Poznaniu od firmy Deżal.',
  meta: [
    {
      name: 'description',
      content: 'Rolety Materiałowe w Poznaniu na Piątkowie. Montaż w cene!',
    },
  ],
});
</script>

<style scoped lang="scss"></style>
