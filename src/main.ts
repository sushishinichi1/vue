import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { worker } from "./mocks/browser";
import router from "./router";
const app = createApp(App);

app.use(router);

if (process.env.NODE_ENV === "development") {
  worker.start();
}

app.mount("#app");
