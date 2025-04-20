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
  title: 'Rolety Poznań – DEŻAL: nowoczesne plisy, żaluzje i osłony okienne',
  meta: [
    {
      name: 'description',
      content:
        'Rolety, plisy, żaluzje i moskitiery w Poznaniu – DEŻAL oferuje nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena. Obsługujemy Poznań i okolice.',
    },
  ],
});
</script>
