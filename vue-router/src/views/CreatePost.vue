<template>
  <div class="songBackground">
    <form @submit.prevent="onFormSubmit">
      <div class="form-group">
        <label class="img-insert">Album Cover (link)</label>
        <NewImg v-model="cover"/>
        <!-- <input id="file"  class="form-control" type="link" v-on:change="onFileChange" v-model="cover" required/> -->
        <label class="title">Name of Song</label>
        <input type="text" class="form-control" v-model="title" required>
      </div>
      <div class="form-group">
          <label class="song-description">Description/Lyrics of Song</label>
        <input type="text" class="description-control" v-model="content" required>
      </div>
      <div class="form-group">
        <button class="btn" @click="writeUserData">Add Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import { getDatabase, set, ref, push } from "firebase/database";
// import { db } from "../firebase/config.js";
// import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import NewImg from "../components/NewImg.vue";

export default {
  components: {
    NewImg,
  },
  setup() {
    const auth = getAuth();
    const cover = ``;
    const title = ``;
    const content = ``;
    const db = getDatabase();
    const route = useRouter();
    const store = useStore();
    
    
    function writeUserData() {
      if (
        cover !== null &&
        title !== null &&
        content !== null 
       ) {
        const list = ref(db, "blogs/");
        const pushList = push(list);

        set(pushList, {
          author: auth.currentUser.email,
          title: this.title,
          content: this.content,
          cover: store.state.imgPreview,
          id: pushList.key,
        })
        
        route.push("blogs/");
      }
    }
    return {
      cover, title, content, writeUserData
    };
  },
  // methods: {
  //   onFormSubmit(event) {
  //     event.preventDefault()
  //    addDoc(collection(db, "blog"), {
  //      title: this.blog.title,
  //      content: this.blog.content,
  //      cover: this.blog.cover,

  //    })
  //   },
  // }
};
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
