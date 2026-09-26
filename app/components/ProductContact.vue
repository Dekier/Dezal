<template>
  <section class="ProductContact__main-container">
    <div class="ProductContact__inner">
      <img
        src="/icons/subtract.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        width="79"
        height="141"
        class="ProductContact__decoration ProductContact__decoration--right"
      />
      <img
        src="/icons/subtract.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        width="79"
        height="141"
        class="ProductContact__decoration ProductContact__decoration--left"
      />
      <div class="ProductContact__copy">
        <h2 class="ProductContact__title">
          <span
            v-for="(line, index) in titleLines"
            :key="index"
            class="ProductContact__title-line"
          >
            {{ line }}
          </span>
        </h2>
        <p class="ProductContact__description">{{ description }}</p>
      </div>
      <NuxtLink :to="linkTo" class="ProductContact__link">
        {{ linkLabel }}
        <img
          src="/icons/arrow.svg"
          alt=""
          aria-hidden="true"
          class="ProductContact__link-icon"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  titleLines: string[];
  description: string;
  linkLabel: string;
  linkTo: string;
}>();
</script>

<style scoped lang="scss">
@use './ProductContact.scss' as *;
</style>
