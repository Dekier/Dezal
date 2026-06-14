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
import offerPage from '~/assets/content/offers.json';
import offers from '~/assets/content/offers-landing.json';
import articles from '~/assets/content/articles.json';

const chosenArticleIndices = [1, 0, 4];

// Automatycznie mapujemy wybrane indeksy na pełne obiekty artykułów
const featuredArticles = computed(() => {
  return chosenArticleIndices.map((index) => articles[index]).filter(Boolean); // filter(Boolean) zabezpiecza Cię przed błędem, gdybyś wpisał indeks, który nie istnieje
});

// --- DANE DO FAQ (Rolety materiałowe) ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

const faqData = ref([
  {
    question: 'Czym różnią się rolety wolnowiszące od rolet w kasecie?',
    answer:
      'Rolety w kasecie są wyposażone w boczne prowadnice, które utrzymują materiał blisko szyby (nawet przy uchylonym oknie) i eliminują prześwity po bokach. Sama kaseta chroni zwinięty materiał przed kurzem. Rolety wolnowiszące nie mają prowadnic i zazwyczaj montuje się je do ściany lub sufitu, aby zasłonić całą wnękę okienną, albo bezpośrednio na skrzydło okna.',
  },
  {
    question:
      'Czy dostępne są rolety materiałowe, które całkowicie zaciemnią pokój?',
    answer:
      'Tak! Oferujemy szeroki wybór tkanin zaciemniających w 100% (tzw. materiały blackout). Są one pokryte specjalną podgumowaną warstwą lub powłoką perłową/srebrną, która dodatkowo odbija promienie słoneczne, chroniąc pomieszczenie przed nagrzewaniem. To idealne rozwiązanie do sypialni i pokoi dziecięcych.',
  },
  {
    // AKTUALIZACJA: Nowe pytanie, skrócona odpowiedź z "hakiem" marketingowym i linkiem
    question: 'Jak dbać i czyścić rolety materiałowe?',
    answer:
      'Klasyczne rolety materiałowe są fabrycznie impregnowane, co nadaje im odpowiednią sztywność. Kategorycznie nie wolno ich prać w pralce ani namaczać w wannie. Silne przemoczenie zmyje warstwę ochronną, przez co tkanina bezpowrotnie straci swój fason, a jej brzegi zaczną się strzępić. Przejdź do naszego uniwersalnego artykułu, aby dowiedzieć się, jak bezpiecznie usuwać drobne plamy bez ryzyka zniszczenia osłony.',
    article_url: '/wiedza/czyszczenie-poradnik',
  },
  {
    question: 'Co zrobić, żeby materiał nie odstawał, gdy uchylam okno?',
    answer:
      'W przypadku rolet w kasecie, problem ten rozwiązują prowadnice boczne. Jeśli jednak decydujesz się na rolety montowane bezpośrednio na ramie okna bez kasety, stosujemy tzw. prowadzenie żyłkowe. Jest to cienka, niewidoczna żyłka napięta wzdłuż okna, która przytrzymuje materiał przy samej szybie podczas uchylania.',
  },
  {
    question: 'Czy montaż rolet wymaga wiercenia w oknach?',
    answer:
      'To zależy od wybranego systemu. Oferujemy rolety w systemie bezinwazyjnym, które zawiesza się na specjalnych haczykach nakładanych na górną krawędź ramy okiennej lub przykleja za pomocą mocnej taśmy dwustronnej. Posiadamy również tradycyjne systemy inwazyjne, przykręcane do listew przybowych (co nie powoduje utraty gwarancji na okna).',
  },
]);
// ----------------------------------------

// Dane do galerii zdjęć
const bottomImages = ref([
  { id: 1, url: '/images/rolety/dezal-poznan-roleta-materialowa-1.webp' },
  { id: 2, url: '/images/rolety/dezal-poznan-roleta-materialowa-2.webp' },
  { id: 3, url: '/images/rolety/dezal-poznan-roleta-materialowa-3.webp' },
  { id: 4, url: '/images/rolety/dezal-poznan-roleta-materialowa-4.webp' },
]);

// Dane do boxów
const offerData = ref({
  title: 'Zobacz również',
  description: '',
  showBoxes: [
    'rolety-dzien-noc',
    'rolety-rzymskie',
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
  const box = offerPageJson.value[1];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/rolety/dezal-poznan-roleta-materialowa-20.webp',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  // Tytuł ma 46 znaków. Z " | DEŻAL" wyniesie 54 znaki – idealna długość!
  title: 'Rolety Materiałowe na wymiar Poznań i okolice',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      // Skrócony i zoptymalizowany pod 148 znaków. Podkreśla zalety i zachęca do kontaktu.
      content:
        'Klasyczne i zaciemniające rolety materiałowe na wymiar. Poznań i okolice. Ogromny wybór tkanin, darmowy pomiar u klienta oraz fachowy montaż.',
    },
    {
      property: 'og:title',
      content: 'Rolety Materiałowe na wymiar Poznań i okolice',
    },
    {
      property: 'og:description',
      content:
        'Klasyczne i zaciemniające rolety materiałowe na wymiar. Poznań i okolice. Ogromny wybór tkanin, darmowy pomiar u klienta oraz fachowy montaż.',
    },
    {
      property: 'og:image',
      // UWAGA: Pełny adres URL i poprawiony folder (rolety zamiast offer)
      content:
        'https://dezalroletypoznan.pl/images/rolety/dezal-poznan-roleta-materialowa-3.webp',
    },
    {
      property: 'og:image:alt',
      content:
        'Montaż rolet materiałowych na wymiar w Poznaniu - realizacja DEŻAL',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/rolety-materialowe',
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
