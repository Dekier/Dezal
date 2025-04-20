<template>
  <div>
    <div class="ProductInformation__title-container">
      <div class="ProductInformation__image-box">
        <img
          src="/images/header2.webp"
          class="ProductInformation__image"
          alt="header-page"
        />
        <div class="ProductInformation__background" />
        <h3 class="ProductInformation__title">Nasza Oferta</h3>
      </div>
    </div>

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
        <img
          :src="data.url"
          class="ProductInformation__main-picture"
          :alt="data.url"
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
          W żaluzje, plisy i rolety zaopatrujemy Poznań i okolice.
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
          <img
            :src="imageData.url"
            class="ProductInformation__bottom-realizations-image"
            :alt="imageData.url"
          />
          <div class="ProductInformation__hover-background">
            <svg
              class="ProductInformation__hover-icon"
              viewBox="0 0 215.35 215.35"
            >
              <path
                fill="#fff"
                d="M7.5 65.088a7.5 7.5 0 0 0 7.5-7.5V25.61l48.305 48.295a7.479 7.479 0 0 0 5.303 2.196c1.92 0 3.84-.732 5.304-2.197a7.498 7.498 0 0 0-.001-10.606L25.604 15.002h31.985a7.5 7.5 0 0 0 0-15H7.5a7.5 7.5 0 0 0-7.5 7.5v50.087a7.5 7.5 0 0 0 7.5 7.499z..."
              />
            </svg>
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
