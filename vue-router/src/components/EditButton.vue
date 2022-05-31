<template>
  <div>
    <button class="btn" @click="update">Edit Post</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getDatabase, ref, set } from "firebase/database";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const db = getDatabase();
    function update() {
      let id = store.state.updateSong.id;
      set(ref(db, `blogs/` + id), {
        title: store.state.updateSong.title,
        content: store.state.updateSong.content,
        cover: store.state.updateSong.cover,
        id: store.state.updateSong.id,
        author: store.state.updateSong.author,
      });
      router.push("/");
    }

    return { update };
  },
};
</script>

<style scoped>
.btn {
  margin-top: 3rem;
  margin-left: 17rem;
  width: 50%;
  height: 7rem;
  font-size: 2.4rem;
  background: #1db954;
  text-align: center;
  font-family: "Sora", sans-serif;
  font-weight: 700;
}
</style>
