<template>
  <div class="MainPage__main-container">
    <div class="MainPage__hero">
      <div class="MainPage__hero-background" />
    </div>
    <Hero />
    <AboutCompany />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script>
import Offer from '~/components/Offer.vue';
import Hero from '~/components/Hero.vue';
import AboutCompany from '~/components/About-company.vue';
import offers from '~/static/offers.json';

export default {
  components: { Offer, Hero, AboutCompany },

  async asyncData() {
    return {
      offerBoxesJson: offers.boxes,
    };
  },

  data: () => ({
    offerData: {
      title: 'Oferta',
      description: 'Tworzymy projekty wnętrz...',
      showBoxes: [
        'rolety-dzien-noc',
        'rolety-materialowe',
        'rolety-rzymskie',
        'plisy',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
  }),
};
</script>
