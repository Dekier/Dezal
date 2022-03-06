<template>
  <div>
    <product-information :page-data="pageData" :bottom-images="bottomImages" />
    <offer :offer-data="offerData" :offer-data-boxes="offer" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Verticale',

  components: {
    ProductInformation,
    Offer,
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
        'dzien-noc',
        'materialowe',
        'rzymskie',
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
          title: this.offer.box_6_title,
          url: '/image/verticale/deżal-poznań-roleta-verticale-1.webp',
          description: this.offer.box_6_description,
        },
      ];
    },
  },
};
</script>
