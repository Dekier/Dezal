<template>
  <div class="layout">
    <SpeedInsights />
    <Analytics/>
    <Header />
    <NuxtPage />
    <Cookies v-if="visibleCookies" @hideCookies="hideCookies" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
import { Analytics } from '@vercel/analytics/nuxt'
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'ZPHU DEŻAL Dariusz Dekier',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Jaroczyńskiego 41',
          addressLocality: 'Poznań',
          postalCode: '60-692',
          addressCountry: 'PL',
        },
        logo: 'https://dezalroletypoznan.pl/images/logo.png',
        telephone: '+48603630299',
        openingHours: ['Mo 12:00-18:00', 'Tu-Fr 09:00-17:00'],
        url: 'https://dezalroletypoznan.pl/',
      }),
    },
  ],
});

const visibleCookies = ref(true);

onMounted(() => {
  if (localStorage.cookies) {
    visibleCookies.value = false;
  }
});

const hideCookies = () => {
  visibleCookies.value = false;
  localStorage.cookies = 'false';
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  letter-spacing: 1px;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.layout {
  display: flex;
  flex-direction: column;
}
</style>
