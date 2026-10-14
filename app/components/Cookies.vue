<script setup lang="ts">
const emit = defineEmits<{ hideCookies: [accepted: boolean] }>();
</script>

<template>
  <section
    class="Cookies__main-container"
    aria-label="Ustawienia plików cookies"
  >
    <div class="Cookies__inner">
      <div class="Cookies__content">
        <h2 class="Cookies__title">Pliki cookies</h2>
        <p class="Cookies__description">
          Za Twoją zgodą używamy cookies statystycznych, aby ulepszać stronę.
          Możesz je zaakceptować lub odrzucić.
          <a
            class="Cookies__policy"
            href="/policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polityka prywatności
          </a>
        </p>
      </div>
      <div class="Cookies__actions">
        <button
          class="Cookies__btn Cookies__btn--accept"
          type="button"
          @click="emit('hideCookies', true)"
        >
          Akceptuję
        </button>
        <button
          class="Cookies__btn Cookies__btn--reject"
          type="button"
          @click="emit('hideCookies', false)"
        >
          Nie akceptuję
        </button>
      </div>
    </div>
  </section>
</template>

<style src="./Cookies.scss" lang="scss" scoped></style>
