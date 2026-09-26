<template>
  <main class="Page__main-container">
    <ProductHero
      :title-lines="['Moskitiery']"
      :description="product.description"
      image-src="/images/moskitiery/dezal-poznan-moskitiera-2.webp"
      image-alt="Moskitiery – realizacja DEŻAL"
      primary-label="Umów bezpłatny pomiar"
      primary-link="/kontakt"
      secondary-label="Zobacz realizacje"
      realizations-id="realizacje"
    />

    <ProductRealizations
      section-id="realizacje"
      title="Przykładowe realizacje"
      description="Zobacz moskitiery zamontowane w różnych oknach."
      image-alt-prefix="Moskitiery"
      :images="bottomImages"
    />

    <ProductContact
      :title-lines="['Dobierz moskitiery', 'do swoich okien']"
      description="Umów bezpłatny pomiar w Poznaniu i okolicach. Pomożemy dobrać moskitiery do Twoich okien."
      link-label="Skontaktuj się z nami"
      link-to="/kontakt"
    />

    <Questions :title="faqTitle" :faqList="faqData" />
    <LazyListOfArticles :articles="featuredArticles" />
    <ProductRelated
      :title="offerData.title"
      :items="offers.boxes"
      :show-types="offerData.showBoxes"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import offerPage from '~/assets/content/offers.json';
import offers from '~/assets/content/offers-landing.json';
import { useHead } from '#imports';
import articles from '~/assets/content/articles.json';

const chosenArticleIndices = [1, 0, 4];

// Automatycznie mapujemy wybrane indeksy na pełne obiekty artykułów
const featuredArticles = computed(() => {
  return chosenArticleIndices.map((index) => articles[index]).filter(Boolean); // filter(Boolean) zabezpiecza Cię przed błędem, gdybyś wpisał indeks, który nie istnieje
});

// --- DANE DO FAQ (Moskitiery) ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

const faqData = ref([
  {
    question: 'Czy montaż moskitiery okiennej wymaga wiercenia w oknach?',
    answer:
      'Nie! Najpopularniejsze moskitiery ramkowe montuje się całkowicie bezinwazyjnie za pomocą bezinwazyjnych uchwytów (tzw. rygli obrotowych), które zahacza się o uszczelkę ramy okiennej. Dzięki temu montaż jest szybki i nie narusza gwarancji na okna.',
  },
  {
    question: 'Czy muszę zdejmować moskitiery ramkowe na zimę?',
    answer:
      'Zalecamy demontaż moskitier na okres zimowy. Niskie temperatury, szron i zalegający śnieg mogą z czasem osłabić strukturę siatki i skrócić jej żywotność. Samo zdjęcie moskitiery ramkowej jest banalnie proste i zajmuje zaledwie kilkanaście sekund.',
  },
  {
    question: 'Czy moskitiera zaciemnia pomieszczenie i ogranicza widoczność?',
    answer:
      'Współczesne siatki (najczęściej wykonane z włókna szklanego powlekanego PCV) są bardzo cienkie i wytrzymałe. Siatka w kolorze szarym lub czarnym jest niemal niewidoczna z perspektywy pokoju – nie zabiera światła i w żaden sposób nie blokuje cyrkulacji świeżego powietrza.',
  },
  {
    question: 'Czy ramka moskitiery będzie pasować do koloru moich okien?',
    answer:
      'Zdecydowanie tak. Ramki moskitier wykonane są z trwałego aluminium i występują w bogatej palecie kolorów (m.in. biel, antracyt, brąz), a także w okleinach drewnopodobnych (np. złoty dąb, orzech, mahoń, winchester). Dzięki temu profil idealnie wtapia się w ramę okna i staje się niemal niewidocznym elementem elewacji.',
  },
  {
    question:
      'Czy po założeniu moskitiery ramkowej mogę normalnie zamykać i uchylać okno?',
    answer:
      'Tak, w niczym to nie przeszkadza. Moskitiery ramkowe są zaprojektowane w taki sposób, aby ich kołnierz idealnie i płasko przylegał do zewnętrznej uszczelki okna. Możesz swobodnie zamykać, otwierać i uchylać skrzydło okienne przez cały sezon, bez konieczności zdejmowania moskitiery.',
  },
  {
    // AKTUALIZACJA: Skrócona odpowiedź z ostrzeżeniem przed Karcherem i dodany URL
    question: 'Jak dbać i czyścić moskitiery?',
    answer:
      'Siatka z włókna szklanego jest bardzo wytrzymała, ale też wyjątkowo podatna na uszkodzenia mechaniczne. Użycie szorstkich szczotek lub myjki ciśnieniowej (np. typu Karcher) z łatwością trwale rozciągnie lub rozerwie drobne oczka! Przejdź do naszego artykułu, aby dowiedzieć się, jak bezpiecznie wykąpać moskitiery ramkowe pod prysznicem oraz jak prawidłowo odświeżyć delikatne modele kasetowe i tarasowe.',
    article_url: '/wiedza/czyszczenie-poradnik',
  },
]);
// ------------------------------------

const bottomImages = ref([
  { id: 1, url: '/images/moskitiery/dezal-poznan-moskitiera-2.webp' },
  { id: 2, url: '/images/moskitiery/dezal-poznan-moskitiera-3.webp' },
  { id: 3, url: '/images/moskitiery/dezal-poznan-moskitiera-1.webp' },
]);

const offerData = ref({
  title: 'Zobacz również',
  description: '',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'zaluzje-drewniane',
    'zaluzje-aluminiowe',
    'verticale',
  ],
});

const product = offerPage.boxes[6];

useHead({
  title: 'Moskitiery Poznań – ochrona przed owadami',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      content:
        'Moskitiery ramkowe – na każdy typ okna. Montaż w Poznaniu i okolicach. Skuteczna ochrona przed owadami.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-moskitiera-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Moskitiery - DEŻAL',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/moskitiery',
});
</script>

<style scoped lang="scss">
@use '@/assets/stylesheets/product-page' as *;
</style>
