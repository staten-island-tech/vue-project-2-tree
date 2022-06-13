<template>
  <div>
    <input id="album-cover-link" type="text" class="img-control" alt="song image" v-on:change="createImg" />
    <img class="previmg" id="img" src="" alt="" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    
    function createImg() {
      let pic = ref(document.getElementById("album-cover-link")).value;
      let link = pic.value;
      if (link !== null) {
        document.getElementById("img").src = link;
        store.commit("imgView", link);
      } else {
        document.getElementById("img").src = null;
        store.commit("imgView", null);
      }
    }
    return {
      createImg,
    };
  },
};
</script>

<style>
.img-control {
  width: 50%;
  height: 3rem;
  font-family: "Sora", sans-serif;
  font-size: 3rem;
}
 .previmg {
 height: 5%;
 width: 51%;
 margin: 1rem auto;
 object-fit: contain;
} 
</style>