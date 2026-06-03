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
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

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
      'Tkaniny dzień-noc posiadają specjalną warstwę antystatyczną, dlatego na co dzień czyścimy je wyłącznie na sucho. Uważaj na wodę i mocne detergenty – niepoprawne mycie może bezpowrotnie zniszczyć lub odbarwić materiał! Sprawdź nasz kompletny poradnik, aby dowiedzieć się, jak bezpiecznie usuwać trudniejsze plamy krok po kroku.',
    article_url: '/wiedza/czyszczenie-poradnik', // Nowy parametr URL
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
  // Razem z " | DEŻAL" wyniesie 51 znaków – idealnie widoczne na każdym ekranie.
  title: 'Rolety Dzień Noc na wymiar Poznań i okolice',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      // 151 znaków. Konkretne zalety, lokalizacja i informacja o darmowym pomiarze.
      content:
        'Nowoczesne rolety dzień noc na wymiar w Poznaniu i okolicach. Płynna regulacja światła, darmowy pomiar u klienta i profesjonalny montaż. Zapraszamy.',
    },
    {
      property: 'og:title',
      content: 'Rolety Dzień Noc na wymiar Poznań i okolice',
    },
    {
      property: 'og:description',
      content:
        'Nowoczesne rolety dzień noc na wymiar w Poznaniu i okolicach. Płynna regulacja światła, darmowy pomiar u klienta i profesjonalny montaż. Zapraszamy.',
    },
    {
      property: 'og:image',
      // UWAGA: Pełny adres URL i poprawiony folder (rolety, a nie offer)
      content:
        'https://dezalroletypoznan.pl/images/rolety/dezal-poznan-roleta-dzien-noc-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Montaż rolet dzień noc na wymiar w Poznaniu - realizacja DEŻAL',
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
