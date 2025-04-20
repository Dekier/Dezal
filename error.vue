<template>
  <div class="ErrorPage__main-container">
    <h1 v-if="error.statusCode === 404" class="ErrorPage__text">
      Przepraszamy. Nie ma takiej strony
    </h1>
    <h1 v-else class="ErrorPage__text">Ups... coś poszło nie tak</h1>
    <NuxtLink class="ErrorPage__link" to="/"
      >Przejdź do strony głównej</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{ error: { statusCode: number } }>();
</script>

<style scoped lang="scss">
// @use './error.scss' as *;
.ErrorPage__main-container {
  background: red;
}
</style>
