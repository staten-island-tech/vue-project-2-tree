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
    authIsReady: false,
    imgPreview: null,
    redirectSong: [],
    title: [],
    content: [],
    writeSong: [],
    viewSong: [],
    updateSong: [],
    useerSong: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
    erase(state) {
      state.song = [];
      state.writeSong = [];
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    recipeRef(state, payload) {
      let isFound = state.song.some((e) => {
        if (e.id === payload.id) {
          return true;
        }
      });

      if (isFound === false) {
        state.song.push(payload);
      }
      // console.log(payload);
      console.log(state.song);
    },
    imgprv(state, payload) {
      state.imgPreview = payload;
    },
    redirect(state, payload) {
      state.redirectSong = payload;
      console.log(state.redirectSong);
    },
    view(state, payload) {
      state.viewSong = payload;
    },
    userSong(state, payload) {
      const usong = state.useerSong.some((e) => {
        if (e.id === payload.id) {
          return true;
        }
      });
      if (usong === false) {
        state.useerSong.push(payload);
      }
      console.log(state.useerSong);
    },
    write(state, payload) {
      state.writeSong = payload;
    },
    titleName(state, payload) {
      state.writeSong.title = payload;
    },
    descriptionName(state, payload) {
      state.writeSong.content = payload;
    },
    imgName(state, payload) {
      state.writeSong.img = payload;
    },
    update(state, payload) {
      state.updateSong = payload;
    },
    updateSongImg(state, payload) {
      state.updateSong.img = payload;
    },
    updateTitle(state, payload) {
      state.updateSong.title = payload;
    },
    updateCover(state, payload) {
      state.updateSong.cover = payload;
    },
    updateText(state, payload) {
      state.updateSong.content = payload;
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
    async getSong(context, data) {
      context.commit("recipeRef", data);
      // console.log("got recipe");
    },
    async songData(context, data) {
      if (data.author === this.state.user.email) {
        context.commit("userSong", data);
        console.log("working");
        console.log(data);
      }
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
