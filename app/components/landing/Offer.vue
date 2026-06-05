<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">Nasza oferta osłon okiennych</h2>
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

          <nuxt-link :to="`/${box.type}`" class="Offer__box-image-container">
            <img
              :src="box.url"
              :alt="`${box.title} - Deżal`"
              class="Offer__box-image"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              width="600"
              height="450"
              :title="`Oferta: ${box.title}`"
            />
          </nuxt-link>

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
};
</script>

<style lang="scss" scoped>
@use './Offer.scss' as *;
</style>
