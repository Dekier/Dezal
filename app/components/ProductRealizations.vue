<template>
  <section :id="sectionId" class="ProductRealizations__main-container">
    <div class="ProductRealizations__heading">
      <h2 class="ProductRealizations__title">{{ title }}</h2>
      <p class="ProductRealizations__description">{{ description }}</p>
    </div>
    <div
      class="ProductRealizations__grid"
      :class="{ 'ProductRealizations__grid--four': images.length === 4 }"
    >
      <button
        v-for="(imageData, index) in images"
        :key="`${imageData.url}-${index}`"
        type="button"
        class="ProductRealizations__item"
        :aria-label="`Otwórz zdjęcie realizacji ${index + 1}`"
        @click="showGallery(index)"
      >
        <NuxtImg
          :src="imageData.url"
          :alt="imageData.alt || `${imageAltPrefix} – realizacja ${index + 1}`"
          class="ProductRealizations__image"
          width="1300"
          height="975"
          format="webp"
          quality="90"
          sizes="sm:100vw md:50vw lg:60vw xl:800px"
          loading="lazy"
        />
        <span class="ProductRealizations__action">Zobacz zdjęcie</span>
      </button>
    </div>
    <Gallery
      v-if="activeGallery"
      :index="activeImageIndex"
      :images="galleryImages"
      @exit="activeGallery = false"
      @nextImage="nextImage"
      @beforeImage="beforeImage"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  sectionId: string;
  title: string;
  description: string;
  imageAltPrefix: string;
  images: { id?: number | string; url: string; alt?: string }[];
}>();

const galleryImages = computed(() =>
  props.images.map((image, index) => ({
    url: image.url,
    alt: image.alt || `${props.imageAltPrefix} – realizacja ${index + 1}`,
  }))
);

const activeGallery = ref(false);
const activeImageIndex = ref(0);

const showGallery = (index: number) => {
  activeImageIndex.value = index;
  activeGallery.value = true;
};

const beforeImage = () => {
  activeImageIndex.value =
    (activeImageIndex.value - 1 + props.images.length) % props.images.length;
};

const nextImage = () => {
  activeImageIndex.value = (activeImageIndex.value + 1) % props.images.length;
};
</script>

<style scoped lang="scss">
@use './ProductRealizations.scss' as *;
</style>
