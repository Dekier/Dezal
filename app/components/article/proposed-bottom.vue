<template>
  <div class="ProposedBottom__main-container">
    <h2 class="ProposedBottom__main-title">Zobacz również:</h2>
    <div class="ProposedBottom__items">
      <NuxtLink
        :to="data.slug"
        v-for="data in filteredArticles"
        class="ProposedBottom__item-container"
      >
        <div class="ProposedBottom__image-container">
          <img
            v-if="data.url"
            :src="data.url"
            alt=""
            class="ProposedBottom__image-header"
            fetchpriority="low"
          />
        </div>

        <p class="ProposedBottom__item-title">{{ data.title }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug as string;

// 1. Pobieranie listy wszystkich artykułów
const { data: articles, error: listError } = await useFetch('/api/articles');

if (listError.value) {
  console.error('Nie udało się załadować listy artykułów.');
}

// 2. Tworzenie przefiltrowanej listy za pomocą `computed`
const filteredArticles = computed(() => {
  // Sprawdzamy, czy `articles.value` istnieje i jest tablicą
  if (!articles.value || !Array.isArray(articles.value)) {
    return []; // Jeśli nie, zwracamy pustą tablicę, aby uniknąć błędów
  }

  // Zwracamy nową tablicę, zawierającą tylko te artykuły,
  // których `slug` jest INNY niż `slug` bieżącego artykułu.
  return articles.value.filter((article) => article.slug !== slug);
});

// Teraz w szablonie <template> możesz używać `filteredArticles`
// do wyświetlenia listy proponowanych postów bez duplikatu.
</script>

<style lang="scss" scoped>
@use './proposed-bottom.scss' as *;
</style>
