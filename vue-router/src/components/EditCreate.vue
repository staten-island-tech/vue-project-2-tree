<template>
 <div class="songBackground">
    <form @submit.prevent="onFormSubmit">
      <div class="form-group">
        <label class="img-insert">Album Cover (link)</label>
        <EditImg v-model="cover"/>
        <!-- <input id="file"  class="form-control" type="link" v-on:change="onFileChange" v-model="cover" required/> -->
        <label class="title">Name of Song</label>
        <input type="text" class="form-control" v-model="title" required @change="updateTitle">
      </div>
      <div class="form-group">
          <label class="song-description">Description/Lyrics of Song</label>
        <textarea
        class="description-control"
        v-model="content" required
        @change="updateContent"
        ></textarea>
      </div>
      <div class="form-group">
       <Button/>
      </div>
    </form>
  </div>
</template>

<script>
import EditImg from "../components/EditImg.vue"
import Button from "../components/EditButton.vue"
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: "EditCreate",
    components: {
        EditImg,
        Button,
    },
    setup () {
    const store = useStore();
    const title = ref(store.state.updateSong.title);
    const content = ref(store.state.updateSong.content);
    const cover = ref(store.state.updateSong.cover);
   
    function updateTitle() {
      store.commit("updateTitle", this.title)
    }
    function updateContent() {
      store.commit("updateText", this.content)
    }
        return {
          updateTitle,
          updateContent,
          title,
          content,
          cover,
          Button
        }
    }
}
</script>

<style scoped>


.songBackground {
  background-color: #232b2b;
  width: 40%;
  margin: auto;
  margin-top: 15rem;
  padding: 2%;
  border-radius: 2rem;
  font-family: "Sora", sans-serif;
  box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.12);
  
}

.description-control {
  box-sizing: border-box;
  width: 80%;
  height: 15rem;
  font-size: 1.5rem;
  font-family: "Sora", sans-serif;
}

.img-control {
  width: 60%;
  height: 4rem;
  font-family: "Sora", sans-serif;
  font-size: 3rem;
}

.title {
  font-size: 3.5rem;
  color: #ffffff;
  font-weight: 700;
}
.img-insert {
    font-size: 3.5rem;
  color: #ffffff;
  font-weight: 700;
}
.form-control {
  width: 60%;
  height: 4rem;
  font-family: "Sora", sans-serif;
  font-size: 3rem;
}
.btn {
  margin-top: 3rem;
  margin-left: 17rem;
  width: 50%;
  height: 7rem;
  font-size: 2.4rem;
  background: #1db954;
  text-align: center;
  font-family: "Sora", sans-serif;
  font-weight: 700;

}
.song-description {
  padding-top: 1rem;
  font-size: 3.5rem;
  color: #ffffff;
  font-weight: 700;
}

</style>