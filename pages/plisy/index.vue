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
  name: 'Plisy',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/plisy/deżal-poznań-plisa-1.webp' },
      { id: 2, url: '/image/plisy/deżal-poznań-plisa-2.webp' },
      { id: 3, url: '/image/plisy/deżal-poznań-plisa-3.webp' },
      { id: 4, url: '/image/plisy/deżal-poznań-plisa-4.webp' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'dzien-noc',
        'materialowe',
        'rzymskie',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Plisy w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety Plisowane w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: this.offer.box_4_title,
          url: '/image/plisy/deżal-poznań-plisa-1.webp',
          description: this.offer.box_4_description,
        },
      ];
    },
  },
};
</script>
