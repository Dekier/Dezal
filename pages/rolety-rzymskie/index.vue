<template>
  <div>
    <ProductInformation :page-data="pageData" :bottom-images="bottomImages" />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import { mapGetters } from 'vuex';
import offers from '~/static/offers.json';

export default {
  name: 'RoletyRzymskie',

  components: {
    ProductInformation,
    Offer,
  },

  async asyncData() {
    return {
      offerBoxesJson: offers.boxes,
    };
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/rolety/dezal-poznan-roleta-rzymska-1.webp' },
      { id: 2, url: '/image/rolety/dezal-poznan-roleta-rzymska-2.webp' },
      { id: 3, url: '/image/rolety/dezal-poznan-roleta-rzymska-4.webp' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'rolety-dzien-noc',
        'rolety-materialowe',
        'plisy',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Rolety Rzymskie w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety Rzymskie w Poznaniu na Piątkowie. Montaż w cene!',
        },
      ],
    };
  },

  computed: {
    ...mapGetters(['offer']),
    pageData() {
      return [
        {
          id: 0,
          title: this.offerBoxesJson[2].title,
          url: '/image/rolety/dezal-poznan-roleta-rzymska-0.webp',
          description: this.offerBoxesJson[2].description,
        },
      ];
    },
  },
};
</script>
