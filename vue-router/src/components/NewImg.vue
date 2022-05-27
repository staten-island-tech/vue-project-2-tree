<template>
  <div>
    <input id="file" type="text" class="img-control" v-on:change="createImg" />
    <img class="imagePreviewWrapper" id="img" src="" alt="" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    function createImg() {
      let img = ref(document.getElementById("file")).value;
      let link = img.value;
      if (link !== null) {
        document.getElementById("img").src = link;
        store.commit("imgprv", link);
      } else {
        document.getElementById("img").src = null;
        store.commit("imgprv", null);
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
 .imagePreviewWrapper {
 height: 10%;
 width: 51%;
 margin: 1rem auto;
 object-fit: contain;
} 
</style>