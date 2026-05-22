div
<template>
  <div v-if="data" class="ArticleMain__page-container">
    <div class="ArticleMain__center-container">
      <img
        v-if="data.img"
        :src="data.img"
        alt=""
        class="ArticleMain__image-header"
        fetchpriority="high"
      />
      <!--
      <div class="ArticleMain__actor-container">
        <img
          :src="data.actor_img"
          class="ArticleMain__actor-img"
          alt="actor avatar"
        />
        <div class="ArticleMain__actor-column">
          <div class="ArticleMain__actor-name">
            {{ data.actor }}
          </div>
          <div class="ArticleMain__actor-label">
            {{ data.actor_label }}
          </div>
        </div>
        <div class="ArticleMain__actor-column-right">
          <div class="ArticleMain__actor-date">
            {{ data.date }}
          </div>
          <div class="ArticleMain__actor-row">
            <div v-for="tag in data.tags" class="ArticleMain__actor-tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div> -->

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
  </div>
  <div v-else-if="error">
    <p>Wystąpił błąd podczas ładowania artykułu.</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data;
}>();
</script>

<style lang="scss" scoped>
@use './main.scss' as *;
</style>
