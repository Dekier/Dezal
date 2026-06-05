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

// --- DANE DO FAQ (Verticale / Żaluzje pionowe) ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

const faqData = ref([
  {
    question: 'Gdzie najczęściej montuje się żaluzje pionowe (verticale)?',
    answer:
      'Verticale są idealnym rozwiązaniem do przesłonięcia bardzo dużych powierzchni szklanych. Tradycyjnie kojarzone są z biurami, gabinetami czy instytucjami publicznymi, jednak coraz częściej wybierane są do nowoczesnych domów prywatnych z dużymi oknami tarasowymi, a także jako eleganckie ścianki działowe dzielące przestrzeń.',
  },
  {
    question: 'Jak steruje się verticalami i jak obracają się pasy?',
    answer:
      'Sterowanie verticalami jest dwufunkcyjne. Za pomocą łańcuszka kulkowego możesz płynnie obracać lamele (pasy materiału) wokół własnej osi o 180 stopni, dostosowując kąt wpadania światła. Z kolei za pomocą sznurka możesz całkowicie zsunąć lamele na jedną stronę okna, rozsunąć je od środka na boki (jak kurtynę teatralną) lub zsunąć do środka.',
  },
  {
    question: 'Czy żaluzje pionowe można zamontować na oknach ze skosami?',
    answer:
      'Tak, verticale to jeden z niewielu systemów osłonowych, który doskonale radzi sobie z nietypowymi kształtami architektonicznymi. Dzięki specjalnej konstrukcji szyny, żaluzje pionowe można bez problemu zamontować w pomieszczeniach ze skosami, na przykład na poddaszach, dopasowując długość poszczególnych lameli do kąta nachylenia sufitu.',
  },
  {
    // AKTUALIZACJA: Skrócona odpowiedź z ostrzeżeniem przed pralką i parametrem URL
    question: 'Jak dbać i czyścić żaluzje pionowe (verticale)?',
    answer:
      'Pasy verticali zbierają mniej kurzu dzięki powłoce antystatycznej, ale z czasem wymagają odświeżenia. Kategorycznie nie wolno wrzucać ich luzem do pralki ani silnie wykręcać – trwałe połamane zagniecenia całkowicie zniszczą materiał! Przejdź do naszego artykułu, aby dowiedzieć się, jak prawidłowo zwinąć lamele w luźne rulony, bezpiecznie umyć je w wannie i wysuszyć pod własnym ciężarem.',
    article_url: '/wiedza/czyszczenie-poradnik',
  },
  {
    question: 'Z jakich materiałów wykonane są pasy żaluzji pionowych?',
    answer:
      'Najpopularniejsze są lamele wykonane z tkanin poliestrowych o różnym stopniu przepuszczalności światła – od delikatnie rozpraszających po całkowicie zaciemniające (blackout). W miejscach o podwyższonych wymogach higienicznych lub sanitarnych (np. placówki medyczne) stosuje się również lamele wykonane ze specjalnego tworzywa PCV, które są całkowicie wodoodporne i łatwe do dezynfekcji.',
  },
]);
// -------------------------------------------------

// Zdjęcia do dolnej galerii
const bottomImages = ref([
  { id: 1, url: '/images/verticale/dezal-poznan-roleta-verticale-1.webp' },
]);

// Dane do komponentu Offer
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
    'moskitiery',
  ],
});

// Pobieranie danych z public/offers.json
const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

// Dane do komponentu ProductInformation
const pageData = computed(() => {
  const box = offerPageJson.value[5];
  return box
    ? [
        {
          id: 0,
          title: box.title,
          url: '/images/verticale/dezal-poznan-roleta-verticale-1.webp',
          description: box.description,
        },
      ]
    : [];
});
useHead({
  // Razem z " | DEŻAL" wyniesie 52 znaki – idealnie.
  title: 'Verticale (Żaluzje Pionowe) na wymiar Poznań',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      // Skrócony do 145 znaków. Trafia w punkt: słowa kluczowe, przeznaczenie (biura/duże okna) i darmowy pomiar.
      content:
        'Żaluzje pionowe (verticale) na wymiar w Poznaniu. Idealne do biur i domów z dużymi oknami. Zapewniamy darmowy pomiar i profesjonalny montaż!',
    },
    {
      property: 'og:title',
      content: 'Verticale (Żaluzje Pionowe) na wymiar Poznań',
    },
    {
      property: 'og:description',
      content:
        'Żaluzje pionowe (verticale) na wymiar w Poznaniu. Idealne do biur i domów z dużymi oknami. Zapewniamy darmowy pomiar i profesjonalny montaż!',
    },
    {
      property: 'og:image',
      // UWAGA: Pełny adres URL oraz prawidłowy folder (verticale)
      content:
        'https://dezalroletypoznan.pl/images/verticale/dezal-poznan-roleta-verticale-1.webp',
    },
    {
      property: 'og:image:alt',
      content:
        'Montaż żaluzji pionowych (verticali) na wymiar w Poznaniu - realizacja DEŻAL',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/verticale',
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
