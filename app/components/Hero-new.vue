<template>
  <header id="hero" class="Hero__main-container">
    <div class="Hero__center-container">
      <div class="Hero__left-container">
        <div class="Hero__label">
          <img
            src="/icons/dot-yellow-full.svg"
            alt="icon dot"
            class="Hero__dot"
          />Znajdź to czego naprawdę potrzebujesz
          <img
            src="/icons/dot-yellow-full.svg"
            alt="icon dot"
            class="Hero__dot"
          />
        </div>
        <h1 class="Hero__title">Nadaj swojemu mieszkaniu nowy charakter</h1>
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
        <NuxtImg
          src="/images/hero/1.webp"
          alt="Nowoczesne rolety i żaluzje na wymiar do salonu - Deżal Poznań"
          class="Hero__image-1"
          fetchpriority="high"
          preload
          width="800"
          height="645"
          format="webp"
          sizes="sm:100vw md:50vw lg:700px"
          title="Osłony okienne na wymiar Poznań"
        />

        <NuxtImg
          src="/images/hero/2.webp"
          alt="Eleganckie plisy okienne w domu jednorodzinnym - Deżal Poznań"
          class="Hero__image-2"
          fetchpriority="high"
          preload
          width="800"
          height="645"
          format="webp"
          sizes="sm:100vw md:50vw lg:700px"
          title="Plisy okienne Poznań"
        />

        <NuxtImg
          src="/images/hero/3.webp"
          alt="Funkcjonalne rolety dzień-noc i moskitiery - Deżal Poznań"
          class="Hero__image-3"
          fetchpriority="high"
          preload
          width="800"
          height="645"
          format="webp"
          sizes="sm:100vw md:50vw lg:700px"
          title="Rolety i moskitiery Poznań"
        />
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
