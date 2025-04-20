<template>
  <div
    class="Header__main-container"
    @click="showDropDown = false"
    @mouseleave="showDropDown = false"
  >
    <div class="Header__center-container">
      <NuxtLink @click="pageActive = 'home'" to="/" aria-label="Deżal">
        <div class="Header__logo" />
      </NuxtLink>

      <!-- Hamburger -->
      <div
        @click="showMobileBtn = !showMobileBtn"
        :class="{ 'Header__hamburger-container--active': showMobileBtn }"
        class="Header__hamburger-container"
      >
        <div
          :class="{ 'Header__hamburger-line-first': showMobileBtn }"
          class="Header__hamburger-line"
        />
        <div
          :class="{ 'Header__hamburger-line-remove': showMobileBtn }"
          class="Header__hamburger-line"
        />
        <div
          :class="{ 'Header__hamburger-line-second': showMobileBtn }"
          class="Header__hamburger-line"
        />
      </div>

      <!-- Mobile nav -->
      <transition name="fade">
        <nav v-if="showMobileBtn" class="Header__links-container-mobile">
          <NuxtLink
            to="/"
            class="Header__link-mobile"
            @click="
              closeMobileMenu();
              pageActive = 'home';
            "
          >
            STRONA GŁÓWNA
          </NuxtLink>

          <button
            type="button"
            class="Header__link-mobile"
            @click="showMobileDropDown = !showMobileDropDown"
          >
            OFERTA
            <svg
              class="Header__link-arrow"
              width="10"
              height="10"
              viewBox="0 0 129 129"
            >
              <path
                d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
              />
            </svg>
          </button>

          <transition name="fade">
            <div
              v-if="showMobileDropDown"
              class="Header__dropdown-container-mobile"
            >
              <NuxtLink
                v-for="link in offerLinks"
                :key="link.to"
                :to="link.to"
                class="Header__dropdowNuxtLink-mobile"
                @click="
                  closeMobileMenu();
                  pageActive = 'offer';
                "
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </transition>

          <NuxtLink
            to="/realizacje"
            class="Header__link-mobile"
            @click="
              closeMobileMenu();
              pageActive = 'real';
            "
          >
            REALIZACJE
          </NuxtLink>
          <NuxtLink
            to="/kontakt"
            class="Header__link-mobile"
            @click="
              closeMobileMenu();
              pageActive = 'contact';
            "
          >
            KONTAKT
          </NuxtLink>
        </nav>
      </transition>

      <!-- Desktop nav -->
      <div class="Header__links-container">
        <NuxtLink to="/" class="Header__link" @click="pageActive = 'home'">
          STRONA GŁÓWNA
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'home' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'home' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
        </NuxtLink>

        <button
          type="button"
          class="Header__link"
          @mouseover="showDropDown = true"
        >
          OFERTA
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'offer' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'offer' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
          <svg
            class="Header__link-arrow"
            width="10"
            height="10"
            viewBox="0 0 129 129"
          >
            <path
              d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
            />
          </svg>
        </button>

        <div
          v-if="showDropDown"
          class="Header__dropdown"
          @mouseleave="showDropDown = false"
        >
          <NuxtLink
            v-for="link in offerLinks"
            :key="link.to"
            :to="link.to"
            class="Header__dropdowNuxtLink"
            @click="
              showDropDown = false;
              pageActive = 'offer';
            "
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <NuxtLink
          to="/realizacje"
          class="Header__link"
          @click="pageActive = 'real'"
        >
          REALIZACJE
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'real' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'real' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
        </NuxtLink>

        <NuxtLink
          to="/kontakt"
          class="Header__link"
          @click="pageActive = 'contact'"
        >
          KONTAKT
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'contact' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'contact' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const showMobileBtn = ref(false);
const showDropDown = ref(false);
const showMobileDropDown = ref(false);
const pageActive = ref<'home' | 'offer' | 'real' | 'contact'>('home');

const offerLinks = [
  { to: '/rolety-dzien-noc', label: 'Rolety Dzień-Noc' },
  { to: '/rolety-materialowe', label: 'Rolety Materiałowe' },
  { to: '/rolety-rzymskie', label: 'Rolety Rzymskie' },
  { to: '/plisy', label: 'PLISY' },
  { to: '/zaluzje', label: 'Żaluzje' },
  { to: '/verticale', label: 'verticale' },
  { to: '/moskitiery', label: 'moskitiery' },
];

const closeMobileMenu = () => {
  showMobileBtn.value = false;
  showMobileDropDown.value = false;
};

const route = useRoute();

onMounted(() => {
  const map = {
    '/': 'home',
    '/realizacje': 'real',
    '/kontakt': 'contact',
    '/rolety-materialowe': 'offer',
  } as const;

  if (route.path in map) {
    pageActive.value = map[route.path as keyof typeof map];
  }
});
</script>

<style lang="scss" scoped>
@use './Header.scss' as *;
</style>
