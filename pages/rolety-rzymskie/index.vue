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

const bottomImages = ref([
  { id: 1, url: '/images/rolety/dezal-poznan-roleta-rzymska-1.webp' },
  { id: 2, url: '/images/rolety/dezal-poznan-roleta-rzymska-2.webp' },
  { id: 3, url: '/images/rolety/dezal-poznan-roleta-rzymska-4.webp' },
]);

const offerData = ref({
  title: 'Zobacz również',
  description:
    'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
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
  const box = offerBoxesJson.value[2]; // index = 2 → rolety rzymskie
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/rolety/dezal-poznan-roleta-rzymska-0.webp',
          description: box.description,
        },
      ]
    : [];
});

// SEO
useHead({
  title: 'Rolety Rzymskie w Poznaniu od firmy Deżal.',
  meta: [
    {
      name: 'description',
      content: 'Rolety Rzymskie w Poznaniu na Piątkowie. Montaż w cene!',
    },
  ],
});
</script>

<style scoped lang="scss">
/* opcjonalne dodatkowe style */
</style>
