<template>
  <div class="home">
  
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'HomeView',
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
