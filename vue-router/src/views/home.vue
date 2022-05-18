<template>
  <div class="home">
  <div v-for="blog in blogs" :key="blog.id">
       <Card 
    v-for="item in items" 
    :key="item.name"
    :title="item.name"
    :price="item.price"
    :image="item.image"
    :index="id"
    :add="carrt"
    >
  </Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { ref } from 'vue'
import { useStore } from 'vuex'
import { collection, getDocs } from "firebase/firestore";
import { getDatabase } from "firebase/database";
export default {
  
  name: 'HomeView',
  components: {
    Card,
  },
  setup() {
   
    const songRef = ref(database, "blogs/");
  },
data() {
  return {
    selected: "",
    cart: [],
    total: 0,
    items: [
      { title: 'Why Coffee is Better than Tea', id: 1 },
        { title: '...Then I Took an Arrow in the Knee', id: 2 },
        { title: 'Mario vs Luigi, Ultimate Showdown', id: 3 },
    ]
  }
  return { 
       blogs
      }
}

}
    
      const store = useStore()
      
      console.log(store.state.user)
    
      
  


</script>
