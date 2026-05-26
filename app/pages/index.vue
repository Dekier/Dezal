<template>
  <div class="Page__main-container">
    <HeroNew />
    <LandingOffer :offer-boxes-json="offerBoxesJson" />
    <LazyAboutCompanyNew />
    <LazyReviews />
    <LazyMainQuestions />
    <LazyQuestions title="Porady" :faqList="faqPorady" />
    <LazyQuestions title="Techniczne" :faqList="faqTechniczne" />

    <LazyContact />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import offers from '~~/public/offers-landing.json';
// Zakładam, że masz komponent Questions zaimportowany globalnie lub lokalnie.
// Jeśli nie, dodaj: import Questions from '../components/Questions.vue';

const offerBoxesJson = ref(offers.boxes);

// --- DANE DO FAQ: PORADY ---
const faqPorady = ref([
  {
    question: 'Jakie osłony okienne najlepiej sprawdzą się w sypialni?',
    answer:
      'Do sypialni najczęściej polecamy rozwiązania zapewniające maksymalne zaciemnienie. Świetnym wyborem będą rolety materiałowe w kasecie z tkaniną w 100% zaciemniającą (tzw. blackout) lub plisy typu Duette (plaster miodu), które dodatkowo poprawiają izolację termiczną.',
  },
  {
    question: 'Czy oferujecie darmowy pomiar i wycenę w Poznaniu?',
    answer:
      'Tak, dla klientów z Poznania i okolicznych miejscowości oferujemy całkowicie darmowy i niezobowiązujący pomiar u klienta. Nasz ekspert przyjeżdża z wzornikami, doradza najlepsze rozwiązania i na miejscu dokonuje wyceny.',
  },
  {
    question: 'Co jest tańszym rozwiązaniem: rolety, plisy czy żaluzje?',
    answer:
      'Najbardziej budżetowym i klasycznym rozwiązaniem są tradycyjne rolety materiałowe (zwłaszcza te w systemie wolnowiszącym). Plisy i żaluzje aluminiowe to średnia półka cenowa, natomiast najbardziej ekskluzywnym, a co za tym idzie najdroższym produktem, są żaluzje drewniane i bambusowe.',
  },
  {
    question: 'Jak dobrać kolor osłon do wnętrza?',
    answer:
      'Najbezpieczniej jest dobierać kolor osłon do ramy okiennej, koloru ścian lub dominujących tekstyliów w pomieszczeniu. Odcienie szarości, beżu i bieli to klasyki, które powiększają przestrzeń. Z kolei ciemne żaluzje (np. antracyt lub czarne drewno) świetnie sprawdzą się w nowoczesnych wnętrzach loftowych jako mocny akcent.',
  },
  {
    question: 'Ile trwa realizacja zamówienia?',
    answer:
      'Wszystkie nasze osłony okienne produkowane są na indywidualny wymiar. Standardowy czas realizacji zamówienia, od momentu pomiaru i akceptacji wyceny do profesjonalnego montażu, wynosi zazwyczaj od 7 do 14 dni roboczych.',
  },
]);

// --- DANE DO FAQ: TECHNICZNE ---
const faqTechniczne = ref([
  {
    question:
      'Czy montaż bezinwazyjny jest bezpieczny i czy nie uszkodzi okna?',
    answer:
      'Montaż bezinwazyjny jest całkowicie bezpieczny dla struktury okna, ponieważ polega na zawieszeniu osłony na specjalnych haczykach lub przyklejeniu jej na mocną taśmę dwustronną. Dzięki temu nie tracisz gwarancji na stolarkę okienną. Należy jednak pamiętać, że montaż inwazyjny (na wkręty do listwy przyszybowej) zawsze pozostaje rozwiązaniem najbardziej stabilnym.',
  },
  {
    question: 'Czy na oknach z wywietrznikami zamontuję każdą roletę?',
    answer:
      'Wywietrzniki umieszczone w górnej części ramy okiennej mogą utrudniać montaż niektórych systemów (np. rolet w dużej kasecie nakładanych na ramę). W takich sytuacjach najczęściej stosujemy montaż plisy w świetle szyby, rolety z obniżonym uchwytem lub montaż do ściany/sufitu, omijając problem wywietrznika.',
  },
  {
    question: 'Jak prawidłowo dbać o rolety i plisy, aby służyły latami?',
    answer:
      'Większość tkanin stosowanych w osłonach okiennych jest impregnowana antystatycznie, co zapobiega osiadaniu kurzu. Czyszczenie powinno polegać na delikatnym przecieraniu na sucho lub użyciu lekko wilgotnej szmatki (bez silnych detergentów). Tkanin roletowych nie wolno prać w pralce ani prasować.',
  },
  {
    question:
      'Czy osłony okienne skutecznie chronią przed nagrzewaniem się pokoju?',
    answer:
      'Tak. Choć najlepszą barierą termiczną są rolety zewnętrzne, osłony wewnętrzne również bardzo pomagają. Szczególnie skuteczne są żaluzje aluminiowe (odbijają światło), plisy z powłoką perłową oraz tkaniny roletowe podgumowane (blackout), które tworzą barierę zapobiegającą wpadaniu promieni słonecznych do środka.',
  },
  {
    question:
      'Co zrobić, jeśli mam nietypowy kształt okna (np. trójkąt lub trapez)?',
    answer:
      'W przypadku okien o nietypowych kształtach najlepszym rozwiązaniem z punktu widzenia technicznego są plisy. Ich elastyczna konstrukcja pozwala na docięcie materiału i dopasowanie profili do skosów, trójkątów, a nawet okrągłych okien.',
  },
]);

useHead({
  title: 'Rolety Poznań – nowoczesne plisy, żaluzje i osłony okienne',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      content:
        'Rolety, plisy, żaluzje i moskitiery w Poznaniu – oferujemy nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena.',
    },
    {
      property: 'og:title',
      content: 'Rolety Poznań – nowoczesne plisy, żaluzje i osłony okienne',
    },
    {
      property: 'og:description',
      content:
        'Rolety, plisy, żaluzje i moskitiery w Poznaniu – oferujemy nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-dzien-noc-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Roleta dzień noc w salonie',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl',
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
