<template>
  <div>
    <header>
      <Header></Header>
    </header>

    <slot></slot>
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
</script>

<style lang="scss" scoped></style>
