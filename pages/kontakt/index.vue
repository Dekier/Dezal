<template>
  <Contact />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Kontakt – Rolety Poznań',
  description:
    'Skontaktuj się z nami, aby uzyskać dodatkowe informacje lub umówić się na bezpłatny pomiar i wycenę.',
  ogImage: {
    url: '/images/logo-rect.png',
    alt: 'Logo firmy DEŻAL',
  },
  canonical: 'https://dezalroletypoznan.pl/kontakt',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
});
</script>

<style scoped lang="scss">
@use './index.scss' as *;
</style>
