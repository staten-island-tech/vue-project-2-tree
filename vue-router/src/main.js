import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//global styles
import "./assets/main.css";
import "./assets/SignUp.css";
import "./assets/LogIn.css";
createApp(App).use(store).use(router).mount("#app");
