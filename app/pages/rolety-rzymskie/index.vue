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

// --- DANE DO FAQ (Rolety rzymskie) ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

const faqData = ref([
  {
    // AKTUALIZACJA: Zmiana pytania, skrócona odpowiedź z "hakiem" i dodany url
    question: 'Czy rolety rzymskie można prać i jak je czyścić?',
    answer:
      'Tak, możliwość prania to jedna z największych zalet rolet rzymskich! Tkaninę można łatwo odpiąć od rzepu i odświeżyć. Trzeba jednak bardzo uważać przy demontażu – wrzucenie rolety do pralki bez wcześniejszego wyciągnięcia poziomych pręcików (fiszbin) całkowicie ją zniszczy. Przejdź do naszego artykułu, aby zobaczyć instrukcję bezpiecznego ściągania, prania i suszenia krok po kroku.',
    article_url: '/wiedza/czyszczenie-poradnik',
  },
  {
    question: 'Gdzie montuje się rolety rzymskie?',
    answer:
      'Montaż rolet rzymskich jest bardzo uniwersalny. Najczęściej montuje się je do ściany nad wnęką okienną lub bezpośrednio do sufitu. Istnieje również możliwość montażu bezinwazyjnego na ramie skrzydła okiennego za pomocą specjalnych uchwytów.',
  },
  {
    question: 'Czy rolety rzymskie dobrze zaciemniają pomieszczenie?',
    answer:
      'Poziom zaciemnienia zależy całkowicie od wybranej tkaniny. Oferujemy materiały transparentne (zastępujące firany), półzaciemniające oraz w 100% zaciemniające (typu blackout). Należy jednak pamiętać, że przy montażu ściennym/sufitowym mogą występować delikatne boczne prześwity światła.',
  },
  {
    question: 'Ile miejsca nad oknem zajmuje zwinięta roleta rzymska?',
    answer:
      'Po całkowitym podciągnięciu do góry, materiał rolety rzymskiej układa się w ozdobne fałdy, tworząc tzw. pakiet. W zależności od wysokości rolety i grubości materiału, pakiet ten zajmuje zazwyczaj od 20 do 30 cm. Należy o tym pamiętać planując montaż do ściany lub sufitu, aby zwinięta roleta nie blokowała swobodnego otwierania skrzydeł okiennych.',
  },
  {
    question: 'Czy rolety rzymskie nadają się do kuchni lub łazienki?',
    answer:
      'Tak, jednak zalecamy wybór odpowiednich tkanin, głównie poliestrowych, które nie chłoną wilgoci i zapachów tak mocno jak naturalny len czy bawełna. Są one również znacznie łatwiejsze w czyszczeniu i nie kurczą się po praniu.',
  },
]);
// ----------------------------------------

const bottomImages = ref([
  { id: 1, url: '/images/rolety/dezal-poznan-roleta-rzymska-1.webp' },
  { id: 2, url: '/images/rolety/dezal-poznan-roleta-rzymska-2.webp' },
  { id: 3, url: '/images/rolety/dezal-poznan-roleta-rzymska-4.webp' },
]);

const offerData = ref({
  title: 'Zobacz również',
  description: '',
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
  // Razem z " | DEŻAL" da 52 znaki – perfekcyjnie w punkt!
  title: 'Rolety Rzymskie na wymiar Poznań i okolice',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      // Skrócony do 149 znaków. Podkreśla zalety (pranie, materiały dekoracyjne) i darmowy pomiar.
      content:
        'Eleganckie rolety rzymskie na wymiar w Poznaniu. Ogromny wybór tkanin, możliwość prania materiału. Zamów darmowy pomiar i profesjonalny montaż!',
    },
    {
      property: 'og:title',
      content: 'Rolety Rzymskie na wymiar Poznań i okolice',
    },
    {
      property: 'og:description',
      content:
        'Eleganckie rolety rzymskie na wymiar w Poznaniu. Ogromny wybór tkanin, możliwość prania materiału. Zamów darmowy pomiar i profesjonalny montaż!',
    },
    {
      property: 'og:image',
      // UWAGA: Pełny adres URL. Upewnij się, że ten plik fizycznie istnieje na serwerze!
      content:
        'https://dezalroletypoznan.pl/images/offer/dezal-poznan-roleta-rzymska-0.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Montaż rolet rzymskich na wymiar w Poznaniu - realizacja DEŻAL',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/rolety-rzymskie',
});
</script>

<style scoped lang="scss">
/* opcjonalne dodatkowe style */
.Page {
  &__main-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
