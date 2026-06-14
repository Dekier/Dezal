<template>
  <div class="layout">
    <Header />
    <NuxtPage />
    <LazyCookies v-if="visibleCookies" @hideCookies="hideCookies" />
    <LazyFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const visibleCookies = ref(true);

onMounted(() => {
  // Sprawdzamy czy użytkownik ma dostęp do localStorage (bezpieczniejsze dla SSR)
  if (typeof localStorage !== 'undefined' && localStorage.cookies) {
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
  letter-spacing: 0px;
}

html,
body {
  padding: 0;
  margin: 0;
  // Fonty wczytujemy teraz przez preconnect w nuxt.config.ts,
  // więc tutaj po prostu go deklarujemy.
  font-family: 'Inter', sans-serif;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Dobra praktyka: stopka zawsze na dole
}
</style>
