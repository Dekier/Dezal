<template>
  <div class="Page__main-container">
    <ProductInformation
      :page-data="pageData"
      :bottom-images="bottomImages"
      :faq-title="faqTitle"
      :faq-data="faqData"
    />
    <LazyListOfArticles :articles="featuredArticles" />
    <LazyOffer :offer-data="offerData" :offer-boxes-json="offersJson" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import offerPage from '~~/public/offers.json';
import offers from '~~/public/offers-landing.json';
import articles from '~/assets/content/articles.json';

const chosenArticleIndices = [1, 0, 4];

// Automatycznie mapujemy wybrane indeksy na pełne obiekty artykułów
const featuredArticles = computed(() => {
  return chosenArticleIndices.map((index) => articles[index]).filter(Boolean); // filter(Boolean) zabezpiecza Cię przed błędem, gdybyś wpisał indeks, który nie istnieje
});

// --- DANE DO FAQ (Żaluzje drewniane) ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

const faqData = ref([
  {
    question: 'Czym różnią się żaluzje drewniane 25 mm od 50 mm?',
    answer:
      'Szerokość lameli dobieramy zazwyczaj do wielkości okna i sposobu montażu. Lamele 25 mm są lżejsze i węższe, dlatego idealnie nadają się do montażu bezpośrednio na skrzydle okna (nawet bezinwazyjnie). Lamele 50 mm prezentują się niezwykle elegancko na dużych przeszkleniach, ale z racji gabarytów montuje się je najczęściej do ściany lub sufitu nad wnęką.',
  },
  {
    question: 'Czy żaluzje drewniane są bardzo ciężkie?',
    answer:
      'Tak, naturalne drewno (zwłaszcza przy szerokości 50 mm i dużych oknach) ma swoją wagę. Z tego powodu, przy dużych gabarytach wymagany jest solidny montaż inwazyjny na kołkach rozporowych (do ściany/sufitu). Alternatywą są żaluzje bambusowe, które zachowują naturalny wygląd, ale są znacznie lżejsze od drewna.',
  },
  {
    question:
      'Ile miejsca nad oknem zajmuje podciągnięta żaluzja drewniana (tzw. pakiet)?',
    answer:
      'Lamele z drewna są grubsze od aluminiowych, dlatego po całkowitym podciągnięciu zajmują więcej miejsca (zwykle pakiet stanowi około 10-15% całkowitej wysokości rozłożonej żaluzji). Przy planowaniu montażu do ściany nad wnęką, musimy zawiesić ją odpowiednio wysoko, aby zwinięty pakiet nie blokował swobodnego otwierania skrzydeł okiennych.',
  },
  {
    question: 'Jak dbać i czyścić żaluzje drewniane?',
    answer:
      'Naturalne drewno jest wyjątkowo wrażliwe na wilgoć, dlatego żaluzje czyścimy wyłącznie na sucho. Użycie mokrej szmatki lub płynów chemicznych to najprostsza droga do zmatowienia lakieru, spęcznienia i trwałego wygięcia lameli! Przejdź do naszego artykułu, aby dowiedzieć się, jak bezpiecznie usuwać kurz i trudniejsze zabrudzenia bez ryzyka uszkodzenia drewna.',
    article_url: '/wiedza/czyszczenie-poradnik',
  },
  {
    question: 'Czy mogę zamontować żaluzje drewniane w łazience?',
    answer:
      'Prawdziwe drewno naturalne pod wpływem dużej wilgoci i skoków temperatur może po czasie zacząć się odkształcać. Do łazienek oraz słabo wentylowanych kuchni zdecydowanie polecamy żaluzje z bambusa (są dużo odporniejsze na wilgoć) lub żaluzje aluminiowe w okleinie drewnopodobnej.',
  },
]);
// ------------------------------------------

// Obrazki na dole strony
const bottomImages = ref([
  { id: 1, url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-2.webp' },
  { id: 2, url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-1.webp' },
  { id: 3, url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-4.webp' },
]);

// Dane do boksów "Zobacz również"
const offerData = ref({
  title: 'Zobacz również',
  description: '',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-materialowe',
    'rolety-rzymskie',
    'plisy',
    'verticale',
    'moskitiery',
    'zaluzje-aluminiowe',
  ],
});

// Fetch JSON z public/offers.json
const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

// Dynamiczne dane do ProductInformation
const pageData = computed(() => {
  const boxes = offerPageJson.value;
  if (!boxes.length) return [];

  return [
    {
      id: 0,
      title: boxes[8]?.title ?? '',
      url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-1.webp',
      description: boxes[8]?.description ?? '',
    },
  ];
});

useHead({
  // Łącznie z dopiskiem Nuxta " | DEŻAL" da 55 znaków – idealnie.
  title: 'Żaluzje Drewniane i Bambusowe na Wymiar Poznań',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      // Dokładnie 155 znaków. Zawiera frazy: drewniane, bambusowe, na wymiar, Poznań, darmowy pomiar i lamele 25/50mm.
      content:
        'Eleganckie żaluzje drewniane i bambusowe na wymiar w Poznaniu. Oferujemy lamele 25 i 50 mm, darmowy pomiar u klienta oraz fachowy montaż. Sprawdź cennik!',
    },
    {
      property: 'og:title',
      content: 'Żaluzje Drewniane i Bambusowe na Wymiar Poznań',
    },
    {
      property: 'og:description',
      content:
        'Eleganckie żaluzje drewniane i bambusowe na wymiar w Poznaniu. Oferujemy lamele 25 i 50 mm, darmowy pomiar u klienta oraz fachowy montaż. Sprawdź cennik!',
    },
    {
      property: 'og:image',
      // UWAGA: Pełny adres URL!
      content:
        'https://dezalroletypoznan.pl/images/zaluzje/dezal-poznan-zaluzja-drewniana-1.webp',
    },
    {
      property: 'og:image:alt',
      content:
        'Montaż żaluzji drewnianych na wymiar w Poznaniu - realizacja DEŻAL',
    },
  ],
  // UWAGA: Dopasuj dokładnie do adresu URL tej konkretnej podstrony na serwerze!
  canonical: 'https://dezalroletypoznan.pl/zaluzje-drewniane',
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
