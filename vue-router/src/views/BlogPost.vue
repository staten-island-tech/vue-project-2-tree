<template>
<html lang="en">
   <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
    <BlogCard
    v-for="blog in blogs"
    :key="blog"
    :title="blog.title"
    :image="blog.cover"
    :author="blog.author"
    :text="blog.content"
    >
    </BlogCard>
  </html>
</template>

<script>
import BlogCard from "../components/BlogScreen.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    BlogCard,
  },
  setup() {
    const store = useStore();
    return { blogs: computed(() => store.state.song), BlogCard };
  },
};
</script>

