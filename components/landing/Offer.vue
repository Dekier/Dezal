<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">Jakich rolet potrzebujesz?</h2>
      <div class="Offer__boxes-container">
        <div
          v-for="(box, index) in offerBoxesJson"
          :key="index"
          class="Offer__box"
        >
          <div v-if="index === 0" class="Offer__badge">
            <img
              src="/icons/dot-white-full.svg"
              alt="icon white dot"
              class="Offer__badge-image"
              loading="lazy"
            />
            <p class="Offer__badge-text">najczęściej wybierane</p>
          </div>
          <div class="Offer__box-image-container">
            <img
              loading="lazy"
              :src="box.url"
              class="Offer__box-image"
              :alt="box.title"
            />
          </div>
          <h2 class="Offer__box-title">
            <img
              src="/icons/dot-yellow-full.svg"
              alt="icon yellow dot"
              class="Offer__box-title-dot"
              loading="lazy"
            />{{ box.title }}
          </h2>
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

        <!-- <div class="Offer__column">
          <div
            v-for="(box, index) in secondHalf"
            :key="'second-' + index"
            class="Offer__box"
            :class="[`Offer__box-second-${index}`]"
          >
            <div
              class="Offer__box-image-container"
              :class="[`Offer__box-image-container-second-${index}`]"
            >
              <img
                loading="lazy"
                :src="box.url"
                class="Offer__box-image"
                :alt="box.title"
              />
            </div>
            <h2 class="Offer__box-title">
              <img
                src="/icons/dot-yellow-full.svg"
                alt="icon yellow dot"
                class="Offer__box-title-dot"
                loading="lazy"
              />{{ box.title }}
            </h2>
            <p class="Offer__box-text">{{ box.description }}</p>
            <nuxt-link :to="`/${box.type}`" class="Offer__box-btn">
              czytaj więcej
              <div class="Offer__btn-arrow-box">
                <img
                  src="/icons/arrow.svg"
                  alt="icon arrow"
                  class="Offer__btn-arrow-icon"
                  loading="lazy"
                />
              </div>
            </nuxt-link>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',

  props: {
    offerBoxesJson: {
      type: Array,
      required: true,
    },
  },

  computed: {
    firstHalf() {
      const middle = Math.ceil(this.offerBoxesJson.length / 2);
      return this.offerBoxesJson.slice(0, middle);
    },
    secondHalf() {
      const middle = Math.ceil(this.offerBoxesJson.length / 2);
      return this.offerBoxesJson.slice(middle);
    },
  },
};
</script>

<style lang="scss" scoped>
@use './Offer.scss' as *;
</style>
