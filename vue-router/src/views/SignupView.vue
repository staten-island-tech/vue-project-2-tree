<template>
<div class="SignUp">
  <div class="rectangle-1">
  <form @submit.prevent="handleSubmit">
    <div class= "SignIn">Sign Up</div>
    <div class ="make-new">Make a new account</div>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
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
.rectangle-1 {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 25%;
  margin: auto;
  margin-top: 10rem;
  height: 68.8rem;
  left: 43.8rem;
  top: 16.8rem;
  padding: 1rem;
  border-radius: 3rem;
  margin-left: 72rem;
  font-size: 5rem;
  overflow: hidden;
  padding: 3rem;
 background: #232B2B;
 box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.12);
}


</style>
