<template>
  <div class="bg-[#f5f5f7]">
    <div class="container">
      <div class="apex">
        <div id="chart">
          <apexchart
            type="line"
            height="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
const series = [
  {
    name: "Sponsors",
    data: [10, 41, 35, 51, 34, 89, 119, 161, 178],
  },
  {
    name: "Students",
    data: [20, 45, 55, 115, 80, 75, 60, 120, 130],
  },
];

const chartOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Homiylar va talabalar soni",
    align: "left",
    style: {
      color: "rgb(46, 56, 77)",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "28px",
    },
  },

  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  colors: ["#FF92AE", "#4C6FFF"],
};
</script>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    return {
      series,
      chartOptions,
    };
  },
});
</script>

<style scoped>
.apex {
  box-sizing: border-box;
  border: 1px solid rgba(46, 91, 255, 0.08);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 24px;
}
.cost_box {
  box-sizing: border-box;
  border: 1px solid rgba(46, 91, 255, 0.08);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 24px 0;
  padding-left: 24px;
  width: 381px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.cost_box:hover {
  transform: scale(1.08);
  transition: 0.5s linear;
}
ul,
li {
  list-style: none;
}

.cost_title {
  color: rgb(122, 122, 157);
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  margin-bottom: 6px;
}
.cost_text {
  color: rgb(46, 56, 77);
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
}
.cost_uzs {
  color: rgb(178, 183, 193);
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
}
.cost_wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
}
.space {
  margin-bottom: 48px;
  opacity: 0;
}
</style>
