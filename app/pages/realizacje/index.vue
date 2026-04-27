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
          <img
            :src="imageData.url"
            class="Realization__project-image"
            :alt="imageAlt(imageData)"
            :title="imageAlt(imageData)"
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

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
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

const layouts = {
  mobile: [{ col: 1, row: 2 }],
  tablet: [
    { col: 2, row: 2 },
    { col: 2, row: 1 },
    { col: 1, row: 2 },
    { col: 1, row: 2 },
    { col: 1, row: 2 },
    { col: 1, row: 2 },
  ],
  desktop: [
    { col: 2, row: 2 },
    { col: 4, row: 2 },
    { col: 2, row: 2 },
    { col: 1, row: 2 },
    { col: 3, row: 2 },
    { col: 3, row: 2 },
    { col: 1, row: 2 },
  ],
};

const currentLayout = ref(layouts.mobile);

const updateLayout = () => {
  const width = window.innerWidth;
  if (width > 1170) {
    currentLayout.value = layouts.desktop;
  } else if (width > 768) {
    currentLayout.value = layouts.tablet;
  } else {
    currentLayout.value = layouts.mobile;
  }
};

onMounted(() => {
  updateLayout();
  window.addEventListener('resize', updateLayout);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout);
});

const getGridStyle = (index: number) => {
  const layout = currentLayout.value[index % currentLayout.value.length];
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
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-1.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-2.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-3.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-4.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-5.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-6.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-7.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-8.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-13.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-12.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-11.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-9.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-14.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-15.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-16.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-dzien-noc-17.webp',
    category: 'rolety-dzień-noc',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-1.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-2.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-18.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-17.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-16.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-3.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-4.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-5.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-6.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-7.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-8.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-9.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-10.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-12.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-14.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/dezal-poznan-plisa-15.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-17.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-19.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-20.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-21.webp',
    category: 'PLISY',
  },

  {
    url: '/images/plisy/dezal-poznan-plisa-22.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/dezal-poznan-plisa-23.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/dezal-poznan-plisa-24.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/dezal-poznan-plisa-25.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/dezal-poznan-plisa-26.webp',
    category: 'PLISY',
  },
  {
    url: '/images/plisy/dezal-poznan-plisa-27.webp',
    category: 'PLISY',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-1.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-2.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-3.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-4.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-6.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-7.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-9.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-10.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-11.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-12.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-13.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-14.webp',
    category: 'rolety-materiałowe',
  },

  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-15.webp',
    category: 'rolety-materiałowe',
  },
  {
    url: '/images/rolety/dezal-poznan-roleta-materialowa-16.webp',
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
    url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-1.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-2.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-4.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-6.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-7.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-8.webp',
    category: 'ZALUZJE',
  },
  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-drewniana-9.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-1.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-2.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-3.webp',
    category: 'ZALUZJE',
  },

  {
    url: '/images/verticale/dezal-poznan-roleta-verticale-1.webp',
    category: 'VERTICALE',
  },

  {
    url: '/images/moskitiery/dezal-poznan-moskitiera-2.webp',
    category: 'MASKITIERY',
  },

  {
    url: '/images/moskitiery/dezal-poznan-moskitiera-1.webp',
    category: 'MASKITIERY',
  },

  {
    url: '/images/moskitiery/dezal-poznan-moskitiera-3.webp',
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
  return `deżal poznań ${img.category}`;
};

useHead({
  title:
    'Realizacje – Rolety, Plisy, Żaluzje i Moskitiery na Wymiar | Deżal Poznań',
  meta: [
    {
      name: 'description',
      content:
        'Zobacz nasze realizacje rolet, plis, żaluzji i moskitier w Poznaniu. Oferujemy osłony okienne na wymiar – estetyczne, trwałe i funkcjonalne rozwiązania dla domu i firmy.',
    },
    {
      property: 'og:title',
      content:
        'Realizacje – Rolety, Plisy, Żaluzje i Moskitiery na Wymiar | Deżal Poznań',
    },
    {
      property: 'og:description',
      content:
        'Zobacz nasze realizacje rolet, plis, żaluzji i moskitier w Poznaniu. Oferujemy osłony okienne na wymiar – estetyczne, trwałe i funkcjonalne rozwiązania dla domu i firmy.',
    },
    {
      property: 'og:image',
      content: '/images/offer/dezal-poznan-roleta-dzien-noc-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Roleta dzień noc w salonie',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/realizacje',
});
</script>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
