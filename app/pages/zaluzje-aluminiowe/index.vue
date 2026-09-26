<template>
  <main class="Page__main-container">
    <ProductHero
      :title-lines="['Żaluzje', 'aluminiowe']"
      :description="product.description"
      image-src="/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-3.webp"
      image-alt="Żaluzje aluminiowe – realizacja DEŻAL"
      primary-label="Umów bezpłatny pomiar"
      primary-link="/kontakt"
      secondary-label="Zobacz realizacje"
      realizations-id="realizacje"
    />

    <ProductRealizations
      section-id="realizacje"
      title="Przykładowe realizacje"
      description="Zobacz żaluzje aluminiowe w gotowych realizacjach."
      image-alt-prefix="Żaluzje aluminiowe"
      :images="bottomImages"
    />

    <ProductContact
      :title-lines="['Dobierz żaluzje aluminiowe', 'do swojego wnętrza']"
      description="Umów bezpłatny pomiar w Poznaniu i okolicach. Pomożemy dobrać żaluzje aluminiowe do Twoich okien."
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
import articles from '~/assets/content/articles.json';

const chosenArticleIndices = [1, 0, 4];

// Automatycznie mapujemy wybrane indeksy na pełne obiekty artykułów
const featuredArticles = computed(() => {
  return chosenArticleIndices.map((index) => articles[index]).filter(Boolean); // filter(Boolean) zabezpiecza Cię przed błędem, gdybyś wpisał indeks, który nie istnieje
});

// --- DANE DO FAQ (Żaluzje aluminiowe) ---
const faqTitle = ref('Najczęściej zadawane pytania (FAQ)');

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
    question: 'Jak dbać i czyścić żaluzje aluminiowe?',
    answer:
      'Aluminium jest w pełni wodoodporne, co ułatwia zmywanie kuchennego tłuszczu, ale lamele są bardzo cienkie. Zbyt mocne dociskanie szmatki lub użycie złej gąbki trwale pogniecie, porysuje i połamie konstrukcję żaluzji! Przejdź do naszego artykułu, aby dowiedzieć się, jak bezpiecznie myć je na oknie oraz jak prawidłowo wykąpać je pod prysznicem w przypadku ekstremalnych zabrudzeń.',
    article_url: '/wiedza/czyszczenie-poradnik',
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
  { id: 3, url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-4.webp' },
  { id: 3, url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-7.webp' },
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

const product = offerPage.boxes[7];

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
        'https://dezalroletypoznan.pl/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-3.webp',
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
@use '@/assets/stylesheets/product-page' as *;
</style>
