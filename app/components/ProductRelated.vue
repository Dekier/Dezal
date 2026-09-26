<template>
  <section class="ProductRelated__main-container">
    <div class="ProductRelated__inner">
      <h2 class="ProductRelated__section-title">{{ title }}</h2>
      <div class="ProductRelated__grid">
        <NuxtLink
          v-for="box in visibleItems"
          :key="box.type"
          :to="`/${box.type}`"
          class="ProductRelated__item"
        >
          <div class="ProductRelated__image-wrap">
            <NuxtImg
              :src="box.url"
              :alt="box.title"
              class="ProductRelated__image"
              width="600"
              height="450"
              format="webp"
              sizes="sm:100vw md:50vw lg:400px"
              loading="lazy"
            />
          </div>
          <div class="ProductRelated__content">
            <h3 class="ProductRelated__title">{{ box.title }}</h3>
            <p class="ProductRelated__description">{{ box.description }}</p>
            <span class="ProductRelated__link">
              Czytaj więcej
              <img
                src="/icons/arrow.svg"
                alt=""
                aria-hidden="true"
                class="ProductRelated__link-icon"
              />
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  items: { type: string; title: string; description: string; url: string }[];
  showTypes?: string[];
}>();

const visibleItems = computed(() =>
  props.showTypes
    ? props.items.filter((item) => props.showTypes?.includes(item.type))
    : props.items
);
</script>

<style scoped lang="scss">
@use './ProductRelated.scss' as *;
</style>
