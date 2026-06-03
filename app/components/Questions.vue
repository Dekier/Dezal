<template>
  <div class="Questions__main-container">
    <div class="Questions__center-container">
      <h3 class="Questions__title">{{ props.title }}</h3>

      <div class="Questions__list">
        <div
          v-for="(item, index) in props.faqList"
          :key="index"
          class="Questions__item"
          :class="{ 'Questions__item--active': activeIndex === index }"
          @click="toggleItem(index)"
        >
          <h4 class="Questions__question">
            {{ item.question }}
            <img
              src="/icons/arrow-down-black.svg"
              class="Questions__icon"
              alt="arrow icon"
            />
          </h4>

          <div class="Questions__answer-wrapper">
            <!--
              KROK 1: Pakujemy wszystko w jeden wspólny div,
              dzięki czemu animacja Grid 0fr -> 1fr znowu działa idealnie
            -->
            <div class="Questions__answer-inner">
              <p class="Questions__answer">
                {{ item.answer }}
              </p>

              <!-- KROK 2: Dodajemy @click.stop, aby kliknięcie w link nie zwijało akordeonu -->
              <nuxt-link
                v-if="item.article_url"
                :to="item.article_url"
                class="Questions__read-more"
                @click.stop
              >
                <span>przejdź do artykułu</span>
                <div class="Questions__arrow-box">
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    class="Questions__arrow-icon"
                  />
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface FaqItem {
  question: string;
  answer: string;
  article_url?: string; // <-- Dodajemy opcjonalny parametr do typu TypeScript
}

const props = defineProps<{
  title: string;
  faqList: FaqItem[];
}>();

const activeIndex = ref<number | null>(null);

const toggleItem = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>

<style lang="scss">
@use './Questions.scss' as *;
</style>
