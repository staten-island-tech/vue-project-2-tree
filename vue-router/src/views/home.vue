<template>
  <div class="hom">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <h1 class="welcome-class" v-if="user === null">Welcome Guest User! Please Sign Up/Log In to create your own blogposts.</h1>
      <h1 class="welcome-class" v-if="user !== null">Welcome, {{ user.email }}! Check out today's blogposts! </h1>
      <div class="home">
    <Card 
    v-for="blog in blogs" 
    :key="blog.id"
    :id="blog.id"
    :title="blog.title"
    :image="blog.cover"
    :text="blog.content"
    :author="blog.author"/>
      </div>

</div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { getDatabase, ref, onValue } from "firebase/database"
import { useStore } from 'vuex'
// import { collection, getDocs } from "firebase/firestore";
// import bColRef from "../firebase/config.js";
import Card from "../components/UserCard.vue";
import {onMounted, computed} from "vue"

export default {
  name: 'HomeView',
  components: {
    Card
  },
    setup() {
    const db = getDatabase();
    const blogRef = ref(db, "blogs/");
    const store = useStore();
    onMounted(() => {
      store.commit("erase"); 
      onValue(blogRef, (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          const childData = childSnapshot.exportVal();
          store.dispatch("getSong", childData);
        });
      });
    });

    return { blogs: computed(() => store.state.song), Card,
    user: computed(() => store.state.user)
    };
  },

}
</script>

<style>
.welcome-class {
  font-family: "Sora", sans-serif;
  font-weight: 700;
  color: #ffffff;
  font-size: 2rem;
  margin: 1rem auto;
}
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>