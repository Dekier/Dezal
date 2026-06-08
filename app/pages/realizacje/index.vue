<template>
  <div class="Realization__main-container">
    <div class="Realization__title-container-background">
      <div class="Realization__title-container">
        <h1 class="Realization__title">Poznaj nasze realizacje</h1>
        <p class="Realization__description">
          Nasze realizacje to nie tylko piękne i estetyczne, ale także
          funkjonalne i trwałe rozwiązania. Dzięki naszej wiedzy i
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
  { label: 'PLISY OKIENNE', value: 'PLISY' },
  { label: 'ŻALUZJE DREWNIANE', value: 'zaluzje-drewniane' },
  { label: 'ŻALUZJE ALUMINIOWE', value: 'zaluzje-aluminiowe' },
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

// Funkcja pomocnicza do generowania linków (od max do min)
const generateImages = (
  urlTemplate: string,
  category: string,
  min: number,
  max: number
) => {
  const result = [];
  // Pętla iteruje w dół, aby zdjęcia wyświetlały się od najwyższego numeru
  for (let i = max; i >= min; i--) {
    result.push({
      url: urlTemplate.replace('{n}', i.toString()),
      category: category,
    });
  }
  return result;
};

// Generowanie całej listy za pomocą funkcji pomocniczej
const imagesData = ref([
  ...generateImages(
    '/images/rolety/dezal-poznan-roleta-dzien-noc-{n}.webp',
    'rolety-dzień-noc',
    1,
    22
  ),
  ...generateImages(
    '/images/plisy/dezal-poznan-plisa-{n}.webp',
    'PLISY',
    1,
    38
  ),
  ...generateImages(
    '/images/rolety/dezal-poznan-roleta-materialowa-{n}.webp',
    'rolety-materiałowe',
    1,
    20
  ),
  ...generateImages(
    '/images/rolety/dezal-poznan-roleta-rzymska-{n}.webp',
    'żaluzje-rzymskie',
    0,
    12
  ),
  ...generateImages(
    '/images/zaluzje/dezal-poznan-zaluzja-drewniana-{n}.webp',
    'zaluzje-drewniane',
    1,
    21
  ),
  ...generateImages(
    '/images/zaluzje/dezal-poznan-zaluzja-aluminiowa-{n}.webp',
    'zaluzje-aluminiowe',
    1,
    11
  ),
  ...generateImages(
    '/images/verticale/dezal-poznan-roleta-verticale-{n}.webp',
    'VERTICALE',
    1,
    2
  ),
  ...generateImages(
    '/images/moskitiery/dezal-poznan-moskitiera-{n}.webp',
    'MASKITIERY',
    1,
    3
  ),
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
  title: 'Nasze Realizacje: Rolety, Plisy, Żaluzje Poznań',
  htmlAttrs: {
    lang: 'pl',
  },
  meta: [
    {
      name: 'description',
      content:
        'Zobacz galerię naszych realizacji w Poznaniu i okolicach. Montujemy rolety, plisy, żaluzje i moskitiery na wymiar. Zainspiruj się naszymi projektami!',
    },
    {
      property: 'og:title',
      content: 'Nasze Realizacje: Rolety, Plisy, Żaluzje Poznań',
    },
    {
      property: 'og:description',
      content:
        'Zobacz galerię naszych realizacji w Poznaniu i okolicach. Montujemy rolety, plisy, żaluzje i moskitiery na wymiar. Zainspiruj się naszymi projektami!',
    },
    {
      property: 'og:image',
      content:
        'https://dezalroletypoznan.pl/images/rolety/dezal-poznan-roleta-dzien-noc-2.webp',
    },
    {
      property: 'og:image:alt',
      content: 'Nasze realizacje - Rolety dzień noc w Poznaniu',
    },
  ],
  canonical: 'https://dezalroletypoznan.pl/realizacje',
});
</script>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
