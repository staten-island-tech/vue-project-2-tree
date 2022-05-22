<template>
<body>
    <nav>
    <router-link class="homenav" to="/">Home</router-link> 
    <router-link class="signupnav" v-if="user === null" to="/SignupView">Sign Up</router-link>
    <router-link class="loginnav" v-if="user === null" to= "/LoginView">Login</router-link>
    <button @click="handleClick" v-if="user !== null" class="logoutbtn" >Logout</button>
    <div class="displayName">
      <p v-if="user !== null">Logged in as: {{ user.email }}</p>
    </div>
    <router-link class="createnav" v-if="user !== null" to="/CreatePost">Create Post</router-link>
  </nav>
  <div>
     <router-view/>
  </div>
</body>

 
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
      router.push("/");
    };

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.logoutbtn {
  position: relative;
  background-color: #1db954;
  font-size: 2rem;
  left: 156rem;
}
.displayName {
  position: relative;
  color: white;
  font-size: 2rem;
  left: 110rem;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
