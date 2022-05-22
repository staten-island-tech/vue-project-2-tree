<template>
  <div class="home">
  <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.content }}</p>
        <div class="icons">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { ref } from 'vue'
import { useStore } from 'vuex'
import { collection, getDocs } from "firebase/firestore";
import bColRef from "../firebase/config.js"
export default {
  name: 'HomeView',
  data() {
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
}

</script>
