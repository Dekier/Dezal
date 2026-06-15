<template>
  <div class="MainQuestions__main-container">
    <div class="MainQuestions__background" />
    <div class="MainQuestions__center-container">
      <div class="MainQuestions__left-container">
        <h2 class="MainQuestions__title">
          Najczęściej <br />
          zadawane pytania
        </h2>
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
      <NuxtImg
        src="/images/landing/questions.webp"
        alt="Łazienka - nowoczesne systemy osłonowe Deżal"
        class="MainQuestions__image"
        loading="lazy"
        width="667"
        height="377"
        format="webp"
        sizes="sm:100vw md:450px lg:670px"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss">
@use './MainQuestions.scss' as *;
</style>
