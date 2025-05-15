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
    'zaluzje-drewniane',
    'zaluzje-aluminiowe',
    'verticale',
    'moskitiery',
  ],
});

const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

const pageData = computed(() => {
  const box = offerPageJson.value[2]; // index = 2 → rolety rzymskie
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/offer/dezal-poznan-roleta-rzymska-0.jpg',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  title: 'Rolety rzymskie Poznań – elegancja i komfort',
  meta: [
    {
      name: 'description',
      content:
        'Rolety rzymskie z tkanin dekoracyjnych na zamówienie. Poznań i okolice – precyzyjny montaż, profesjonalna obsługa. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Rolety rzymskie Poznań – elegancja i komfort',
    },
    {
      property: 'og:description',
      content:
        'Rolety rzymskie z tkanin dekoracyjnych na zamówienie. Poznań i okolice – precyzyjny montaż, profesjonalna obsługa. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-rzymska-0.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Rolety rzymskie - DEŻAL Poznań',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/rolety-rzymskie',
});
</script>

<style scoped lang="scss">
/* opcjonalne dodatkowe style */
</style>
