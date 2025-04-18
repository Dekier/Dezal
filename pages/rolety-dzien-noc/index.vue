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
  name: 'RoletyDzienNoc',

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
      { id: 1, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-1.webp' },
      { id: 2, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-7.webp' },
      { id: 3, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-3.webp' },
      { id: 4, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-4.webp' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'rolety-materialowe',
        'rolety-rzymskie',
        'plisy',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Rolety dzień-noc w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety dzień-noc w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: this.offerBoxesJson[0].title,
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-2.webp',
          description: this.offerBoxesJson[0].description,
        },
      ];
    },
  },
};
</script>
