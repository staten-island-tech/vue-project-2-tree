<template>
  <div class="card">
    <h1 class="song-name" id="titleinput">{{ title }}</h1>
    <img class="song-img" id="coverinput" :src="image" alt="" />
    <h2 class="author-name" id="authorinput">Written by: {{ author }}</h2>
    <div class="btnalign">
      <button class="edit-button1" @click="editData({ id })">Edit</button>
      <button class="edit-button2" @click="removeData({ id })">Delete</button>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  props: {
    title: String,
    image: String,
    id: String,
    text: String,
    author: String,
  },
  setup() {
    const store = useStore();
    const db = getDatabase();
    const router = useRouter();

    function removeData(blogs) {
      let newref = blogs.id;
      remove(ref(db, "blogs/" + newref));
      location.reload();
    }
    function editData(blogs) {
      let newref = blogs.id;
      const newblog = ref(db, "blogs/" + newref);
      onValue(newblog, (snapshot) => {
        const data = snapshot.val();
        store.commit("update", data);
      });
      router.push("/EditPost");
    }
    return { removeData, editData };
  },
};
</script>

<style>
.card {
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  background-color: #1db954;
  width: 30%;
  height: 35rem;
  border-radius: 2rem;
  margin: 1.5rem;
  overflow: hidden;
  align-content: center;
}
.song-name {
  font-size: 5rem;
  margin: 0.5rem auto;
  font-family: "Sora", sans-serif;
  color: #ffffff;
}
.song-img {
  width: 80%;
  height: 50%;
  margin: 0 auto;
  object-fit: contain;
}
.author-name {
  font-family: "Sora", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1rem;
  color: #ffffff;
}
.btnalign {
    display: inline;
}
.edit-button1 {
  width: 25%;
  height: 15%;
  font-family: "Sora", sans-serif;
  font-size: 2rem;
  margin: 2rem;
}
</style>
