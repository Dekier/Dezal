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

// Dane do dolnej galerii
const bottomImages = ref([
  { id: 1, url: '/images/plisy/deżal-poznań-plisa-1.webp' },
  { id: 2, url: '/images/plisy/deżal-poznań-plisa-2.webp' },
  { id: 3, url: '/images/plisy/deżal-poznań-plisa-3.webp' },
  { id: 4, url: '/images/plisy/deżal-poznań-plisa-4.webp' },
]);

// Dane do boxów "Zobacz również"
const offerData = ref({
  title: 'Zobacz również',
  description:
    'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'zaluzje',
    'verticale',
    'moskitiery',
  ],
});

const offerBoxesJson = ref(offers.boxes);

// Dane do ProductInformation (jedna sekcja)
const pageData = computed(() => {
  const box = offerBoxesJson.value[3];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/plisy/deżal-poznań-plisa-1.webp',
          description: box.description,
        },
      ]
    : [];
});

definePageMeta({
  title: 'Plisy okienne Poznań – nowoczesne rozwiązania na wymiar',
  meta: [
    {
      name: 'description',
      content:
        'Plisy okienne do każdego typu okna. Montaż na oknach dachowych, uchylnych i przesuwnych.',
    },
    {
      property: 'og:title',
      content: 'Plisy okienne Poznań – nowoczesne rozwiązania na wymiar',
    },
    {
      property: 'og:description',
      content:
        'Plisy okienne do każdego typu okna. Montaż na oknach dachowych, uchylnych i przesuwnych.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-plisa-1.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Plisy okienne - DEŻAL Poznań',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/plisy',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.85,
  },
});
</script>
