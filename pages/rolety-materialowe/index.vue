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
    'zaluzje-drewniane',
    'zaluzje-aluminiowe',
    'verticale',
    'moskitiery',
  ],
});

const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

const pageData = computed(() => {
  const box = offerPageJson.value[1];
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
  title: 'Rolety materiałowe Poznań – stylowe osłony okienne',
  meta: [
    {
      name: 'description',
      content:
        'Rolety materiałowe na wymiar w Poznaniu. Duży wybór tkanin, profesjonalny montaż, szybka realizacja. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Rolety materiałowe Poznań – stylowe osłony okienne',
    },
    {
      property: 'og:description',
      content:
        'Rolety materiałowe na wymiar w Poznaniu. Duży wybór tkanin, profesjonalny montaż, szybka realizacja. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-materiałowa-3.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Rolety materiałowe - DEŻAL Poznań',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/rolety-materialowe',
});
</script>

<style scoped lang="scss"></style>
