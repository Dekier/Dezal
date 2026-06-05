<template>
  <div class="ListOfArticles__main-container">
    <div class="ListOfArticles__center-container">
      <div class="ListOfArticles__header">
        <h2 class="ListOfArticles__title">Wiedza i poradniki</h2>
      </div>

      <div class="ListOfArticles__list">
        <nuxt-link
          v-for="article in articles"
          :key="article.slug"
          :to="`/wiedza/${article.slug}`"
          class="ListOfArticles__card"
        >
          <div class="ListOfArticles__image-wrapper">
            <img
              :src="article.url"
              :alt="article.title"
              class="ListOfArticles__image"
              loading="lazy"
            />
          </div>
          <div class="ListOfArticles__content">
            <h3 class="ListOfArticles__card-title">{{ article.title }}</h3>
            <p class="ListOfArticles__card-description">
              {{ article.description }}
            </p>
            <div class="ListOfArticles__read-more">
              <span>czytaj artykuł</span>
              <div class="ListOfArticles__arrow-box">
                <img
                  src="/icons/arrow.svg"
                  alt="arrow"
                  class="ListOfArticles__arrow-icon"
                />
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <nuxt-link to="/wiedza" class="ListOfArticles__box-btn"
        >zobacz wszystkie poradni
        <div class="ListOfArticles__btn-arrow-box">
          <img
            src="/icons/arrow.svg"
            alt="icon arrow"
            class="ListOfArticles__btn-arrow-icon"
          /></div
      ></nuxt-link>

      <ArticleFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  articles: Array<{
    title: string;
    url: string;
    slug: string;
    description: string;
  }>;
}>();
</script>

<style lang="scss">
@use './List-of-articles.scss' as *;
</style>
