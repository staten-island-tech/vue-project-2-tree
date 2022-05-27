<template>
  <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <BlogCard
      :title="blogs.title"
      :image="blogs.cover"
      :author="blogs.author"
      :text="blogs.content"
    >
    </BlogCard>
  </div>
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
    return { blogs: computed(() => store.state.redirectSong) };
  },
};
</script>
