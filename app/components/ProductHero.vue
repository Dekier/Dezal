<template>
  <section class="ProductHero__main-container">
    <div class="ProductHero__inner">
      <div class="ProductHero__content">
        <h1 class="ProductHero__title">
          <span
            v-for="(line, index) in titleLines"
            :key="index"
            class="ProductHero__title-line"
          >
            {{ line }}
          </span>
        </h1>
        <p
          v-for="(paragraph, index) in description"
          :key="index"
          class="ProductHero__description"
        >
          {{ paragraph }}
        </p>
        <div class="ProductHero__actions">
          <NuxtLink :to="primaryLink" class="ProductHero__primary-link">
            {{ primaryLabel }}
            <img
              src="/icons/arrow.svg"
              alt=""
              aria-hidden="true"
              class="ProductHero__link-icon"
            />
          </NuxtLink>
          <button
            type="button"
            class="ProductHero__text-link"
            @click="scrollToRealizations"
          >
            {{ secondaryLabel }}
          </button>
        </div>
      </div>
      <div class="ProductHero__image-wrap">
        <NuxtImg
          :src="imageSrc"
          :alt="imageAlt"
          class="ProductHero__image"
          width="1300"
          height="975"
          format="webp"
          sizes="sm:100vw md:50vw lg:700px"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  titleLines: string[];
  description: string[];
  imageSrc: string;
  imageAlt: string;
  primaryLabel: string;
  primaryLink: string;
  secondaryLabel: string;
  realizationsId: string;
}>();

const scrollToRealizations = () => {
  document.getElementById(props.realizationsId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
</script>

<style scoped lang="scss">
@use './ProductHero.scss' as *;
</style>
