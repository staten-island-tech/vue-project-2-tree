<template>

    <button class="card" @click="reDirect({ NewPage })">
    <h2 class="song-name">{{ title }}</h2>

    <img class="song-img" :src="image" alt="" />
    <button class="edit-button1">Edit</button>
    <button class="edit-button2">Delete</button>
 
  </button>

</template>

<script>
import { useRouter } from "vue-router";
import { getDatabase, ref, onValue } from "firebase/database";
import { useStore } from "vuex";
export default {
    props: {
        title:String,
        image:String,
        NewPage:String,
        id:String,
        text:String,
    },
  setup() {
    const store = useStore();
    const db = getDatabase();
    const router = useRouter();
    function reDirect(NewPage) {
      let newref = NewPage.id
      const newblog = ref(db, "blogs/" + newref)
      onValue(newblog, (snapshot) => {
        const data = snapshot.val();
        store.commit("redirect", data)
      });
        router.push("/BlogPost");  
    }
    return { reDirect };
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
  height: 50rem;
  border-radius: 2rem;
  margin: 1.5rem;
  overflow: hidden;
  align-content: center;
}
.song-name {
  font-size: 5rem;
  margin: 0 auto;
  font-family: "Sora", sans-serif;
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
}
.edit-button2 {
  width: 25%;
  height: 15%;
  font-family: "Sora", sans-serif;
  font-size: 2rem;
}
</style>
