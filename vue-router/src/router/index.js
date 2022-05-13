import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import CreateView from "../views/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/SignupView",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/LoginView",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/CreatePost",
    name: "CreateView",
    component: CreateView,
  },
  {
    path: "/Log-In",
    name: "Log In",
    component: function () {
      return import("../views/LoginView.vue");
    },
    meta: {
      title: "Signup",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
