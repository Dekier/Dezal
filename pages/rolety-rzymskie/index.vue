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
  name: 'RoletyRzymskie',

  components: {
    ProductInformation,
    Offer,
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
        'dzien-noc',
        'materialowe',
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
          title: this.offer.box_3_title,
          url: '/image/rolety/dezal-poznan-roleta-rzymska-0.webp',
          description: this.offer.box_3_description,
        },
      ];
    },
  },
};
</script>
