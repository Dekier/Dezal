<template>
  <div class="MainQuestions__main-container">
    <div class="MainQuestions__background" />
    <div class="MainQuestions__center-container">
      <div class="MainQuestions__left-container">
        <h3 class="MainQuestions__title">
          Najczęściej <br />
          zadawane pytania
        </h3>
        <nuxt-link
          to="/wiedza/czyszczenie-poradnik"
          class="MainQuestions__link"
        >
          <img
            src="/icons/dot-yellow-full.svg"
            alt="icon dot"
            class="MainQuestions__link-dot"
          /><span>Jak prawidłowo czyścić rolety, żaluzje i plisy?</span>
          <div class="MainQuestions__btn-arrow-box">
            <img
              src="/icons/arrow.svg"
              alt="icon arrow"
              class="MainQuestions__btn-arrow-icon"
            />
          </div>
        </nuxt-link>
        <div class="MainQuestions__line" />
        <nuxt-link
          to="/wiedza/czyszczenie-poradnik"
          class="MainQuestions__link"
        >
          <img
            src="/icons/dot-yellow-full.svg"
            alt="icon dot"
            class="MainQuestions__link-dot"
          /><span>Co najlepiej zatrzymuje światło?</span>
          <div class="MainQuestions__btn-arrow-box">
            <img
              src="/icons/arrow.svg"
              alt="icon arrow"
              class="MainQuestions__btn-arrow-icon"
            />
          </div>
        </nuxt-link>
      </div>
      <!-- <img
        src="/images/landing/questions.webp"
        alt="Lazienka - nowoczesne systemy osłonowe Deżal"
        class="MainQuestions__image"
      /> -->
      <picture>
        <source
          srcset="/images/landing/questions.webp"
          media="(min-width: 950px)"
          type="image/webp"
        />
        <img
          src="/images/landing/questions.webp"
          alt="Łazienka - nowoczesne systemy osłonowe Deżal"
          class="MainQuestions__image"
        />
      </picture>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss">
@use './MainQuestions.scss' as *;
</style>
