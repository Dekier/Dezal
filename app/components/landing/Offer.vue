<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">Nasza oferta osłon okiennych</h2>
      <div class="Offer__boxes-container">
        <nuxt-link
          v-for="box in offerBoxesJson"
          :key="box.type"
          class="Offer__box"
          :to="`/${box.type}`"
        >
          <div v-if="box.type === 'plisy'" class="Offer__badge">
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
              loading="lazy"
              width="600"
              height="450"
              format="webp"
              sizes="sm:50vw md:300px lg:600px"
              :title="`Oferta: ${box.title}`"
            />
          </div>

          <h3 class="Offer__box-title">
            <img
              src="/icons/dot-yellow-full.svg"
              alt=""
              aria-hidden="true"
              class="Offer__box-title-dot"
              loading="lazy"
              width="24"
              height="24"
            />{{ box.title }}
          </h3>
          <p class="Offer__box-text">{{ box.description }}</p>

          <div class="Offer__box-btn">
            czytaj więcej
            <div class="Offer__btn-arrow-box">
              <img
                src="/icons/arrow.svg"
                alt=""
                aria-hidden="true"
                class="Offer__btn-arrow-icon"
                width="48"
                height="14"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface OfferBox {
  title: string;
  description: string;
  url: string;
  type: string;
}

defineProps<{
  offerBoxesJson: OfferBox[];
}>();
</script>

<style lang="scss" scoped>
@use './Offer.scss' as *;
</style>
