<template>
  <button class="card" @click="reDirect({ id })">
    <h1 class="song-name" id="titleinput">{{ title }}</h1>

    <img class="song-img" id="coverinput" :src="image" alt="" />
    <h2 class="author-name" id="authorinput">Written by: {{ author }}</h2>


  </button>
</template>

<script>
import { useRouter } from "vue-router";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useStore } from "vuex";
import { computed } from "vue";
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
    function reDirect(blogs) {
      let newref = blogs.id;
      const newblog = ref(db, "blogs/" + newref);
      onValue(newblog, (snapshot) => {
        const data = snapshot.val();
        store.commit("redirect", data);
      });
      router.push("/BlogPost");
    }
    function removeData(blogs) {
       let newref = blogs.id;
       remove(ref(db, "blogs/" + newref)); 
       location.reload();
       router.push("/");
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
    return { reDirect,  user: computed(() => store.state.user), removeData, editData };
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
  height: 30rem;
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
.description {
  margin: 0 auto;
  font-size: 2rem;
}
.edit-button1 {
  position: relative;
  width: 25%;
  height: 15%;
  font-family: "Sora", sans-serif;
  font-size: 2rem;
  margin: 2rem;
  display: inline-block;
}
.edit-button2 {
  width: 25%;
  height: 15%;
  font-family: "Sora", sans-serif;
  font-size: 2rem;
  display: inline-block;
}
.author-name {
  font-family: "Sora", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1rem;
  color: #232b2b;
}

</style>
