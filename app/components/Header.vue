<template>
  <div
    class="Header__main-container"
    @click="showDropDown = false"
    @mouseleave="showDropDown = false"
  >
    <div class="Header__center-container">
      <NuxtLink
        @click="pageActive = 'home'"
        to="/"
        aria-label="Deżal"
        class="Header__logo-link"
      >
        <img src="/icons/logo.svg" class="Header__logo" alt="logo dezal" />
      </NuxtLink>

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

      <transition name="fade">
        <nav v-if="showMobileBtn" class="Header__links-container-mobile">
          <NuxtLink
            v-if="route.path !== '/'"
            to="/"
            class="Header__link-mobile"
            @click="
              closeMobileMenu();
              pageActive = 'home';
            "
            prefetch
          >
            strona głowna
          </NuxtLink>
          <NuxtLink
            v-if="route.path !== '/wiedza'"
            to="/wiedza"
            class="Header__link-mobile"
            prefetch
            @click="
              closeMobileMenu();
              pageActive = 'helper';
            "
          >
            poradniki
          </NuxtLink>

          <button
            type="button"
            class="Header__link-mobile"
            @click="showMobileDropDown = !showMobileDropDown"
          >
            oferta
            <img
              src="/icons/arrow-down.svg"
              class="Header__link-arrow"
              :class="{ 'Header__link-arrow--active': showMobileDropDown }"
              alt="arrow icon"
            />
          </button>

          <transition name="fade">
            <div
              v-show="showMobileDropDown"
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
                prefetch
              >
                <img
                  :src="
                    isHoverLink === link.label
                      ? '/icons/dot-yellow.svg'
                      : '/icons/dot.svg'
                  "
                  alt="icon dot"
                  class="Header__dot"
                />
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
            prefetch
          >
            realizacje
          </NuxtLink>
          <NuxtLink
            to="/kontakt"
            class="Header__link-mobile Header__link-contact"
            @click="
              closeMobileMenu();
              pageActive = 'contact';
            "
            prefetch
          >
            kontakt
          </NuxtLink>
        </nav>
      </transition>

      <div class="Header__links-container">
        <NuxtLink
          v-if="route.path !== '/'"
          to="/"
          class="Header__link"
          @click="pageActive = 'home'"
        >
          strona główna
        </NuxtLink>
        <NuxtLink
          v-if="route.path !== '/wiedza'"
          to="/wiedza"
          class="Header__link"
          @click="pageActive = 'helper'"
          prefetch
        >
          poradniki
        </NuxtLink>

        <button
          type="button"
          class="Header__link"
          @mouseover="showDropDown = true"
        >
          oferta
          <img
            src="/icons/arrow-down.svg"
            class="Header__link-arrow"
            :class="{ 'Header__link-arrow--active': showDropDown }"
            alt="arrow icon"
          />
        </button>

        <div
          v-if="showDropDown"
          class="Header__dropdown"
          @mouseleave="
            showDropDown = false;
            isHoverLink = '';
          "
        >
          <NuxtLink
            v-for="link in offerLinks"
            :key="link.to"
            :to="link.to"
            class="Header__dropdowNuxtLink"
            @mouseenter="isHoverLink = link.label"
            @click="
              showDropDown = false;
              pageActive = 'offer';
            "
            prefetch
          >
            <img
              :src="
                isHoverLink === link.label
                  ? '/icons/dot-yellow.svg'
                  : '/icons/dot.svg'
              "
              alt="icon dot"
              class="Header__dot"
            />
            {{ link.label }}
          </NuxtLink>
        </div>

        <NuxtLink
          to="/realizacje"
          class="Header__link"
          @click="pageActive = 'real'"
          prefetch
        >
          realizacje
        </NuxtLink>

        <NuxtLink
          to="/kontakt"
          class="Header__link Header__link-contact"
          @click="pageActive = 'contact'"
          prefetch
        >
          kontakt
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const isHoverLink = ref('');
const showMobileBtn = ref(false);
const showDropDown = ref(false);
const showMobileDropDown = ref(false);
const pageActive = ref<'home' | 'offer' | 'helper' | 'real' | 'contact'>(
  'home'
);

const offerLinks = [
  { to: '/rolety-dzien-noc', label: 'rolety dzień-noc' },
  { to: '/rolety-materialowe', label: 'rolety materiałowe' },
  { to: '/rolety-rzymskie', label: 'rolety rzymskie' },
  { to: '/plisy', label: 'plisy okienne' },
  { to: '/zaluzje-drewniane', label: 'żaluzje drewniane' },
  { to: '/zaluzje-aluminiowe', label: 'żaluzje aluminiowe' },
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
    '/zaluzje-drewniane': 'offer',
    '/zaluzje-aluminiowe': 'offer',
    '/verticale': 'offer',
    '/moskitiery': 'offer',
    '/plisy': 'offer',
    '/rolety-dzien-noc': 'offer',
    '/rolety-rzymskie': 'offer',
  } as const;

  if (route.path in map) {
    pageActive.value = map[route.path as keyof typeof map];
  }
});
</script>

<style lang="scss" scoped>
@use './Header.scss' as *;
</style>
