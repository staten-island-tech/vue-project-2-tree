<template>
  <div class="cards">
    <h1 class="song-name" id="titleinput">{{ title }}</h1>
    <img class="song-img" id="coverinput" :src="image" alt="" />
    <h2 class="author-name" id="authorinput">Written by: {{ author }}</h2>
      <button class="edit-button1" @click="editData({ id })">Edit</button>
      <button class="edit-button2" @click="removeData({ id })">Delete</button>
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
      router.push("/EditPost");
    }
    function editData(blogs) {
      let newref = blogs.id;
      const newblog = ref(db, "blogs/" + newref);
      onValue(newblog, (snapshot) => {
        const data = snapshot.val();
        store.commit("update", data);
      });
      location.reload()
    }
    return { removeData, editData };
  },
};
</script>

<style>
.cards {
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  background-color: #1db954;
  width: 30%;
  height: 45rem;
  border-radius: 2rem;
  margin: 1.5rem;
  overflow: hidden;
  align-content: center;
}
.song-name {
  font-size: 5rem;
  margin: 0.5rem auto;
  font-family: "Sora", sans-serif;
  color: #232b2b;
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
  color: #232b2b;
}
.btnalign {
    align-items: center;
}
.edit-button1 {
  font-family: "Sora", sans-serif;
  margin: 1rem;
  background-color: #232b2b;
}
.edit-button2 {
  font-family:"Sora", sans-serif;
  margin-bottom: 1rem;
  background-color: #232b2b;
}

</style>
