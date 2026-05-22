<template>
  <div class="ArticlePage" ref="articlePageRef">
    <ArticleMain :data="articleData" />
    <ArticleFooter />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'articles',
});

const route = useRoute();
const slug = (route.params.slug as string).replace('.json', '');

const articles = import.meta.glob('~/assets/content/articles/*.json');
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

const articleData = (await articles[articleKey]()) as any;

// 1. Meta tagi dla SEO
useHead({
  title: `${articleData.title} `,
  meta: [
    { name: 'description', content: articleData.meta_description },
    { property: 'og:title', content: `${articleData.title} | Deżal` },
    { property: 'og:description', content: articleData.meta_description },
    {
      property: 'og:image',
      content: `https://dezalroletypoznan.pl${articleData.img || '/images/logo2.webp'}`,
    },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});

// 2. Schema.org - tylko dla Artykułu
useSchemaOrg([
  defineArticle({
    headline: articleData.title,
    description: articleData.meta_description,
    image: `https://dezalroletypoznan.pl${articleData.img}`,
    datePublished: articleData.date, // Upewnij się, że masz to w JSONie
    author: {
      name: 'Deżal Rolety Poznań',
      url: 'https://dezalroletypoznan.pl',
    },
    publisher: {
      name: 'Deżal Rolety Poznań',
      logo: 'https://dezalroletypoznan.pl/images/logo-rect.png',
    },
  }),
]);
</script>

<style lang="scss">
@use './[slug].scss' as *;
</style>
