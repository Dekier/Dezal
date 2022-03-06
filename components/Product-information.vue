<template>
  <div>
    <div class="ProductInformation__title-container">
      <div class="ProductInformation__image-box">
        <img
          src="/image/header2.webp"
          class="ProductInformation__image"
          alt="header-page"
        />
        <div class="ProductInformation__background" />
        <h3 class="ProductInformation__title">
          Nasza Oferta
        </h3>
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
          'ProductInformation__center-picture--inverted': oddClass(data.id),
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
        :class="{
          'ProductInformation__center-text--inverted': oddClass(data.id),
        }"
      >
        <h1 class="ProductInformation__center-title">
          {{ data.title }}
        </h1>
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
                d="M7.5 65.088a7.5 7.5 0 0 0 7.5-7.5V25.61l48.305 48.295a7.479 7.479 0 0 0 5.303 2.196c1.92 0 3.84-.732 5.304-2.197a7.498 7.498 0 0 0-.001-10.606L25.604 15.002h31.985a7.5 7.5 0 0 0 0-15H7.5a7.5 7.5 0 0 0-7.5 7.5v50.087a7.5 7.5 0 0 0 7.5 7.499zM207.85 150.262a7.5 7.5 0 0 0-7.5 7.5v31.979l-49.792-49.792a7.5 7.5 0 0 0-10.607 10.606l49.791 49.791h-31.977a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h50.086a7.5 7.5 0 0 0 7.5-7.5v-50.084a7.502 7.502 0 0 0-7.501-7.5zM64.792 139.949L15.005 189.74v-31.978c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v50.086a7.5 7.5 0 0 0 7.5 7.5h50.084a7.5 7.5 0 0 0 0-15H25.611l49.788-49.793a7.5 7.5 0 1 0-10.607-10.606zM207.85.002h-50.086a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h31.979l-48.298 48.301a7.5 7.5 0 0 0 5.304 12.803 7.482 7.482 0 0 0 5.304-2.197l48.298-48.301v31.98a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5V7.502a7.501 7.501 0 0 0-7.501-7.5z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <gallery
      v-if="activeGallery"
      :index="activeImageIndex"
      :images="bottomImages"
      @exit="exitGallery"
      @nextImage="nextImage"
      @beforeImage="beforeImage"
    />
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue';

export default {
  name: 'ProductInformation',

  props: {
    pageData: {
      type: Array,
      required: true,
    },
    bottomImages: {
      type: Array,
      required: true,
    },
  },

  components: {
    Gallery,
  },

  data: () => ({
    activeGallery: false,
    activeImageIndex: null,
  }),

  methods: {
    oddClass(id) {
      return id % 2 !== 0 ? true : false;
    },

    showBigGallery(index) {
      this.activeGallery = true;
      this.activeImageIndex = index;
    },
    exitGallery() {
      this.activeGallery = false;
    },

    beforeImage() {
      if (this.activeImageIndex > 0) {
        this.activeImageIndex--;
      } else if (this.activeImageIndex === 0) {
        this.activeImageIndex = this.bottomImages.length - 1;
      }
    },

    nextImage() {
      if (this.bottomImages.length > this.activeImageIndex + 1) {
        this.activeImageIndex++;
      } else if (this.activeImageIndex + 1 === this.bottomImages.length) {
        this.activeImageIndex = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Product-information';
</style>
