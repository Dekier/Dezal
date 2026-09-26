<template>
  <main class="DayNight__main-container">
    <ProductHero
      :title-lines="['Rolety', 'dzień-noc']"
      :description="pageDescription"
      image-src="/images/rolety/dezal-poznan-roleta-dzien-noc-20.webp"
      image-alt="Rolety dzień-noc na oknie balkonowym w realizacji DEŻAL"
      primary-label="Umów bezpłatny pomiar"
      primary-link="/kontakt"
      secondary-label="Zobacz realizacje"
      realizations-id="realizacje"
    />

    <ProductRealizations
      section-id="realizacje"
      title="Przykładowe realizacje"
      description="Zobacz rolety dzień-noc zamontowane w różnych wnętrzach."
      image-alt-prefix="Rolety dzień-noc"
      :images="bottomImages"
    />

    <ProductContact
      :title-lines="['Dobierz rolety do', 'swojego wnętrza']"
      description="Umów bezpłatny pomiar w Poznaniu i okolicach. Pomożemy wybrać tkaninę i sposób montażu dopasowany do Twoich okien."
      link-label="Skontaktuj się z nami"
      link-to="/kontakt"
    />

    <Questions :title="faqTitle" :faqList="faqData" />
    <LazyListOfArticles :articles="featuredArticles" />

    <ProductRelated title="Zobacz również" :items="relatedOffers" />
  </main>
</template>

<script setup lang="ts">

import offerPage from '~/assets/content/offers.json';
import offers from '~/assets/content/offers-landing.json';
import articles from '~/assets/content/articles.json';

const chosenArticleIndices = [1, 0, 4];

// Automatycznie mapujemy wybrane indeksy na pełne obiekty artykułów
const featuredArticles = computed(() => {
  return chosenArticleIndices.map((index) => articles[index]).filter(Boolean); // filter(Boolean) zabezpiecza Cię przed błędem, gdybyś wpisał indeks, który nie istnieje
});

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

const relatedTypes = [
  'rolety-materialowe',
  'rolety-rzymskie',
  'plisy',
  'zaluzje-drewniane',
  'zaluzje-aluminiowe',
  'verticale',
  'moskitiery',
];
const relatedOffers = offers.boxes.filter((box) =>
  relatedTypes.includes(box.type)
);

const bottomImages = [
  {
    id: 1,
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-1.webp',
    alt: 'Roleta dzień-noc – realizacja 1',
  },
  {
    id: 2,
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-7.webp',
    alt: 'Roleta dzień-noc – realizacja 2',
  },
  {
    id: 3,
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-3.webp',
    alt: 'Roleta dzień-noc – realizacja 3',
  },
  {
    id: 4,
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-4.webp',
    alt: 'Roleta dzień-noc – realizacja 4',
  },
];

const pageDescription = offerPage.boxes[0].description;
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
@use '@/pages/rolety-dzien-noc/index.scss' as *;
</style>
