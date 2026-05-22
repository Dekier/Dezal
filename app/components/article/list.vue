<template>
  <div class="List__main-container">
    <div class="List__item" v-for="(item, index) in props.item.content.list">
      <span v-if="props.item.content.type === 'dot'" class="List__item-dot">
        •
      </span>
      <span
        v-if="props.item.content.type === 'number'"
        class="List__item-number"
      >
        {{ index + 1 }}.
      </span>
      <div class="List__right-container">
        <template v-for="(segment, segmentIndex) in item" :key="segmentIndex">
          <span v-if="segment.type === 'text'" class="List__item-text">{{
            segment.value
          }}</span>
          <strong v-if="segment.type === 'bold'" class="List__item-text-bold">{{
            segment.value
          }}</strong>
          <a
            v-if="segment.type === 'link'"
            :href="segment.url"
            target="_blank"
            class="List__item-link"
          >
            {{ segment.value }}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item;
}>();
</script>

<style lang="scss" scoped>
@use './list.scss' as *;
</style>
