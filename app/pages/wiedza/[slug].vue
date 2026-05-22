<template>
  <div class="ArticlePage" ref="articlePageRef">
    <ArticleMain :data="articleData" />
    <!-- <ArticleProposedBottom /> -->
    <ArticleFooter />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'articles',
});

const route = useRoute();
const slug = (route.params.slug as string).replace('.json', '');

// 1. Zmieniamy pattern glob, aby był bardziej elastyczny
const articles = import.meta.glob('~/assets/content/articles/*.json');

// 2. Szukamy klucza, który kończy się na /slug.json
const articleKey = Object.keys(articles).find((key) =>
  key.endsWith(`${slug}.json`)
);

if (!articleKey) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Nie znaleziono artykułu',
    fatal: true,
  });
}

// 3. Pobieramy dane (to jest teraz Promise!)
const articleData = await articles[articleKey]();

// Teraz articleData zawiera zawartość Twojego JSONa
console.log(articleData);
useHead({
  title: `${articleData.title} | Deżal`,
  meta: [
    { name: 'description', content: articleData.meta_description },
    { property: 'og:title', content: `${articleData.title} | Deżal` },
    { property: 'og:description', content: articleData.meta_description },
    {
      property: 'og:image',
      content: articleData.img
        ? `https://dezalroletypoznan.pl${articleData.img}`
        : 'https://dezalroletypoznan.pl/images/logo2.webp',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});

useSchemaOrg([
  defineLocalBusiness({
    name: 'Deżal Rolety Poznań',
    url: 'https://dezalroletypoznan.pl',
    telephone: '+48 603 630 299',
    address: {
      addressLocality: 'Poznań',
      addressRegion: 'wielkopolskie',
      postalCode: '60-692',
      streetAddress: 'ul. Jaroczyńskiego 41',
      addressCountry: 'PL',
    },
    image: 'https://dezalroletypoznan.pl/images/logo-rect.png',
  }),
]);
</script>

<style lang="scss">
@use './[slug].scss' as *;
</style>
