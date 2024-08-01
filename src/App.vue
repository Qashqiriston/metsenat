<script setup>
import TheAuth from "@/layouts/TheAuth.vue";
import TheDefault from "@/layouts/TheDefault.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const layouts = {
  auth: TheAuth,
  default: TheDefault,
};
const activeLayout = computed(() => {
  return layouts[route.meta.layout ?? "default"];
});
</script>

<template>
  <component :is="activeLayout">
    <RouterView />

    <VueRecaptcha
      sitekey="6LcIMaYpAAAAANkcV3TejOufRic9HZV4mVdA3hK6"
    ></VueRecaptcha>
  </component>
</template>