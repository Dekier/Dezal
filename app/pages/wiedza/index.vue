<template>
  <div class="Blog__main-container">
    <div class="Blog__center-container">
      <div class="Blog__header">
        <h1 class="Blog__title">Wiedza i poradniki</h1>
        <p class="Blog__subtitle">
          Odkryj porady ekspertów i wybierz idealne osłony dla swojego domu.
        </p>
      </div>

      <div class="Blog__list">
        <nuxt-link
          v-for="article in articles"
          :key="article.slug"
          :to="`/wiedza/${article.slug}`"
          class="Blog__card"
        >
          <div class="Blog__image-wrapper">
            <img
              :src="article.url"
              :alt="article.title"
              class="Blog__image"
              loading="lazy"
            />
          </div>
          <div class="Blog__content">
            <h2 class="Blog__card-title">{{ article.title }}</h2>
            <p class="Blog__card-description">{{ article.description }}</p>
            <div class="Blog__read-more">
              <span>czytaj artykuł</span>
              <div class="Blog__arrow-box">
                <img
                  src="/icons/arrow.svg"
                  alt="arrow"
                  class="Blog__arrow-icon"
                />
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>

      <ArticleFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import articles from '~/assets/content/articles.json';

useHead({
  title: 'Wiedza i poradniki o roletach, żaluzjach, plisach',
  meta: [
    {
      name: 'description',
      content:
        'Zbiór praktycznych porad dotyczących wyboru, montażu i czyszczenia rolet, żaluzji i plis okiennych.',
    },
  ],
});
</script>

<style lang="scss">
@use './index.scss' as *;
</style>
