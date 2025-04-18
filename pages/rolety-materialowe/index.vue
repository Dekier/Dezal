<template>
  <div>
    <ProductInformation :page-data="pageData" :bottom-images="bottomImages" />
    <Offer :offer-data="offerData" :offer-boxes-json="offerBoxesJson" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import offers from '~/static/offers.json';
import { mapGetters } from 'vuex';

export default {
  name: 'RoletyMaterialowe',

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
      { id: 1, url: '/image/rolety/dezal-poznan-roleta-materiałowa-1.webp' },
      { id: 2, url: '/image/rolety/dezal-poznan-roleta-materiałowa-2.webp' },
      { id: 3, url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.webp' },
      { id: 4, url: '/image/rolety/dezal-poznan-roleta-materiałowa-4.webp' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'rolety-dzien-noc',
        'rolety-rzymskie',
        'plisy',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Rolety Materiałowe w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety Materiałowe w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: this.offerBoxesJson[1].title,
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.webp',
          description: this.offerBoxesJson[1].description,
        },
      ];
    },
  },
};
</script>
