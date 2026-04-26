<template>
  <div class="Gallery__main-container">
    <div @click="emit('exit')" class="Gallery__exit">
      <svg width="64" xmlns="http://www.w3.org/2000/svg" height="64">
        <path
          fill="#fff"
          d="M28.941 31.786L.613 60.114a2.014 2.014 0 1 0 2.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 0 0 1.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1 0 60.562.589L32.003 29.15 3.441.59A2.015 2.015 0 0 0 .593 3.439l28.348 28.347z"
        />
      </svg>
    </div>

    <div
      v-if="images.length > 1"
      @click="emit('beforeImage')"
      class="Gallery__back-btn"
    >
      <svg viewBox="0 0 511.949 511.949">
        <path
          fill="#fff"
          d="M386.235 248.308L140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 0 0 0 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 0 0 0-15.041z"
        />
      </svg>
    </div>

    <div
      v-if="images.length > 1"
      @click="emit('nextImage')"
      class="Gallery__next-btn"
    >
      <svg viewBox="0 0 511.949 511.949">
        <path
          fill="#fff"
          d="M386.235 248.308L140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 0 0 0 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 0 0 0-15.041z"
        />
      </svg>
    </div>

    <NuxtImg
      class="Gallery__image"
      :src="images[index].url"
      alt="Dezal rolety poznań"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: { url: string }[];
  index: number;
}>();

const emit = defineEmits<{
  (e: 'exit'): void;
  (e: 'beforeImage'): void;
  (e: 'nextImage'): void;
}>();
</script>

<style scoped lang="scss">
@use './Gallery.scss' as *;
</style>
