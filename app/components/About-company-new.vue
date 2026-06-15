<template>
  <div id="aboutCompany" class="AboutCompany__main-container">
    <div class="AboutCompany__center-container">
      <img
        loading="lazy"
        src="/icons/subtract.svg"
        alt=""
        class="AboutCompany__right-icon"
      />
      <img
        loading="lazy"
        src="/icons/subtract.svg"
        alt=""
        class="AboutCompany__left-icon"
      />
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
        <NuxtImg
          src="/images/about3.webp"
          class="AboutCompany__image"
          alt="Żaluzje - nowoczesne systemy osłonowe Deżal"
          loading="lazy"
          width="440"
          height="660"
          format="webp"
          sizes="sm:300px md:350px lg:440px"
        />
        <div class="AboutCompany__white-box">
          <h2 class="AboutCompany__big-text">
            2 lata <br />
            gwarancji
          </h2>
          <div class="AboutCompany__small-text">przy naszym montażu</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss">
@use './About-company-new.scss' as *;
</style>
