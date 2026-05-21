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

// --- DANE DO FAQ (Rolety materiałowe) ---
const faqTitle = ref('Najczęściej zadawane pytania');

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
    question: 'Czy rolety materiałowe można prać lub prasować?',
    answer:
      'Nie, rolet materiałowych nie wolno prać w pralce ani prasować, ponieważ może to uszkodzić ich powłokę antystatyczną i zniekształcić tkaninę. Do regularnego czyszczenia wystarczy miotełka do kurzu lub sucha ściereczka. Drobne zabrudzenia można delikatnie przetrzeć lekko wilgotną gąbką z dodatkiem łagodnego detergentu.',
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
          url: '/images/rolety/dezal-poznan-roleta-materialowa-3.webp',
          description: box.description,
        },
      ]
    : [];
});

useHead({
  title: 'Rolety materiałowe Poznań – stylowe osłony okienne',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      content:
        'Rolety materiałowe na wymiar w Poznaniu. Duży wybór tkanin, profesjonalny montaż, szybka realizacja. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Rolety materiałowe Poznań – stylowe osłony okienne',
    },
    {
      property: 'og:description',
      content:
        'Rolety materiałowe na wymiar w Poznaniu. Duży wybór tkanin, profesjonalny montaż, szybka realizacja. Darmowy pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-materialowa-3.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Rolety materiałowe - DEŻAL Poznań',
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
