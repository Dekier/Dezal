<template>
  <div class="Button__main-container">
    <a
      :href="item.content.btn_link"
      class="Button__link"
      :class="`Button__link--${item.content.type}`"
    >
      {{ item.content.btn_text }}
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item;
}>();
</script>

<style lang="scss" scoped>
@use './button.scss' as *;
</style>
