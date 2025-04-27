<template>
  <div class="ErrorPage__main-container">
    <h1 class="ErrorPage__text">Przepraszamy. Nie ma takiej strony.</h1>
    <NuxtLink class="ErrorPage__link" to="/"
      >Przejdź do strony głównej</NuxtLink
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use './404.scss' as *;
</style>
