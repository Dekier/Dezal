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

const offerData = ref({
  title: 'Zobacz również',
  description:
    'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
  showBoxes: [
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'zaluzje',
    'verticale',
    'moskitiery',
  ],
});

const bottomImages = ref([
  { id: 1, url: '/images/rolety/dezal-poznan-roleta-dzień-noc-1.webp' },
  { id: 2, url: '/images/rolety/dezal-poznan-roleta-dzień-noc-7.webp' },
  { id: 3, url: '/images/rolety/dezal-poznan-roleta-dzień-noc-3.webp' },
  { id: 4, url: '/images/rolety/dezal-poznan-roleta-dzień-noc-4.webp' },
]);

const offerBoxesJson = ref(offers.boxes);

const pageData = computed(() => {
  const box = offerBoxesJson.value[0];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/rolety/dezal-poznan-roleta-dzień-noc-2.webp',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  title: 'Rolety Dzień i Noc na wymiar w Poznaniu | Deżal.',
  meta: [
    {
      name: 'description',
      content:
        'Funkcjonalne rolety dzień i noc na wymiar z montażem w Poznaniu – idealne rozwiązanie do regulacji światła w domu i biurze. Pomiar i wycena gratis!',
    },
    {
      name: 'keywords',
      content:
        'rolety dzień i noc, rolety dzień i noc poznań, rolety na wymiar, osłony okienne poznań, montaż rolet poznań, rolety duo',
    },
  ],
});
</script>

<style scoped lang="scss"></style>
