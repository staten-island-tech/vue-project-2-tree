<template>
  <div class="home">
    <Card/>
</div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { getDatabase, ref, onValue } from "firebase/database"
import { useStore } from 'vuex'
import { collection, getDocs } from "firebase/firestore";
import bColRef from "../firebase/config.js";
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
    let list = [];
    onMounted(() => {
      /* store.commit("clear"); */
      onValue(blogRef, (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          const childData = childSnapshot.exportVal();
          list.push(childData);
          console.log(childData);

          store.dispatch("getRecipe", childData);
        });
      });
    });
    console.log(list);
    return { song: computed(() => store.state.song), Card, list };
  },
/*   data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async fetchBlogs() {
      const blogs = [];
      const blogSnapshot = await getDocs(bColRef);
      blogSnapshot.forEach((blog) => {
        const blogData = blog.data();
        blogs.push(blogData);
      });
      this.blogs = blogs;
    }
  },
  created() {
    this.fetchBlogs();
  }
} */
}
</script>
