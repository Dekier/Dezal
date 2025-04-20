<template>
  <div>
    <Hero />
    <AboutCompany />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import offers from '~/public/offers.json';
const offerData = ref({
  title: 'Oferujemy',
  description: 'W naszej ofercie znajdziesz:',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'zaluzje',
    'verticale',
    'moskitiery',
  ],
});

const offerBoxesJson = ref(offers.boxes);

useHead({
  title: 'DEŻAL: nowoczesne rolety, plisy i żaluzje | Poznań i okolice.',
  meta: [
    {
      name: 'description',
      content:
        'Oferowane przez firmę DEŻAL Poznań rolety, plisy i żaluzje to najwyższej jakości osłony okienne. Indywidualna oferta, szczegółowy pomiar i szybka realizacja.',
    },
  ],
});
</script>
