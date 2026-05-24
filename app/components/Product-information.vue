<template>
  <div class="ProductInformation__main-container">
    <div
      v-for="data in pageData"
      :key="data.id"
      class="ProductInformation__center-container"
    >
      <div class="ProductInformation__center-text">
        <h1 class="ProductInformation__center-title">{{ data.title }}</h1>

        <p
          v-for="(paragraph, index) in data.description"
          :key="index"
          class="ProductInformation__product-description"
        >
          {{ paragraph }}
        </p>
      </div>
      <img
        :src="data.url"
        class="ProductInformation__main-picture"
        :alt="`Realizacja: ${data.title || 'Rolety i żaluzje Deżal Poznań'}`"
      />

      <!-- <NuxtImg
        :src="data.url"
        class="ProductInformation__main-picture"
        :alt="`Realizacja: ${data.title || 'Rolety i żaluzje Deżal Poznań'}`"
        :title="data.title"
        width="780"
        height="570"
        format="webp"
        fetchpriority="high"
        :loading="undefined"
        preload
        fit="cover"
        sizes="sm:100vw md:5700px"
      /> -->
    </div>
  </div>

  <div class="ProductInformation__bottom-container">
    <div class="ProductInformation__bottom-title">Przykładowe realizacje</div>

    <div class="ProductInformation__bottom-realizations">
      <div
        v-for="(imageData, index) in bottomImages"
        :key="imageData.id"
        @click="showBigGallery(index)"
        class="ProductInformation__bottom-realizations-box"
      >
        <img
          :src="imageData.url"
          :alt="`Realizacja - Deżal Poznań`"
          class="ProductInformation__bottom-realizations-image"
        />
        <!-- <NuxtImg
          :src="imageData.url"
          :alt="`Realizacja - Deżal Poznań`"
          class="ProductInformation__bottom-realizations-image"
          width="450"
          height="300"
          quality="92"
          format="webp"
          loading="lazy"
          decoding="async"
          fit="cover"
          :modifiers="{ sharp: true }"
          sizes="sm:100vw md:50vw lg:33vw"
        /> -->
        <div class="ProductInformation__hover-background">
          <img
            loading="lazy"
            src="/icons/fullscreen.svg"
            alt="fullscreen icon"
            class="ProductInformation__hover-icon"
          />
        </div>
      </div>
    </div>
  </div>

  <Questions :title="faqTitle" :faqList="faqData" />

  <Gallery
    v-if="activeGallery"
    :index="activeImageIndex"
    :images="bottomImages"
    @exit="exitGallery"
    @nextImage="nextImage"
    @beforeImage="beforeImage"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FaqItem } from './Questions.vue';

interface PageData {
  id: number;
  title: string;
  description: string[]; // <-- Zaktualizowany typ (teraz oczekuje tablicy)
  url: string;
}

interface ImageData {
  id: number;
  url: string;
}

// Props
const props = defineProps<{
  pageData: PageData[];
  bottomImages: ImageData[];
  faqTitle: string;
  faqData: FaqItem[];
}>();

// State
const activeGallery = ref(false);
const activeImageIndex = ref<number | null>(null);

const showBigGallery = (index: number) => {
  activeGallery.value = true;
  activeImageIndex.value = index;
};

const exitGallery = () => {
  activeGallery.value = false;
};

const beforeImage = () => {
  if (activeImageIndex.value !== null) {
    activeImageIndex.value =
      activeImageIndex.value > 0
        ? activeImageIndex.value - 1
        : props.bottomImages.length - 1;
  }
};

const nextImage = () => {
  if (activeImageIndex.value !== null) {
    activeImageIndex.value =
      activeImageIndex.value + 1 < props.bottomImages.length
        ? activeImageIndex.value + 1
        : 0;
  }
};
</script>

<style scoped lang="scss">
@use './Product-information.scss' as *;
</style>
