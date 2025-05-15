<template>
  <div>
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

const offerData = ref({
  title: 'Zobacz również',
  description:
    'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
  showBoxes: [
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'zaluzje-drewniane',
    'zaluzje-aluminiowe',
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

const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

const pageData = computed(() => {
  const box = offerPageJson.value[0];
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
  title: 'Rolety dzień noc Poznań – na wymiar nowoczesne i funkcjonalne',
  meta: [
    {
      name: 'description',
      content:
        'Rolety dzień noc na wymiar z montażem w Poznaniu i okolicach. Estetyka i funkcjonalność w jednym. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Rolety dzień noc Poznań – na wymiar nowoczesne i funkcjonalne',
    },
    {
      property: 'og:description',
      content:
        'Rolety dzień noc na wymiar z montażem w Poznaniu i okolicach. Estetyka i funkcjonalność w jednym. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-dzien-noc-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Rolety dzień noc - DEŻAL Poznań',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/rolety-dzien-noc',
});
</script>

<style scoped lang="scss"></style>
