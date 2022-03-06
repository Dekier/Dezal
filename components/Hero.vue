<template>
  <header id="hero" class="Hero__main-container">
    <img
      src="/image/header2.webp"
      class="Hero__hero-image"
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
        <button type="button" v-scroll-to="'#offer'" class="Hero__button">
          Przejdź do Oferty
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Hero',
});
</script>

<style lang="scss" scoped>
@import 'Hero';
</style>
