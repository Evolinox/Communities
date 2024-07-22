import './assets/main.css'
import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";

const port = "3000";
const url = "ws://localhost";
const socket = new WebSocket(url + ":" + port);

createApp(App).use(router).mount("#app");
