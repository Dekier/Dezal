<template>
  <div class="ProductInformation__main-container">
    <!-- <div class="ProductInformation__title-container">
      <div class="ProductInformation__image-box">
        <img
          src="/images/header2.webp"
          class="ProductInformation__image"
          alt="header-page"
          loading="lazy"
        />
        <div class="ProductInformation__background" />
        <h3 class="ProductInformation__title">Nasza Oferta</h3>
      </div>
    </div> -->

    <div
      v-for="data in pageData"
      :key="data.id"
      class="ProductInformation__center-container"
    >
      <div
        class="ProductInformation__center-picture"
        :class="{
          'ProductInformation__center-picture--inverted': isOdd(data.id),
        }"
      >
        <!-- <img
          :src="data.url"
          class="ProductInformation__main-picture"
          :alt="data.url"
          loading="lazy"
        /> -->
        <NuxtImg
          :src="data.url"
          class="ProductInformation__main-picture"
          :alt="`Realizacja: ${data.title || 'Rolety i żaluzje Deżal Poznań'}`"
          :title="data.title"
          width="800"
          height="600"
          format="webp"
          fetchpriority="high"
          :loading="undefined"
          preload
          fit="cover"
          sizes="sm:100vw md:600px"
        />
      </div>

      <div
        class="ProductInformation__center-text"
        :class="{ 'ProductInformation__center-text--inverted': isOdd(data.id) }"
      >
        <h1 class="ProductInformation__center-title">{{ data.title }}</h1>
        <p class="ProductInformation__product-description">
          {{ data.description }}
        </p>
        <p class="ProductInformation__info">
          W {{ data.title }} zaopatrujemy Poznań i okolice.
        </p>
      </div>
    </div>

    <div class="ProductInformation__bottom-container">
      <div class="ProductInformation__bottom-title">
        Przykładowe Realizacje Naszych Produktów
      </div>

      <div class="ProductInformation__bottom-realizations">
        <div
          v-for="(imageData, index) in bottomImages"
          :key="imageData.id"
          @click="showBigGallery(index)"
          class="ProductInformation__bottom-realizations-box"
        >
          <!-- <img
            :src="imageData.url"
            class="ProductInformation__bottom-realizations-image"
            :alt="imageData.url"
            loading="lazy"
          /> -->
          <NuxtImg
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
          />
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

    <Gallery
      v-if="activeGallery"
      :index="activeImageIndex"
      :images="bottomImages"
      @exit="exitGallery"
      @nextImage="nextImage"
      @beforeImage="beforeImage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface PageData {
  id: number;
  title: string;
  description: string;
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
}>();

// State
const activeGallery = ref(false);
const activeImageIndex = ref<number | null>(null);

// Methods
const isOdd = (id: number) => id % 2 !== 0;

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
