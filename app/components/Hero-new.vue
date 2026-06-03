<template>
  <header id="hero" class="Hero__main-container">
    <div class="Hero__center-container">
      <div class="Hero__left-container">
        <h1 class="Hero__label">
          <img
            src="/icons/dot-yellow-full.svg"
            alt="icon dot"
            class="Hero__dot"
          />
          Rolety, Żaluzje, Plisy Poznań | DEŻAL
          <img
            src="/icons/dot-yellow-full.svg"
            alt="icon dot"
            class="Hero__dot"
          />
        </h1>
        <h2 class="Hero__title">Nadaj swojemu mieszkaniu nowy charakter</h2>
        <p class="Hero__description">
          Dopasujemy idealne rozwiązanie do Twoich okien. Połączenie naturalnych
          materiałów z bogatą paletą barw pozwoli nam stworzyć niepowtarzalny
          klimat w Twoim domu.
        </p>
        <button type="button" class="Hero__button" @click="scrollToOferta()">
          poznaj pełną ofertę
          <div class="Hero__btn-arrow-box">
            <img
              src="/icons/arrow.svg"
              alt="icon arrow"
              class="Hero__btn-arrow-icon"
            />
          </div>
        </button>
      </div>
      <div class="Hero__right-container">
        <picture>
          <source
            srcset="/images/hero/1.webp"
            media="(min-width: 600px)"
            type="image/webp"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="Nowoczesne rolety i żaluzje na wymiar do salonu - Deżal Poznań"
            class="Hero__image-1"
            fetchpriority="high"
          />
        </picture>

        <picture>
          <source
            srcset="/images/hero/2.webp"
            media="(min-width: 1024px)"
            type="image/webp"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="Eleganckie plisy okienne w domu jednorodzinnym - Deżal Poznań"
            class="Hero__image-2"
          />
        </picture>

        <picture>
          <source
            srcset="/images/hero/3.webp"
            media="(min-width: 1024px)"
            type="image/webp"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="Funkcjonalne rolety dzień-noc i moskitiery - Deżal Poznań"
            class="Hero__image-3"
          />
        </picture>
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
@use './Hero-new.scss' as *;
</style>
