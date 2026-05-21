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
            <p class="Questions__answer">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definiujemy interfejs dla pojedynczego pytania i odpowiedzi
export interface FaqItem {
  question: string;
  answer: string;
}

// Rozszerzamy propsy o listę FAQ
const props = defineProps<{
  title: string;
  faqList: FaqItem[];
}>();

// Stan przechowujący indeks aktualnie otwartego elementu
const activeIndex = ref<number | null>(null);

const toggleItem = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null; // Zamknij, jeśli kliknięto ponownie
  } else {
    activeIndex.value = index; // Otwórz
  }
};
</script>
<style lang="scss">
@use './Questions.scss' as *;
</style>
