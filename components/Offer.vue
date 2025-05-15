<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">{{ offerData.title }}</h2>
      <p class="Offer__description">{{ offerData.description }}</p>
      <div class="Offer__boxes-container">
        <div v-for="(box, index) in showBoxes" :key="index" class="Offer__box">
          <div class="Offer__box-image-container">
            <img
              :src="box.url"
              class="Offer__box-image"
              :alt="box.title"
              loading="lazy"
            />
          </div>
          <h3 class="Offer__box-title">{{ box.title }}</h3>

          <p class="Offer__box-text">{{ box.description }}</p>
          <nuxt-link :to="`/${box.type}`" class="Offer__box-btn">
            czytaj więcej
            <div class="Offer__btn-arrow-box">
              <img
                src="/icons/arrow.svg"
                alt="icon arrow"
                class="Offer__btn-arrow-icon"
              />
            </div>
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
