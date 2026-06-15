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
        <nav v-show="showMobileBtn" class="Header__links-container-mobile">
          <NuxtLink
            v-show="route.path !== '/'"
            to="/"
            class="Header__link-mobile"
            @click="
              closeMobileMenu();
              pageActive = 'home';
            "
          >
            strona głowna
          </NuxtLink>
          <NuxtLink
            v-show="route.path !== '/wiedza'"
            to="/wiedza"
            class="Header__link-mobile"
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
              alt=""
              aria-hidden="true"
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
              >
                <img
                  :src="
                    isHoverLink === link.label
                      ? '/icons/dot-yellow.svg'
                      : '/icons/dot.svg'
                  "
                  alt=""
                  class="Header__dot"
                  aria-hidden="true"
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
          >
            kontakt
          </NuxtLink>
        </nav>
      </transition>

      <div class="Header__links-container">
        <NuxtLink
          v-show="route.path !== '/'"
          to="/"
          class="Header__link"
          @click="pageActive = 'home'"
          @mouseover="showDropDown = false"
        >
          strona główna
        </NuxtLink>
        <NuxtLink
          v-show="route.path !== '/wiedza'"
          to="/wiedza"
          class="Header__link"
          @click="pageActive = 'helper'"
          @mouseover="showDropDown = false"
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
            alt=""
            aria-hidden="true"
          />
        </button>

        <div
          v-show="showDropDown"
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
          >
            <img
              :src="
                isHoverLink === link.label
                  ? '/icons/dot-yellow.svg'
                  : '/icons/dot.svg'
              "
              alt=""
              class="Header__dot"
              aria-hidden="true"
            />
            {{ link.label }}
          </NuxtLink>
        </div>

        <NuxtLink
          to="/realizacje"
          class="Header__link"
          @click="pageActive = 'real'"
          @mouseover="showDropDown = false"
        >
          realizacje
        </NuxtLink>

        <NuxtLink
          to="/kontakt"
          class="Header__link Header__link-contact"
          @click="pageActive = 'contact'"
          @mouseover="showDropDown = false"
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
