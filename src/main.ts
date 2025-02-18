import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue, { defaultOptions } from "primevue/config";
import Menubar from "primevue/menubar";
// import { StyleClass } from "primevue/styleclass";

import "./assets/main.scss";
import "primeicons/primeicons.css";
import "./assets/theme.css";
import locale from "./assets/locale/ru.json";

//in main.js
// import "primevue/resources/themes/aura-light-green/theme.css";

import "primeicons/primeicons.css"; // Иконки

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  ripple: true,
  locale: {
    ...defaultOptions,
    ...locale.ru,
  },
}); // app.directive("styleclass", StyleClass);
app.component("Menubar", Menubar);
app.mount("#app");
