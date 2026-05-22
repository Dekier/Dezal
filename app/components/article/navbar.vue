<template>
  <div class="Navbar__main-container">
    <div class="Navbar__center-container">
      <NuxtLink to="/" class="Navbar__logo-container">
        <img
          src="/svg/logo-blue.svg"
          class="Navbar__logo"
          alt="techbless logo"
        />
      </NuxtLink>
      <!-- <img src="/svg/logo-small.svg" class="Navbar__logo-small" /> -->

      <!-- <div class="Navbar__center-container">
      <button
        v-for="s in sections"
        :key="s.id"
        type="button"
        class="Navbar__button"
        :class="{ 'Navbar__button--active': activeSection === s.id }"
        @click="scrollToSection(s.id)"
      >
        {{ s.label }}
      </button>
    </div> -->

      <div class="Navbar__right-container">
        <div
          ref="selectContainer"
          class="Navbar__select-container"
          @mouseenter="mouseEnter()"
        >
          <button
            type="button"
            class="Navbar__button-green"
            :class="{ 'Navbar__button-green--active': isActiveSelectList }"
            @click="isActiveSelectList = !isActiveSelectList"
          >
            Nasze dema
            <img
              src="/svg/arrow-black-400.svg"
              class="Navbar__button-icon"
              :class="{ 'Navbar__button-icon--active': isActiveSelectList }"
              alt="arrow-down"
            />
          </button>

          <div
            class="Navbar__select-list"
            :class="{ 'Navbar__select-list--active': isActiveSelectList }"
            @mouseleave="isActiveSelectList = false"
          >
            <a
              href="https://demo.techbless.pl/e-commerce?id=1"
              type="button"
              class="Navbar__select-button"
              target="_blank"
              >E-commerce
            </a>
            <a
              href="https://demo.techbless.pl/"
              type="button"
              class="Navbar__select-button"
              target="_blank"
              >Konfigurator
            </a>
            <a
              href="https://demo.techbless.pl/e-commerce?w=true"
              type="button"
              class="Navbar__select-button"
              target="_blank"
              >Wizualizator
            </a>
          </div>
        </div>

        <button type="button" class="Navbar__button-red" @click="openContact">
          Kontakt
        </button>
        <!-- <button
        type="button"
        class="Navbar__button-hamburger"
        @click="openMenuMobile"
        aria-label="Otwórz menu nawigacji"
      >
        <div class="Navbar__button-hamburger-line" />
        <div class="Navbar__button-hamburger-line" />
        <div class="Navbar__button-hamburger-line" />
      </button> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useGeneralStore } from '@/store/general';
// import { onClickOutside } from '@vueuse/core';
// import { storeToRefs } from 'pinia';

const store = useGeneralStore();
// const { isFinishedAnimationHero } = storeToRefs(store);

const openContact = () => {
  store.setIsActiveContactComponent(true);
};
// const openMenuMobile = () => {
//   store.setIsActiveMenuMobileComponent(true);
// };

const sections = [
  { label: 'Problem', id: 'problem', key: 2 },
  { label: 'Rozwiązanie', id: 'solution', key: 3 },
  { label: 'Możliwości', id: 'possibilities', key: 4 },
  { label: 'Korzyści', id: 'benefits', key: 5 },
  { label: 'Oferta', id: 'offer', key: 7 },
  { label: 'Mity i Fakty', id: 'myth', key: 6 },
] as const;

const isActiveSelectList = ref(false);
const selectContainer = ref(null);

// onClickOutside(selectContainer, () => {
//   isActiveSelectList.value = false;
// });

const activeSection = ref<string>('');

// const HEADER_OFFSET = 0;

// const isProgrammaticScroll = ref(false);
let scrollEndUnlockTimer: number | null = null;

// const scrollToSection = (id: string) => {
//   if (!process.client) return;
//   const el = document.getElementById(id);
//   if (!el) return;

//   isProgrammaticScroll.value = true;
//   clearScrollEndTimer();

//   const top =
//     el.getBoundingClientRect().top + window.scrollY - (HEADER_OFFSET || 0);

//   window.scrollTo({ top, behavior: 'smooth' });

//   const onScrollEnd = () => {
//     isProgrammaticScroll.value = false;
//     window.removeEventListener('scrollend', onScrollEnd as any);
//     clearScrollEndTimer();
//   };
//   window.addEventListener('scrollend', onScrollEnd as any, { once: true });

//   scrollEndUnlockTimer = window.setTimeout(() => {
//     isProgrammaticScroll.value = false;
//     window.removeEventListener('scrollend', onScrollEnd as any);
//     clearScrollEndTimer();
//   }, 600);
// };

const clearScrollEndTimer = () => {
  if (scrollEndUnlockTimer !== null) {
    clearTimeout(scrollEndUnlockTimer);
    scrollEndUnlockTimer = null;
  }
};

// --- NOWA, WYDAJNA LOGIKA ---

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!process.client) return;

  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const matchingSection = sections.find((s) => s.id === entry.target.id);
        if (matchingSection) {
          activeSection.value = matchingSection.id;
          store.setIsActiveSection(matchingSection.key);
        }
      }
    });
  }, options);

  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer?.observe(el);
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
  clearScrollEndTimer();
});
const isMobile = () => {
  return window.matchMedia('(pointer: coarse)').matches;
};
const mouseEnter = () => {
  if (isMobile()) return;
  isActiveSelectList.value = true;
};
</script>

<style scoped lang="scss">
@use './navbar.scss' as *;

/* Jeżeli nie masz tego w SCSS */
.Navbar__button--active {
  outline: none;
  border-bottom: 2px solid currentColor;
}
</style>
