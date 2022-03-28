<template>
<div class="SignUp">
  <div class="rectangle-1">
  <form @submit.prevent="handleSubmit">
    <div class= "SignIn">Sign Up</div>
    <div class ="make-new">Make a new account</div>

    
    <input type="email" name="email" placeholder="Email" id="email" v-model="email" required>

 
    <input type="password" name="password" placeholder="Password" id="password" v-model="password" required>

    <button class= "Signy">Sign Up</button>
    <div class= "Already">Already have an account?</div>
    <button class= "Loggy">Login</button>
    <div v-if="error">{{ error }}</div>
    
    
  </form>
</div>
<div class="rectangle-2"></div>
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
