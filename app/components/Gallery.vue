<template>
  <div class="Gallery__main-container" @click.self="emit('exit')">
    <div
      ref="dialogRef"
      class="Gallery__dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria zdjęć realizacji"
    >
      <div class="Gallery__top-bar">
        <p class="Gallery__counter">
          Zdjęcie
          <strong class="Gallery__counter-current">{{ index + 1 }}</strong>
          z {{ images.length }}
        </p>
        <button
          ref="closeButtonRef"
          type="button"
          class="Gallery__close-button"
          aria-label="Zamknij galerię"
          @click="emit('exit')"
        >
          <span class="Gallery__close-label">Zamknij</span>
          <img
            src="/icons/exit.svg"
            alt=""
            aria-hidden="true"
            class="Gallery__close-icon"
          />
        </button>
      </div>

      <div
        class="Gallery__stage"
        @touchstart.passive="handleTouchStart"
        @touchend.passive="handleTouchEnd"
      >
        <button
          v-if="images.length > 1"
          type="button"
          class="Gallery__nav-button Gallery__nav-button--previous"
          aria-label="Poprzednie zdjęcie"
          @click="emit('beforeImage')"
        >
          <img
            src="/icons/arrow-right.svg"
            alt=""
            aria-hidden="true"
            class="Gallery__nav-icon Gallery__nav-icon--previous"
          />
        </button>

        <div class="Gallery__image-frame">
          <img
            v-if="currentImage"
            :src="currentImage.url"
            :alt="currentImage.alt || `Realizacja DEŻAL – zdjęcie ${index + 1}`"
            class="Gallery__image"
          />
        </div>

        <button
          v-if="images.length > 1"
          type="button"
          class="Gallery__nav-button Gallery__nav-button--next"
          aria-label="Następne zdjęcie"
          @click="emit('nextImage')"
        >
          <img
            src="/icons/arrow-right.svg"
            alt=""
            aria-hidden="true"
            class="Gallery__nav-icon"
          />
        </button>
      </div>

      <p v-if="images.length > 1" class="Gallery__hint">
        Użyj strzałek na klawiaturze lub przesuń zdjęcie palcem.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  images: { url: string; alt?: string }[];
  index: number;
}>();

const emit = defineEmits<{
  (e: 'exit'): void;
  (e: 'beforeImage'): void;
  (e: 'nextImage'): void;
}>();

const currentImage = computed(() => props.images[props.index] ?? null);
const dialogRef = ref<HTMLElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);
let touchStartX: number | null = null;
let previousOverflow = '';
let previousActiveElement: HTMLElement | null = null;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.changedTouches[0]?.clientX ?? null;
};

const handleTouchEnd = (event: TouchEvent) => {
  if (touchStartX === null || props.images.length < 2) return;

  const touchEndX = event.changedTouches[0]?.clientX;
  if (touchEndX === undefined) return;

  const distance = touchEndX - touchStartX;
  touchStartX = null;

  if (distance > 50) emit('beforeImage');
  if (distance < -50) emit('nextImage');
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('exit');
    return;
  }

  if (props.images.length > 1 && event.key === 'ArrowLeft') {
    event.preventDefault();
    emit('beforeImage');
    return;
  }

  if (props.images.length > 1 && event.key === 'ArrowRight') {
    event.preventDefault();
    emit('nextImage');
    return;
  }

  if (event.key !== 'Tab') return;

  const buttons = dialogRef.value?.querySelectorAll<HTMLButtonElement>('button');
  if (!buttons?.length) return;

  const firstButton = buttons.item(0);
  const lastButton = buttons.item(buttons.length - 1);
  if (!firstButton || !lastButton) return;

  if (event.shiftKey && document.activeElement === firstButton) {
    event.preventDefault();
    lastButton.focus();
  } else if (!event.shiftKey && document.activeElement === lastButton) {
    event.preventDefault();
    firstButton.focus();
  }
};

onMounted(() => {
  previousOverflow = document.body.style.overflow;
  previousActiveElement = document.activeElement as HTMLElement | null;
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', handleKeydown);
  closeButtonRef.value?.focus();
});

onUnmounted(() => {
  document.body.style.overflow = previousOverflow;
  window.removeEventListener('keydown', handleKeydown);
  previousActiveElement?.focus();
});
</script>

<style scoped lang="scss">
@use './Gallery.scss' as *;
</style>
