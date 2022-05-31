<template>
    <div>
    <input id="file" type="text" class="img-control" v-on:change="editImg" />
    <img class="previmg" id="img" src="" alt="" />
    </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
    name: "EditImg",
    setup () {
    const store = useStore();
    function editImg() {
      let img = ref(document.getElementById("file")).value;
      let link = img.value;
      if (link !== null) {
        document.getElementById("img").src = link;
        store.commit("updateCover", link);
      }
    }
        return {
            editImg,
        }
    }
}
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