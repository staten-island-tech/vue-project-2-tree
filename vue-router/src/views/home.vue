<template>
  <div class="home">
    <Card 
    v-for="blog in blogs" 
    :key="blog.id"
    :title="blog.title"
    :image="blog.cover"
    :text="blog.content"/>
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
          store.dispatch("getRecipe", childData);
        });
      });
    });

    return { blogs: computed(() => store.state.song), Card };
  },

}
</script>
