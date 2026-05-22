<template>
  <div class="Table__main-container">
    <div class="Table__center-container">
      <div class="Table__rows" v-for="item in props.item.content.rows">
        <div
          class="Table__item"
          v-for="(data, index) in item"
          :class="{ 'Table__item--bold': data.bold }"
          :style="`width: ${props.item.content.rows_sizes[index]}%`"
        >
          <span v-if="!data.url">
            {{ data.text }}
          </span>
          <a v-else-if="data.url" :href="data.url" target="_blank">
            {{ data.text }}
          </a>
        </div>
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
@use './table.scss' as *;
</style>
