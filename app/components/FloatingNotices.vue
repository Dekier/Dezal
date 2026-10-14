<script setup lang="ts">
import Cookies from '~/components/Cookies.vue';
import OpeningStatus from '~/components/OpeningStatus.vue';

const route = useRoute();
const visibleCookies = useState('dezal-cookies-visible', () => true);
const prefersReducedMotion = ref(false);
let motionPreference: MediaQueryList;

const chooseCookies = (accepted: boolean) => {
  const googleAnalytics = useNuxtApp().$scripts?.googleAnalytics;
  googleAnalytics?.proxy.gtag('consent', 'update', {
    analytics_storage: accepted ? 'granted' : 'denied',
  });
  if (accepted && googleAnalytics) {
    void googleAnalytics.load().catch((error) => {
      console.warn('Nie udało się uruchomić statystyk.', error);
    });
  }
  visibleCookies.value = false;
};
const updateMotionPreference = () => {
  prefersReducedMotion.value = motionPreference.matches;
};

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  updateMotionPreference();
  motionPreference.addEventListener('change', updateMotionPreference);
});

onBeforeUnmount(() => {
  motionPreference?.removeEventListener('change', updateMotionPreference);
});
</script>

<template>
  <div
    class="FloatingNotices__main-container"
    :class="{
      'FloatingNotices__main-container--reduced-motion': prefersReducedMotion,
    }"
  >
    <div v-if="route.path === '/'" class="FloatingNotices__hours">
      <OpeningStatus />
    </div>
    <div
      class="FloatingNotices__cookies"
      :class="{ 'FloatingNotices__cookies--hidden': !visibleCookies }"
      :inert="!visibleCookies"
      :aria-hidden="!visibleCookies"
    >
      <div class="FloatingNotices__cookies-inner">
        <Cookies @hide-cookies="chooseCookies" />
      </div>
    </div>
  </div>
</template>

<style src="./FloatingNotices.scss" lang="scss"></style>
