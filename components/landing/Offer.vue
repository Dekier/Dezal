<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">Jakich rolet potrzebujesz?</h2>
      <div class="Offer__boxes-container">
        <div class="Offer__column">
          <div
            v-for="(box, index) in firstHalf"
            :key="'first-' + index"
            class="Offer__box"
          >
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
            <h2 class="Offer__box-title">
              <NuxtImg
                src="/icons/dot-yellow-full.svg"
                alt="icon yellow dot"
                class="Offer__box-title-dot"
              />{{ box.title }}
            </h2>
            <!-- <p class="Offer__box-text">{{ box.description }}</p> -->
            <nuxt-link :to="`/${box.type}`" class="Offer__box-btn">
              Poznaj szczegóły
              <div class="Offer__btn-arrow-box">
                <NuxtImg
                  src="/icons/arrow.svg"
                  alt="icon arrow"
                  class="Offer__btn-arrow-icon"
                />
              </div>
            </nuxt-link>
          </div>
        </div>

        <div class="Offer__column">
          <div
            v-for="(box, index) in secondHalf"
            :key="'second-' + index"
            class="Offer__box"
          >
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
            <h2 class="Offer__box-title">
              <NuxtImg
                src="/icons/dot-yellow-full.svg"
                alt="icon yellow dot"
                class="Offer__box-title-dot"
              />{{ box.title }}
            </h2>
            <!-- <p class="Offer__box-text">{{ box.description }}</p> -->
            <nuxt-link :to="`/${box.type}`" class="Offer__box-btn">
              Poznaj szczegóły
              <div class="Offer__btn-arrow-box">
                <NuxtImg
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
    firstHalf() {
      console.log(this.showBoxes);
      const middle = Math.ceil(this.showBoxes.length / 2);
      return this.showBoxes.slice(0, middle);
    },
    secondHalf() {
      const middle = Math.ceil(this.showBoxes.length / 2);
      return this.showBoxes.slice(middle);
    },
  },
};
</script>

<style lang="scss" scoped>
@use './Offer.scss' as *;
</style>
