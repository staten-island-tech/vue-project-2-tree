<template>
  <div>
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
       location.reload();  
    }
    function editData(blogs) {  
      let newref = blogs.id;
      const newblog = ref(db, "blogs/" + newref);
        onValue(newblog, (snapshot) => {
        const data = snapshot.val();
        store.commit("update", data);
      });
       router.push("/CreatePost");
    }
    return {removeData, editData};
  },
};
</script>

<style lang="scss" scoped></style>
