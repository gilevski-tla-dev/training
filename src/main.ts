import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue, { defaultOptions } from "primevue/config";
import Menubar from "primevue/menubar";

import "./assets/main.scss";
import "primeicons/primeicons.css";
import "./assets/theme.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  ripple: true,
  locale: {
    ...defaultOptions,
  },
});
app.component("Menubar", Menubar);
app.mount("#app");
