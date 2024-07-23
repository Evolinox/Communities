import './assets/main.css'
import { createApp } from "vue";
import router from "./router.js";
import socket from "./websocket.js";
import App from "./App.vue";

createApp(App).use(router).use(socket).mount("#app");
