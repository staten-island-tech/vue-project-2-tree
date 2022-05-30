<template>
  <div>
    <UserCard
      v-for="blog in blogs"
      :key="blog"
      :id="blog.id"
      :title="blog.title"
      :image="blog.cover"
      :text="blog.content"
      :author="blog.author"
    />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { getDatabase, ref, onValue } from "firebase/database";
import { useStore } from "vuex";
import UserCard from "../components/EditCard.vue";
export default {
  name:"SongCard",
  components: {
    UserCard,
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
          store.dispatch("songData", childData);
        });
      });
    });

    return { blogs: computed(() => store.state.useerSong) };
  },
};
</script>

<style lang="scss" scoped></style>
