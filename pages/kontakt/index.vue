<template>
  <Contact />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Kontakt – Rolety Poznań',
  meta: [
    {
      name: 'description',
      content:
        'Skontaktuj się z nami, aby uzyskać dodatkowe informacje lub umówić się na bezpłatny pomiar i wycenę.',
    },
    {
      property: 'og:title',
      content: 'Kontakt – Rolety Poznań',
    },
    {
      property: 'og:description',
      content:
        'Skontaktuj się z nami, aby uzyskać dodatkowe informacje lub umówić się na bezpłatny pomiar i wycenę.',
    },
    {
      property: 'og:image',
      content: '/images/logo-rect.png',
    },
    {
      property: 'og:image:alt',
      content: 'Logo firmy DEŻAL',
    },
  ],
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
