<template>
  <div>
    <header>
      <Header></Header>
      <PagesChange></PagesChange>
    </header>

    <slot></slot>
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
import PagesChange from "@/components/layout/PagesChange.vue";
</script>