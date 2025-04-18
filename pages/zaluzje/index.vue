<template>
  <div class="Plisy__main-container">
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
  name: 'Zaluzje',

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
      { id: 1, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-2.webp' },
      { id: 2, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp' },
      { id: 3, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-4.webp' },
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
          title: this.offerBoxesJson[7].title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.webp',
          description: this.offerBoxesJson[7].description,
        },
        {
          id: 1,
          title: this.offerBoxesJson[8].title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp',
          description: this.offerBoxesJson[8].description,
        },
      ];
    },
  },
};
</script>
