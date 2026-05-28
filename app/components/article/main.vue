<template>
  <div v-if="data" class="ArticleMain__page-container">
    <img
      v-if="data.img"
      :src="data.img"
      alt=""
      class="ArticleMain__image-header"
      fetchpriority="high"
    />
    <div class="ArticleMain__column">
      <div class="ArticleMain__center-container">
        <h1 class="ArticleMain__title">{{ data.title }}</h1>
        <div class="ArticleMain__content">
          <div v-for="(item, index) in data.content" :key="index">
            <h2
              v-if="item.type === 'section_title'"
              class="ArticleMain__section-title"
            >
              {{ item.content }}
            </h2>

            <h3
              v-if="item.type === 'subsection_title'"
              class="ArticleMain__subsection-title"
            >
              {{ item.content }}
            </h3>

            <p v-if="item.type === 'paragraph'" class="ArticleMain__paragraph">
              <template
                v-for="(segment, segmentIndex) in item.content"
                :key="segmentIndex"
              >
                <span v-if="segment.type === 'text'">{{ segment.value }}</span>
                <strong v-if="segment.type === 'bold'">{{
                  segment.value
                }}</strong>
                <a
                  v-if="segment.type === 'link'"
                  :href="segment.url"
                  target="_blank"
                >
                  {{ segment.value }}
                </a>
              </template>
            </p>
            <ArticleAsset
              v-if="item.type === 'asset'"
              :item="item"
              :key="item.content.src"
            />
            <ArticleTable v-if="item.type === 'table'" :item="item" />
            <ArticleList v-if="item.type === 'list'" :item="item" />
            <ArticleButton v-if="item.type === 'button'" :item="item" />
          </div>
        </div>
      </div>

      <aside class="ArticleMain__sidebar">
        <h2>Popularne artykuły</h2>
        <ul>
          <li v-for="(article, index) in suggestedArticles" :key="index">
            <NuxtLink :to="`/wiedza/${article.slug}`">
              <div class="ArticleMain__sidebar-image-wrapper">
                <img
                  :src="article.url"
                  alt=""
                  class="ArticleMain__sidebar-image"
                />
              </div>
              <div class="ArticleMain__sidebar-text-container">
                {{ article.title }}
                <div class="ArticleMain__arrow-box">
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    class="ArticleMain__arrow-icon"
                  />
                </div></div
            ></NuxtLink>
          </li>
        </ul>
      </aside>
    </div>
  </div>

  <div v-else>
    <p>Wystąpił błąd podczas ładowania artykułu.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // 1. Importujemy useRoute
import articles from '~/assets/content/articles.json';

const props = defineProps<{
  data: any;
}>();

// 2. Inicjalizujemy route, aby mieć dostęp do parametrów z paska adresu
const route = useRoute();

const suggestedArticles = computed(() => {
  if (!articles) return [];

  // Pobieramy aktualny slug z adresu (nazwa parametru zależy od nazwy Twojego pliku, zakładam, że to [slug].vue)
  const currentSlug = route.params.slug;

  return (
    articles
      // 3. Porównujemy slug z listy ze slugiem z adresu URL
      .filter((article) => article.slug !== currentSlug)
      // Pobieramy tylko 3 pierwsze
      .slice(0, 3)
  );
});
</script>

<style lang="scss" scoped>
@use './main.scss' as *;
</style>
