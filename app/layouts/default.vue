<template>
  <div class="layout">
    <Header />
    <NuxtPage />
    <FloatingNotices />
    <LazyFooter />
  </div>
</template>

<script setup lang="ts">
import FloatingNotices from '~/components/FloatingNotices.vue';
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
