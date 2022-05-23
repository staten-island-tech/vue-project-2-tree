<template>
    <div class="carr">
        <h2 class="title">{{ title }}</h2>
        <img class="image" v-bind:src=image alt="image">
        <router-link class="add-btn">View Post</router-link>
    </div>
    </template>

<script>
import { useRouter } from "vue-router";
import { getDatabase, ref, onValue } from "firebase/database";
import { useStore } from "vuex";
export default {
    props: {
        title:String,
        image:String,
    },
    setup() {
    const store = useStore();
    const db = getDatabase();
    const router = useRouter();
    function goTo(id) {
      console.log("working");
      let idRef = id.id;
      const blog = ref(db, "recipe/" + idRef);
      onValue(blog, (snapshot) => {
        const data = snapshot.val();
        store.commit("view", data);
      });
      router.push("/BlogView");
    }
    return { goTo };
  },
};
</script>

