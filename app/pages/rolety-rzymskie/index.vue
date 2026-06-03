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

// --- DANE DO FAQ (Rolety rzymskie) ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

const faqData = ref([
  {
    question: 'Czy rolety rzymskie można prać?',
    answer:
      'Tak, to jedna z ich największych zalet! Materiał jest przypinany do mechanizmu za pomocą rzepu. Wystarczy odpiąć tkaninę, wyciągnąć pręciki usztywniające (fiszbiny) oraz obciążnik dolny, a następnie wyprać materiał zgodnie z zaleceniami producenta. Dokładną instrukcję, jak to zrobić, znajdziesz na wszywce z symbolami prania, dokładnie takiej samej, jak na ubraniach (zazwyczaj jest to delikatne pranie w 30°C).',
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
