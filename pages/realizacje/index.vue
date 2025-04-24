<template>
  <div class="Realization__main-container">
    <div class="Realization__title-container-background">
      <div class="Realization__title-container">
        <h1 class="Realization__title">Poznaj nasze realizacje</h1>
        <p class="Realization__description">
          Nasze realizacje to nie tylko piękne i estetyczne, ale także
          funkcjonalne i trwałe rozwiązania. Dzięki naszej wiedzy i
          doświadczeniu, jesteśmy w stanie doradzić w wyborze najlepszego
          rozwiązania dla Twojego mieszkania, domu czy firmy. Stawiamy na
          jakość, dlatego korzystamy tylko z najlepszych materiałów i urządzeń.
        </p>
      </div>
    </div>

    <div class="Realization__center-container">
      <div class="Realization__filters-container">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="[
            'Realization__filter',
            { 'Realization__filter--active': currentFilter === filter.value },
          ]"
          @click="setFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="Realization__projects">
        <div
          v-for="(imageData, index) in filteredImages"
          :key="imageData.url"
          class="Realization__project"
          :style="getGridStyle(index)"
        >
          <NuxtImg
            :src="imageData.url"
            class="Realization__project-image"
            :alt="imageAlt(imageData)"
            @click="showBigGallery(index)"
          />
        </div>
      </div>
    </div>

    <Gallery
      v-if="activeGallery"
      :index="activeImageIndex"
      :images="filteredImages"
      @exit="exitGallery"
      @nextImage="nextImage"
      @beforeImage="beforeImage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Gallery from '~/components/Gallery.vue';

const filters = [
  { label: 'WSZYSTKO', value: 'ALL' },
  { label: 'DZIEŃ-NOC', value: 'rolety-dzień-noc' },
  { label: 'MATERIAŁOWE', value: 'rolety-materiałowe' },
  { label: 'RZYMSKIE', value: 'żaluzje-rzymskie' },
  { label: 'PLISY', value: 'PLISY' },
  { label: 'ŻALUZJE', value: 'ZALUZJE' },
  { label: 'VERTICALE', value: 'VERTICALE' },
  { label: 'MOSKITIERY', value: 'MASKITIERY' },
];

const gridLayout = [
  { col: 2, row: 4 },
  { col: 2, row: 2 },
  { col: 2, row: 2 },
  { col: 1, row: 2 },
  { col: 1, row: 2 },
  { col: 2, row: 6 },
  { col: 2, row: 2 },
  { col: 2, row: 2 },
  { col: 4, row: 3 },
];

const getGridStyle = (index) => {
  const layout = gridLayout[index % gridLayout.length];
  return {
    gridColumn: `span ${layout.col}`,
    gridRow: `span ${layout.row}`,
  };
};

const currentFilter = ref('ALL');
const activeGallery = ref(false);
const activeImageIndex = ref(null);

const imagesData = ref([
  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-1.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-2.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-3.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-4.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-5.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-6.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-7.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-8.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-13.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-12.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-11.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-9.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-14.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-15.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-16.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzień-noc-17.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-1.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-2.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-18.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-17.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-16.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-3.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-4.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-5.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-6.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-7.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-8.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-9.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-10.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-12.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-14.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/deżal-poznań-plisa-15.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-17.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-19.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-20.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-21.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/deżal-poznań-plisa-22.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/deżal-poznań-plisa-23.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/deżal-poznań-plisa-24.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/deżal-poznań-plisa-25.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/deżal-poznań-plisa-26.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/deżal-poznań-plisa-27.webp',
    category: 'PLISY',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-1.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-2.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-3.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-4.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-6.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-7.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-9.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-10.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-11.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-12.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-13.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-14.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-15.webp',
    category: 'rolety-materiałowe',
  },
  {
    url: '/images/rolety/dezal-poznan-roleta-materiałowa-16.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-0.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-1.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-2.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-4.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-5.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-8.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-9.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-10.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-11.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-12.webp',
    category: 'żaluzje-rzymskie',
  },
  {
    url: '/images/rolety/dezal-poznan-roleta-rzymska-13.webp',
    category: 'żaluzje-rzymskie',
  },

  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-1.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-2.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-4.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-6.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-7.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-8.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-drewniana-9.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-2.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/deżal-poznań-żaluzja-aluminiowa-3.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/verticale/deżal-poznań-roleta-verticale-1.webp',
    category: 'VERTICALE',
  },

  {
    url: '/images/moskitiery/dezal-poznan-moskitiera-1.webp',
    category: 'MASKITIERY',
  },
]);

const filteredImages = computed(() =>
  currentFilter.value === 'ALL'
    ? imagesData.value
    : imagesData.value.filter((img) => img.category === currentFilter.value)
);

const setFilter = (filter) => {
  currentFilter.value = filter;
};

const showBigGallery = (index) => {
  activeGallery.value = true;
  activeImageIndex.value = index;
};

const exitGallery = () => {
  activeGallery.value = false;
};

const nextImage = () => {
  activeImageIndex.value =
    (activeImageIndex.value + 1) % filteredImages.value.length;
};

const beforeImage = () => {
  activeImageIndex.value =
    (activeImageIndex.value - 1 + filteredImages.value.length) %
    filteredImages.value.length;
};

const imageAlt = (img) => {
  return `deżal-poznań-${img.category}`;
};

definePageMeta({
  title:
    'Realizacje – Rolety, Plisy, Żaluzje i Moskitiery na Wymiar | Deżal Poznań',
  description:
    'Zobacz nasze realizacje rolet, plis, żaluzji i moskitier w Poznaniu. Oferujemy osłony okienne na wymiar – estetyczne, trwałe i funkcjonalne rozwiązania dla domu i firmy.',
  ogImage: {
    url: '/images/offer/dezal-poznan-roleta-dzień-noc-2.webp',
    alt: 'Roleta dzień noc w salonie',
  },
  canonical: 'https://dezalroletypoznan.pl',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.7,
  },
});
</script>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
