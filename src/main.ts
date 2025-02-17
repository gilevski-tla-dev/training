import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";

import "primeicons/primeicons.css"; // Иконки

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component("Menubar", Menubar);
app.mount("#app");
