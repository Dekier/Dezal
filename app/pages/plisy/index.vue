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

// --- NOWE DANE DO FAQ ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

const faqData = ref([
  {
    question: 'Czym różnią się plisy od tradycyjnych rolet?',
    answer:
      'Główną zaletą plis jest możliwość sterowania materiałem zarówno od góry, jak i od dołu. Dzięki temu możesz zasłonić dowolny fragment okna (np. tylko środek lub sam dół), co daje pełną kontrolę nad wpadającym światłem i prywatnością.',
  },
  {
    question: 'Czy montaż plis wymaga wiercenia w oknach?',
    answer:
      'Nie zawsze! Oferujemy zarówno montaż inwazyjny (przykręcany w świetle szyby, co jest najbardziej stabilne), jak i montaż bezinwazyjny na specjalnych zaczepach, który nie narusza ramy okiennej.',
  },
  {
    question: 'Czy plisy sprawdzą się na oknach dachowych?',
    answer:
      'Zdecydowanie tak. Plisy to jedno z najlepszych rozwiązań do okien dachowych. Wyposażone są w specjalne prowadnice lub linki, które zapobiegają "zwisaniu" materiału pod kątem.',
  },
  {
    // AKTUALIZACJA: Nowe brzmienie odpowiedzi, dodany parametr article_url
    question: 'Jak czyścić i prać plisy okienne?',
    answer:
      'Większość naszych materiałów plisowanych można prać ręcznie na mokro, jednak największym błędem jest ich nieprawidłowe suszenie. Rozwieszenie mokrej plisy w stanie rozłożonym sprawi, że bezpowrotnie straci ona swoje charakterystyczne, fabryczne zagięcia! Przejdź do pełnego artykułu, aby dowiedzieć się, jak prawidłowo złożyć i wysuszyć plisę bezpośrednio na oknie, by służyła latami.',
    article_url: '/wiedza/czyszczenie-poradnik',
  },
  {
    question: 'Czy plisy mogą całkowicie zaciemnić pomieszczenie?',
    answer:
      'Tak. W naszej ofercie posiadamy specjalne materiały zaciemniające (tzw. blackout), często pokryte powłoką perłową lub aluminiową od strony szyby. Jeśli zależy Ci na maksymalnym zaciemnieniu, świetnie sprawdzi się system tkanin o strukturze plastra miodu (Duette), w którym ukryte są sznurki.',
  },
]);
// ------------------------

// Dane do dolnej galerii
const bottomImages = ref([
  { id: 1, url: '/images/plisy/dezal-poznan-plisa-1.webp' },
  { id: 2, url: '/images/plisy/dezal-poznan-plisa-2.webp' },
  { id: 3, url: '/images/plisy/dezal-poznan-plisa-3.webp' },
  { id: 4, url: '/images/plisy/dezal-poznan-plisa-4.webp' },
]);

// Dane do boxów "Zobacz również"
const offerData = ref({
  title: 'Zobacz również',
  description: '',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'zaluzje-drewniane',
    'zaluzje-aluminiowe',
    'verticale',
    'moskitiery',
  ],
});

const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

// Dane do ProductInformation (jedna sekcja)
const pageData = computed(() => {
  const box = offerPageJson.value[3];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/plisy/dezal-poznan-plisa-1.webp',
          description: box.description,
        },
      ]
    : [];
});
useHead({
  title: 'Plisy okienne na wymiar Poznań i okolice',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      content:
        'Nowoczesne plisy okienne na wymiar w Poznaniu. Idealne do okien dachowych, uchylnych i przesuwnych. Zamów darmowy pomiar i wycenę u Ciebie w domu!',
    },
    {
      property: 'og:title',
      content: 'Plisy okienne na wymiar Poznań i okolice',
    },
    {
      property: 'og:description',
      content:
        'Nowoczesne plisy okienne na wymiar w Poznaniu. Idealne do okien dachowych, uchylnych i przesuwnych. Zamów darmowy pomiar i wycenę u Ciebie w domu!',
    },
    {
      property: 'og:image',
      content:
        'https://dezalroletypoznan.pl/images/plisy/dezal-poznan-plisa-1.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Montaż plisy okiennej w Poznaniu - realizacja DEŻAL',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/plisy',
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
