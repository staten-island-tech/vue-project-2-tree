import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import CreateView from "../views/CreatePost.vue";
import BlogPost from "../views/BlogPost.vue";
import SongCard from "../views/Song.vue";
import EditView from "../views/EditPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
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
    path: "/BlogPost",
    name: "BlogPost",
    component: BlogPost,
  },
  {
    path: "/Song",
    name: "Song",
    component: SongCard,
  },
  {
    path: "/EditPost",
    name: "EditPost",
    component: EditView,
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
