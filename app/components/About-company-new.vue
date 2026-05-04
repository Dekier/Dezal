<template>
  <div id="aboutCompany" class="AboutCompany__main-container">
    <div class="AboutCompany__center-container">
      <div class="AboutCompany__left-container">
        <img
          src="/icons/logo.svg"
          class="AboutCompany__logo"
          alt="logo dezal"
        />
        <p class="AboutCompany__description">
          Jesteśmy małą rodzinną Polską firmą założoną w 1997 roku w Poznaniu.
          <br /><br />
          Staramy się doradzić jak najlepsze rozwiązanie do danego wnętrza tak,
          aby było niepowtarzalne, a klient był usatysfakcjonowany.
        </p>
      </div>
      <div class="AboutCompany__right-container">
        <!-- <img src="/images/about.png" class="AboutCompany__image" alt="" /> -->
        <NuxtImg
          src="/images/about.png"
          alt="Żaluzje - nowoczesne systemy osłonowe Deżal"
          width="439"
          height="660"
          class="AboutCompany__image"
          loading="lazy"
          format="webp"
          sizes="sm:100vw md:50vw lg:439px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss">
@use './About-company-new.scss' as *;
</style>
