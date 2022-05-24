<template>
  <button class="card" @click="goTo({ id })">
    <h2 class="recipe-name">{{ title }}</h2>

    <img class="recipe-img" :src="img" alt="" />
    <p class="description">{{ text }}</p>
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
    },
    setup() {
    const store = useStore();
    const db = getDatabase();
    const router = useRouter();
    function goTo(id) {
      let idRef = id.id;
      const blog = ref(db, "recipe/" + idRef);
      onValue(blog, (snapshot) => {
        const data = snapshot.val();
        store.commit("view", data);
      });
      router.push("/BlogPost");
    }
    return { goTo };
  },
};
</script>
<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: gray;
  width: 18%;
  height: 32rem;
  border-radius: 2rem;
  margin: 0.9%;
  overflow: hidden;
}
.recipe-name {
  font-size: 5rem;
  margin: 0 auto;
}
.recipe-img {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
.description {
  margin: 0 auto;
  font-size: 2rem;
}
</style>
