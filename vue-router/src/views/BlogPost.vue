<template>
<html lang="en">
   <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
    <BlogCard
    :title="blog.title"
    :img="blog.image"
    :author="blog.author"
    :text="blog.text"
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
    return { blog: computed(() => store.state.viewSong), BlogCard };
  },
};
</script>

