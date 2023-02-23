import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import { createPinia } from "pinia";
import Sg208Button from "sg208-button";
import "sg208-button/dist/style.css";

const app = createApp(App);

// Add all the plugins here, which used to be Vue.use(plugin)
const plugins = [router, createPinia(), Sg208Button];
// Loading all the plugins via this loop
plugins.forEach((plugin) => app.use(plugin));

app.mount("#app");
