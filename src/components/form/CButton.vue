<template>
  <button class="rounded-md mt-1">
    <slot name="prefix"></slot>
    <slot name="suffix"></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {

}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
