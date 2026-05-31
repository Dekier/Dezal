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

// --- DANE DO FAQ (Żaluzje aluminiowe) ---
const faqTitle = ref('Najczęściej zadawane pytania');

const faqData = ref([
  {
    question:
      'Dlaczego żaluzje aluminiowe są lepsze od drewnianych w kuchni lub łazience?',
    answer:
      'Aluminium jest całkowicie odporne na wilgoć, parę wodną i bezpośredni kontakt z wodą, dzięki czemu lamele nie pęcznieją ani nie odkształcają się. Ponadto, aluminium nie chłonie zapachów kuchennych i jest bardzo łatwe do odtłuszczenia, co czyni je najbardziej higienicznym rozwiązaniem do tych pomieszczeń.',
  },
  {
    question: 'Czy żaluzje aluminiowe mocno nagrzewają pomieszczenie?',
    answer:
      'Wręcz przeciwnie. Metalowe lamele bardzo skutecznie odbijają promienie słoneczne, zanim te dotrą do wnętrza pokoju. Szczególnie polecane są żaluzje z powłoką odbijającą światło, które pomagają utrzymać niższą temperaturę w upalne dni. Po całkowitym zamknięciu żaluzji tworzy się bariera termiczna przy szybie.',
  },
  {
    question: 'Jak czyścić żaluzje aluminiowe, żeby nie powyginać lameli?',
    answer:
      'Najbezpieczniej jest czyścić je na sucho miotełką do kurzu lub odkurzaczem z miękką końcówką przy najniższej mocy ssania. Jeśli żaluzje wymagają mycia na mokro, zalecamy zamknięcie lameli na płasko i przetarcie ich wilgotną ściereczką z mikrofibry. Należy unikać silnego dociskania, aby nie doprowadzić do trwałego odkształcenia cienkiego aluminium.',
  },
  {
    question: 'Czym są żaluzje aluminiowe perforowane?',
    answer:
      'To nowoczesny typ lameli z tysiącami mikrootworów. Działają podobnie jak firanka: nawet gdy żaluzja jest całkowicie zamknięta, do wnętrza wpada rozproszone, miękkie światło, a Ty widzisz, co dzieje się na zewnątrz. Jednocześnie osoby z zewnątrz nie widzą, co dzieje się w środku. To idealne rozwiązanie do biur i salonów.',
  },
  {
    question: 'Czy żaluzje aluminiowe kojarzą się tylko z biurem?',
    answer:
      'Ten mit dawno minął. Współczesne żaluzje aluminiowe oferują ogromną gamę kolorów (od matowych czerni po pastele) oraz tekstur, w tym okleiny drewnopodobne, które do złudzenia przypominają naturalne drewno. Dzięki wąskim lamelom (16 mm lub 25 mm) wyglądają bardzo lekko i elegancko w nowoczesnych, minimalistycznych wnętrzach.',
  },
]);
// ----------------------------------------

// Obrazki na dole strony
const bottomImages = ref([
  { id: 1, url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-1.webp' },
  { id: 2, url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-2.webp' },
  { id: 3, url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-3.webp' },
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
    'zaluzje-drewniane',
  ],
});

const offerPageJson = ref(offerPage.boxes);
const offersJson = ref(offers.boxes);

const pageData = computed(() => {
  const boxes = offerPageJson.value;
  if (!boxes.length) return [];

  return [
    {
      id: 0,
      title: boxes[7]?.title ?? '',
      url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-1.webp',
      description: boxes[7]?.description ?? '',
    },
  ];
});

useHead({
  // Razem z " | DEŻAL" wyniesie 53 znaki – idealna długość, bezpieczna dla telefonów.
  title: 'Żaluzje Aluminiowe na wymiar Poznań i okolice',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      // Skrócony do 149 znaków. Wyróżnia główne zalety aluminium i darmowy pomiar.
      content:
        'Nowoczesne żaluzje aluminiowe na wymiar w Poznaniu. Idealne do kuchni, łazienki i biura. Odporne na wilgoć! Zamów darmowy pomiar i fachowy montaż.',
    },
    {
      property: 'og:title',
      content: 'Żaluzje Aluminiowe na wymiar Poznań i okolice',
    },
    {
      property: 'og:description',
      content:
        'Nowoczesne żaluzje aluminiowe na wymiar w Poznaniu. Idealne do kuchni, łazienki i biura. Odporne na wilgoć! Zamów darmowy pomiar i fachowy montaż.',
    },
    {
      property: 'og:image',
      // UWAGA: Pełny adres URL!
      content:
        'https://dezalroletypoznan.pl/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-1.webp',
    },
    {
      property: 'og:image:alt',
      content:
        'Montaż żaluzji aluminiowych na wymiar w Poznaniu - realizacja DEŻAL',
    },
  ],
  // UWAGA: Upewnij się, że ten URL odpowiada faktycznemu adresowi w przeglądarce!
  canonical: 'https://dezalroletypoznan.pl/zaluzje-aluminiowe',
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
