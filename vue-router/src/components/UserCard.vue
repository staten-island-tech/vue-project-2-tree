<template>
  <button class="card" @click="reDirect({ NewPage })">
    <h2 class="song-name">{{ title }}</h2>

    <img class="song-img" :src="image" alt="" />
    
    <!-- <p class="ingredient">{{ item }}</p>
    <p class="instruction">{{ text }}</p> -->
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
<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: #1db954;
  width: 18%;
  height: 32rem;
  border-radius: 2rem;
  margin: 0.9%;
  overflow: hidden;
}
.song-name {
  font-size: 5rem;
  margin: 0 auto;
}
.song-img {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
.description {
  margin: 0 auto;
  font-size: 2rem;
}
</style>
