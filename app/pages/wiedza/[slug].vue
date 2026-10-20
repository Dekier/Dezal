<template>
  <div class="ArticlePage" ref="articlePageRef">
    <ArticleMain :data="articleData" />
  </div>
</template>

<script lang="ts" setup>
import type { ArticleData } from '#shared/types/article';

definePageMeta({
  layout: 'articles',
});

const route = useRoute();
const slug = (route.params.slug as string).replace('.json', '');

const articles = import.meta.glob<ArticleData>(
  '~/assets/content/articles/*.json',
  { import: 'default' }
);
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

const articleData = await articles[articleKey]();
const siteUrl = useRuntimeConfig().public.siteUrl;
const canonicalUrl = new URL(`/wiedza/${slug}`, siteUrl).href;
const imageUrl = new URL(
  articleData.img || '/images/logo-rect-2.webp',
  siteUrl
).href;

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
});

useSeoMeta({
  title: articleData.title,
  description: articleData.meta_description,
  ogTitle: `${articleData.title} | DEŻAL`,
  ogDescription: articleData.meta_description,
  ogType: 'article',
  ogUrl: canonicalUrl,
  ogLocale: 'pl_PL',
  ogImage: imageUrl,
  ogImageAlt: articleData.img_alt || articleData.title,
  ogImageWidth: articleData.img_width,
  ogImageHeight: articleData.img_height,
  articlePublishedTime: articleData.datePublished,
  articleModifiedTime: articleData.dateModified,
});

if (articleData.datePublished) {
  useSchemaOrg([
    defineArticle({
      '@type': 'Article',
      headline: articleData.title,
      description: articleData.meta_description,
      url: canonicalUrl,
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: articleData.img_width,
        height: articleData.img_height,
        caption: articleData.img_alt || articleData.title,
      },
      datePublished: articleData.datePublished,
      dateModified: articleData.dateModified,
      author: {
        '@type': 'Organization',
        name: articleData.actor,
        url: siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'DEŻAL',
        url: siteUrl,
        logo: new URL('/images/logo-rect-2.webp', siteUrl).href,
      },
      inLanguage: 'pl-PL',
      keywords: articleData.tags,
      isAccessibleForFree: true,
    }),
  ]);
}
</script>

<style lang="scss">
@use './[slug].scss' as *;
</style>
