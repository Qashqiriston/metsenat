import "./assets/style.css";
import "./assets/font/stylesheet.css";
import router from "./router/index";
import VueApexCharts from "vue3-apexcharts";
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueAwesomePaginate);
app.use(VueApexCharts);
app.mount("#app");
