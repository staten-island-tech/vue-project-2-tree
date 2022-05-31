<template>
<div class="SignUp">
  <div class="rectangle-1">
  <form @submit.prevent="handleSubmit">
    <h1 class= "SignIn">Sign Up</h1>
    <h2 class ="make-new">Make a new account</h2>

    
    <input type="email" name="email" placeholder=" Email" id="email" v-model="email" required>

 
    <input type="password" name="password" placeholder=" Password" id="password" v-model="password" required>

    <button class= "Signy">Sign Up</button>
 
    <div v-if="error">{{ error }}</div>
    
    
  </form>
</div>

</div>


</template>

<script>
import { ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name:'SignupView',
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { handleSubmit, email, password, error }
  }
}
</script>

<style>
body {
  background: #292929;
}



</style>
