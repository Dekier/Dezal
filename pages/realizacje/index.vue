<template>
  <div class="Realization__main-container">
    <div class="Realization__title-container">
      <div class="Realization__image">
        <div class="Realization__background" />
        <h1 class="Realization__title">Realizacje</h1>
      </div>
    </div>
    <div class="Realization__center-container">
      <div class="Realization__filters-container">
        <button
          type="button"
          :class="{ 'Realization__filter--active': currentFilter === 'ALL' }"
          class="Realization__filter"
          @click="setFilter('ALL')"
        >
          WSZYSTKO
        </button>
        <button
          type="button"
          :class="{
            'Realization__filter--active': currentFilter === 'rolety-dzień-noc',
          }"
          class="Realization__filter"
          @click="setFilter('rolety-dzień-noc')"
        >
          DZIEŃ-NOC
        </button>
        <button
          type="button"
          :class="{
            'Realization__filter--active':
              currentFilter === 'rolety-materiałowe',
          }"
          class="Realization__filter"
          @click="setFilter('rolety-materiałowe')"
        >
          MATERIAŁOWE
        </button>
        <button
          type="button"
          :class="{
            'Realization__filter--active': currentFilter === 'żaluzje-rzymskie',
          }"
          class="Realization__filter"
          @click="setFilter('żaluzje-rzymskie')"
        >
          RZYMSKIE
        </button>
        <button
          type="button"
          :class="{ 'Realization__filter--active': currentFilter === 'PLISY' }"
          class="Realization__filter"
          @click="setFilter('PLISY')"
        >
          PLISY
        </button>
        <button
          type="button"
          :class="{
            'Realization__filter--active': currentFilter === 'ZALUZJE',
          }"
          class="Realization__filter"
          @click="setFilter('ZALUZJE')"
        >
          ŻALUZJE
        </button>
        <button
          type="button"
          :class="{
            'Realization__filter--active': currentFilter === 'VERTICALE',
          }"
          class="Realization__filter"
          @click="setFilter('VERTICALE')"
        >
          VERTICALE
        </button>
        <button
          type="button"
          :class="{
            'Realization__filter--active': currentFilter === 'MASKITIERY',
          }"
          class="Realization__filter"
          @click="setFilter('MASKITIERY')"
        >
          MOSKITIERY
        </button>
      </div>
      <div class="Realization__projects">
        <div
          v-for="(imageData, index) in allImages"
          :key="randomKey(index)"
          class="Realization__project"
        >
          <img
            :src="imageData.url"
            class="Realization__project-image"
            :alt="imageAlt(imageData)"
            @click="showBigGallery(index)"
          />
          <div
            class="Realization__hover-background"
            @click="showBigGallery(index)"
          >
            <svg class="Realization__hover-icon" viewBox="0 0 215.35 215.35">
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
      :images="images"
      @exit="exitGallery"
      @nextImage="nextImage"
      @beforeImage="beforeImage"
    />
  </div>
</template>
<script>
import Gallery from '~/components/Gallery.vue';

export default {
  name: 'Realization',

  transition: 'bounce',

  components: {
    Gallery,
  },

  data() {
    return {
      currentFilter: 'ALL',
      imagesData: [
        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-1.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-2.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-3.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-4.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-5.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-6.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-7.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-8.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-13.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-12.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-11.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-9.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-14.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-15.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-16.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-17.jpg',
          category: 'rolety-dzień-noc',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-1.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-2.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-18.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-17.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-16.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-3.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-4.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-5.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-6.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-7.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-8.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-9.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-10.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-12.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-14.jpg',
          category: 'PLISY',
        },
        {
          url: '/image/plisy/deżal-poznań-plisa-15.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-17.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-19.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-20.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-21.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/plisy/deżal-poznań-plisa-22.jpg',
          category: 'PLISY',
        },
        {
          url: '/image/plisy/deżal-poznań-plisa-23.jpg',
          category: 'PLISY',
        },
        {
          url: '/image/plisy/deżal-poznań-plisa-24.jpg',
          category: 'PLISY',
        },
        {
          url: '/image/plisy/deżal-poznań-plisa-25.jpg',
          category: 'PLISY',
        },
        {
          url: '/image/plisy/deżal-poznań-plisa-26.jpg',
          category: 'PLISY',
        },
        {
          url: '/image/plisy/deżal-poznań-plisa-27.jpg',
          category: 'PLISY',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-1.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-2.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-4.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-6.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-7.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-9.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-10.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-11.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-12.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-13.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-14.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-15.jpg',
          category: 'rolety-materiałowe',
        },
        {
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-16.jpg',
          category: 'rolety-materiałowe',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-0.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-1.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-2.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-4.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-5.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-6.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-8.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-9.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-10.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-11.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-12.jpg',
          category: 'żaluzje-rzymskie',
        },
        {
          url: '/image/rolety/dezal-poznan-roleta-rzymska-13.jpg',
          category: 'żaluzje-rzymskie',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-2.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-3.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-4.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-5.jpg',
          category: 'ZALUZJE',
        },
        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-6.jpg',
          category: 'ZALUZJE',
        },
        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-7.jpg',
          category: 'ZALUZJE',
        },
        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-8.jpg',
          category: 'ZALUZJE',
        },
        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-9.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-2.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-3.jpg',
          category: 'ZALUZJE',
        },

        {
          url: '/image/verticale/deżal-poznań-roleta-verticale-1.jpg',
          category: 'VERTICALE',
        },

        {
          url: '/image/moskitiery/dezal-poznan-moskitiera-1.jpg',
          category: 'MASKITIERY',
        },
      ],
      activeGallery: false,
      activeImageIndex: null,
      title: 'Plisty, Rolety, Moskitery, Rzymskie w Poznaniu od firmy Deżal.',
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Realizacje naszych usług.',
        },
      ],
    };
  },

  computed: {
    allImages() {
      if (this.currentFilter === 'ALL') {
        return this.imagesData;
      }

      const newList = this.imagesData.filter(
        a => a.category === this.currentFilter
      );
      return newList;
    },

    images() {
      if (this.currentFilter === 'ALL') {
        return this.imagesData;
      } else {
        return this.imagesData.filter(i => i.category === this.currentFilter);
      }
    },
  },

  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
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
        this.activeImageIndex = this.images.length - 1;
      }
    },

    nextImage() {
      if (this.images.length > this.activeImageIndex + 1) {
        this.activeImageIndex++;
      } else if (this.activeImageIndex + 1 === this.images.length) {
        this.activeImageIndex = 0;
      }
    },
    imageAlt(img) {
      return 'deżal-poznań-' + img.category + '-' + img.id;
    },
    randomKey(length) {
      let result = '';
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>
<style lang="scss" scoped>
@import 'index';
</style>
