<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">{{ offerData.title }}</h2>
      <p class="Offer__description">{{ offerData.description }}</p>
      <div class="Offer__boxes-container">
        <div v-for="(box, index) in showBoxes" :key="index" class="Offer__box">
          <h3 class="Offer__box-title">{{ box.title }}</h3>
          <div class="Offer__box-image-container">
            <NuxtImg
              width="340"
              height="190"
              :src="box.url"
              class="Offer__box-image"
              :alt="box.title"
              preload
            />
          </div>
          <p class="Offer__box-text">{{ box.description }}</p>
          <nuxt-link :to="`/${box.type}`" class="Offer__box-btn">
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
    offerBoxesJson: {
      type: Array,
      required: true,
    },
  },

  computed: {
    showBoxes() {
      return this.offerBoxesJson.filter((box) =>
        this.offerData.showBoxes.includes(box.type)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@use './Offer.scss' as *;
</style>
