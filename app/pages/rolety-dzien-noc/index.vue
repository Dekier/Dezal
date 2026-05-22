<template>
  <div class="Page__main-container">
    <ProductInformation
      :page-data="pageData"
      :bottom-images="bottomImages"
      :faq-title="faqTitle"
      :faq-data="faqData"
    />
    <Offer :offer-data="offerData" :offer-boxes-json="offersJson" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import offerPage from '~~/public/offers.json';
import offers from '~~/public/offers-landing.json';

// --- DANE DO FAQ (Rolety dzień noc) ---
const faqTitle = ref('Najczęściej zadawane pytania');

const faqData = ref([
  {
    question: 'Jak dokładnie działają rolety dzień noc?',
    answer:
      'Rolety dzień noc zbudowane są z naprzemiennych pasów materiału: zaciemniających oraz transparentnych (siateczki). Dwie warstwy tkaniny przesuwają się względem siebie, co pozwala na płynne regulowanie ilości światła wpadającego do wnętrza, bez konieczności całkowitego podnoszenia rolety.',
  },
  {
    question:
      'Czy rolety dzień noc można zamontować bezinwazyjnie (bez wiercenia)?',
    answer:
      'Tak! Oferujemy montaż bezinwazyjny – roleta jest wtedy zawieszana na specjalnych haczykach nakładanych na ramę okna lub przyklejana. Jeśli zależy Ci na stabilności, polecamy systemy w kasetach z prowadnicami, które montujemy w świetle szyby.',
  },
  {
    question: 'Czy rolety dzień noc zapewnią 100% zaciemnienia w sypialni?',
    answer:
      'Standardowe tkaniny dzień noc świetnie chronią przed słońcem i wzrokiem sąsiadów, jednak przez strukturę pasów mogą przepuszczać delikatną poświatę. Jeśli zależy Ci na pełnym zaciemnieniu, w naszej ofercie posiadamy specjalne, podgumowane tkaniny dzień noc (tzw. 100% blackout), które w połączeniu z kasetą i prowadnicami dają doskonały efekt.',
  },
  {
    question: 'Jak dbać i czyścić rolety dzień noc?',
    answer:
      'Czyszczenie jest bardzo proste. Na co dzień wystarczy regularnie omiatać roletę miotełką do kurzu lub suchą ściereczką z mikrofibry. W przypadku miejscowych zabrudzeń można delikatnie przetrzeć plamę lekko wilgotną gąbką z odrobiną szarego mydła. Tych rolet nie wolno prać w pralce ani prasować.',
  },
  {
    question: 'Czy pasy na rolecie zgrają się z sąsiednim oknem?',
    answer:
      'Tak. Wykonując rolety na wymiar do okien znajdujących się obok siebie (np. drzwi balkonowe i okno obok), zawsze dbamy o tzw. pasowanie materiału. Dzięki temu pasy na obu roletach układają się w jednej linii, co wygląda bardzo estetycznie i spójnie.',
  },
]);
// -------------------------------------

const offerData = ref({
  title: 'Zobacz również',
  description: '',
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
  { id: 1, url: '/images/rolety/dezal-poznan-roleta-dzien-noc-1.webp' },
  { id: 2, url: '/images/rolety/dezal-poznan-roleta-dzien-noc-7.webp' },
  { id: 3, url: '/images/rolety/dezal-poznan-roleta-dzien-noc-3.webp' },
  { id: 4, url: '/images/rolety/dezal-poznan-roleta-dzien-noc-4.webp' },
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
          url: '/images/rolety/dezal-poznan-roleta-dzien-noc-2.webp',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  title: 'Rolety dzień noc Poznań – na wymiar nowoczesne i funkcjonalne',
  htmlAttrs: {
    lang: 'pl',
  },
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
      content: 'Rolety dzień noc - DEŻAL',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/rolety-dzien-noc',
});
</script>

<style scoped lang="scss">
.Page {
  &__main-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
