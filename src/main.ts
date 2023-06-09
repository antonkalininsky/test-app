import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";

import { createPinia } from "pinia";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import "./assets/stylesheets/global.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);
app.use(router);
app.mount("#app");
