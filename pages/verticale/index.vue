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
  name: 'Verticale',

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
      { id: 1, url: '/image/verticale/deżal-poznań-roleta-verticale-1.webp' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'rolety-dzien-noc',
        'rolety-materialowe',
        'rolety-rzymskie',
        'plisy',
        'zaluzje',
        'moskitiery',
      ],
    },
    title: 'Verticale w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Verticale w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: this.offerBoxesJson[5].title,
          url: '/image/verticale/deżal-poznań-roleta-verticale-1.webp',
          description: this.offerBoxesJson[5].description,
        },
      ];
    },
  },
};
</script>
