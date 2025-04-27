<template>
  <header id="hero" class="Hero__main-container">
    <NuxtImg
      src="/images/header2.webp"
      class="Hero__hero-image"
      height="750"
      alt="dezal zdjecie tła"
    />
    <div class="Hero__hero-background" />
    <div class="Hero__center-container">
      <h1 class="Hero__title">Witamy na stronie firmy <br />DEŻAL</h1>
      <p class="Hero__description">
        Jeżeli szukasz najlepszej jakości rolet lub żaluzji, znajdziesz je
        właśnie tutaj — na poznańskim Piątkowie. Oferujemy aranżacje osłon
        okiennych, które sprawią, że Twoje wnętrze nabierze zupełnie nowego
        charakteru.
      </p>
      <div class="Hero__btns-container">
        <button type="button" class="Hero__button" @click="scrollToOferta()">
          Przejdź do Oferty
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrollToOferta = () => {
  const element = document.getElementById('offer');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
@use './Hero.scss' as *;
</style>
