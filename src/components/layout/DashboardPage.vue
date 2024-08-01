<template>
  <div>
    <div class="bg-[#f5f5f7]">
      <div class="pt-12">
        <Dashboard />
      </div>
      <div class="pt-7 pb-10">
        <ApexChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import Dashboard from "@/components/layout/Dashboard.vue";
import ApexChart from "@/components/layout/ApexChart.vue";
</script>

<style lang="scss" scoped></style>
