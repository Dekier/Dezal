<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">Nasza oferta osłon okiennych</h2>
      <div class="Offer__boxes-container">
        <nuxt-link
          v-for="(box, index) in offerBoxesJson"
          :key="index"
          class="Offer__box"
          :to="`/${box.type}`"
        >
          <div v-if="index === 0" class="Offer__badge">
            <img
              src="/icons/dot-white-full.svg"
              alt=""
              aria-hidden="true"
              class="Offer__badge-image"
              loading="lazy"
            />
            <p class="Offer__badge-text">najczęściej wybierane</p>
          </div>

          <div class="Offer__box-image-container">
            <NuxtImg
              :src="box.url"
              :alt="`${box.title} - Deżal`"
              class="Offer__box-image"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              width="600"
              height="450"
              format="webp"
              sizes="sm:50vw md:300px lg:600px"
              :title="`Oferta: ${box.title}`"
            />
          </div>

          <h2 class="Offer__box-title">
            <img
              src="/icons/dot-yellow-full.svg"
              alt=""
              aria-hidden="true"
              class="Offer__box-title-dot"
              loading="lazy"
            />{{ box.title }}
          </h2>
          <p class="Offer__box-text">{{ box.description }}</p>

          <div class="Offer__box-btn">
            czytaj więcej
            <div class="Offer__btn-arrow-box">
              <img
                src="/icons/arrow.svg"
                alt=""
                aria-hidden="true"
                class="Offer__btn-arrow-icon"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🚀 Zaktualizowałem też Twój skrypt do nowoczesnego Composition API (tak jak masz w innych plikach)
defineProps({
  offerBoxesJson: {
    type: Array as () => any[],
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './Offer.scss' as *;
</style>
