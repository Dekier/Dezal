<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">{{ offerData.title }}</h2>
      <p class="Offer__description">{{ offerData.description }}</p>
      <div class="Offer__boxes-container">
        <div v-for="(box, index) in showBoxes" :key="index" class="Offer__box">
          <h3 class="Offer__box-title">
            {{ offerDataBoxes[`box_${index + 1}_title`] }}
          </h3>
          <div class="Offer__box-image-container">
            <img :src="box.url" class="Offer__box-image" :alt="box.link" />
          </div>
          <p class="Offer__box-text" style="-webkit-box-orient: vertical;">
            {{ offerDataBoxes[`box_${index + 1}_description`] }}
          </p>
          <nuxt-link :to="box.link" class="Offer__box-btn">
            Czytaj więcej
            <svg
              class="Offer__box-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
            >
              <path
                d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',

  props: {
    offerData: {
      type: Object,
      required: true,
    },
    offerDataBoxes: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    activeTab: '',
    boxesData: [
      {
        url: '/image/rolety/dezal-poznan-roleta-dzień-noc-2.webp',
        link: '/rolety-dzien-noc',
        type: 'dzien-noc',
      },
      {
        url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.webp',
        link: '/rolety-materialowe',
        type: 'materialowe',
      },
      {
        url: '/image/rolety/dezal-poznan-roleta-rzymska-1.webp',
        link: '/rolety-rzymskie',
        type: 'rzymskie',
      },
      {
        url: '/image/plisy/deżal-poznań-plisa-1.webp',
        link: '/plisy',
        type: 'plisy',
      },
      {
        url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp',
        link: '/zaluzje',
        type: 'zaluzje',
      },
      {
        url: '/image/verticale/deżal-poznań-roleta-verticale-1.webp',
        link: '/verticale',
        type: 'verticale',
      },
      {
        url: '/image/moskitiery/dezal-poznan-moskitiera-1.webp',
        link: '/moskitiery',
        type: 'moskitiery',
      },
    ],
  }),

  computed: {
    showBoxes() {
      return this.boxesData.filter(box =>
        this.offerData.showBoxes.includes(box.type)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Offer';
</style>
