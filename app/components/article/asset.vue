<template>
  <div class="Asset__main-container" ref="assetContainer">
    <div class="Asset__center-container">
      <img
        v-if="item.content.type === 'image'"
        :src="item.content.src"
        :alt="item.content.alt"
        class="Asset__image"
        loading="lazy"
      />
      <video
        v-if="item.content.type === 'video'"
        ref="videoPlayer"
        class="Asset__video"
        :src="item.content.src"
        autoplay
        muted
        loop
        playsinline
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps<{
  item;
}>();

const videoPlayer = ref<HTMLVideoElement | null>(null);
const assetContainer = ref<HTMLElement | null>(null);

const playVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.play().catch((error) => {
      console.warn('Video play was prevented:', error);
    });
  }
};

const pauseVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause();
  }
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (props.item.content.type === 'video' && assetContainer.value) {
    const options = {
      root: null, // Obserwacja względem viewportu
      threshold: 0.5, // Uruchom, gdy 50% elementu jest widoczne
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      });
    }, options);

    observer.observe(assetContainer.value);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
@use './asset.scss' as *;
</style>
