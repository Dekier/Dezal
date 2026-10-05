<template>
  <div id="offer" class="Offer__main-container">
    <div class="Offer__center-container">
      <h2 class="Offer__title">Nasza oferta osłon okiennych</h2>
      <div class="Offer__boxes-container">
        <nuxt-link
          v-for="box in orderedBoxes"
          :key="box.type"
          class="Offer__box"
          :class="[
            `Offer__box--${box.type}`,
            { 'Offer__box--active': activeBox === box.type },
          ]"
          :to="`/${box.type}`"
          @mouseenter="activeBox = box.type"
          @focus="activeBox = box.type"
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
              :height="getImageHeight(box.type)"
              format="webp"
              sizes="100vw sm:50vw md:50vw lg:600px"
              :title="`Oferta: ${box.title}`"
            />
          </div>

          <div
            v-if="box.type === 'rolety-rzymskie'"
            class="Offer__decoration-stars"
            aria-hidden="true"
          >
            <img
              src="/icons/dot-yellow-border.svg"
              alt=""
              class="Offer__decoration-star"
            />
            <img
              src="/icons/dot-yellow-border.svg"
              alt=""
              class="Offer__decoration-star"
            />
          </div>
          <img
            v-if="box.type === 'verticale'"
            src="/icons/subtract.svg"
            alt=""
            aria-hidden="true"
            class="Offer__decoration-arrow"
            loading="lazy"
          />

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

const props = defineProps<{
  offerBoxesJson: OfferBox[];
}>();

const activeBox = ref('rolety-dzien-noc');

const orderedBoxes = computed(() => {
  const middle = Math.ceil(props.offerBoxesJson.length / 2);
  const leftColumn = props.offerBoxesJson.slice(0, middle);
  const rightColumn = props.offerBoxesJson.slice(middle);

  return leftColumn.flatMap((box, index) =>
    rightColumn[index] ? [box, rightColumn[index]] : [box]
  );
});

const getImageHeight = (type: string) => {
  if (type === 'rolety-rzymskie') return 750;
  if (type === 'verticale') return 450;
  if (['plisy', 'rolety-dzien-noc'].includes(type)) return 600;
  return 338;
};
</script>

<style lang="scss" scoped>
@use './Offer.scss' as *;
</style>
