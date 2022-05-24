import { createStore } from "vuex";

// firebase imports
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    song: [],
    imgPreview: null,
    redirectSong: null,
    title: [],
    content: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
    erase(state) {
      state.title = [];
      state.content = [];
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    recipeRef(state, payload) {
      let isFound = state.song.some((e) => {
        if (
          e.id === payload.id /* &&
          e.instructionsRecipe === payload.instructionsRecipe &&
          e.img === payload.img &&
          e.ingredientsRecipe === payload.ingredientsRecipe &&
          e.descsRecipe === payload.descsRecipe */
        ) {
          return true;
        }
      });

      if (isFound === false) {
        state.song.push(payload);
        /* if (isFound.id === payload.id) {
          let index = state.recipe.indexOf(isFound);
          state.recipe.splice(index, 1, payload);
          console.log("yes");
        }
        if (isFound.id !== payload.id) {
          console.log("no");
          
        } */
      }

      console.log(payload);
      // console.log("recipe in store", state.recipe);
    },
    imgprv(state, payload) {
      state.imgPreview = payload;
    },
    redirect(state, payload) {
      state.redirectSong = payload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log("signup action");
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete signup");
      }
    },
    async login(context, { email, password }) {
      console.log("login action");

      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },
    async logout(context) {
      console.log("logout action");

      await signOut(auth);
      context.commit("setUser", null);
    },
    async getRecipe(context, data) {
      context.commit("recipeRef", data);
    },
  },
});
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});
// export the store
export default store;
