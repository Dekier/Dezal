<template>
  <div class="Plisy__main-container">
    <product-information :pageData="pageData" :bottom-images="bottomImages" />
    <offer :offer-data="offerData" :offer-data-boxes="offer" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Zaluzje',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-2.webp' },
      { id: 2, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp' },
      { id: 3, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-4.webp' },
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
        'verticale',
        'moskitiery',
      ],
    },
    title:
      'Żaluzje deżal-poznań-żaluzja-drewniana-/aluminiowe w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Żaluzje deżal-poznań-żaluzja-drewniana-/aluminiowe w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: this.offer.box_8_title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.webp',
          description: this.offer.box_8_description,
        },
        {
          id: 1,
          title: this.offer.box_9_title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp',
          description: this.offer.box_9_description,
        },
      ];
    },
  },
};
</script>
