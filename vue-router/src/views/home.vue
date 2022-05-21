<template>
  <div class="home">
  <div v-for="blog in blogs" :key="blog.id">
    <UserCard 
    v-for="item in items" 
    :key="item.name"
    :title="item.name"
    :price="item.price"
    :image="item.image"
    :index="id"
    >
  </UserCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { useStore } from 'vuex'
import { collection, getDocs } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import UserCard from "../components/Card.vue";
export default {
  name: 'HomeView',
  components: {
    UserCard,
  },
  setup() {
    const database = getDatabase();
    const songRef = ref(database, "blogs/");
    const store = useStore();

   onValue(songRef, (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.exportVal();
        console.log(childData);

         store.dispatch("getSongs", childData);
       
        
      })
    })
  },
setup() {
     const blogs = ref([
      { title: 'Why Coffee is Better than Tea', id: 1 },
      { title: '...Then I Took an Arrow in the Knee', id: 2 },
      { title: 'Mario vs Luigi, Ultimate Showdown', id: 3 },
    ])
    const store = useStore()
    
    console.log(store.state.user)
    return { 
      blogs
    }
}

}
    
     
      
     
    
      
  


</script>
