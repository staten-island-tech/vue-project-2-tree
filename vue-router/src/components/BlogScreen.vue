<template>
<html lang="en">
   <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
      <div class="background-test">
          <h1 class="title">{{ title }}</h1>
          <img class="img-display" :src="image">
          <h2 class="user-display">Written by: {{ author }} </h2>
          <p class="text-display">{{ text }}</p>
      </div>
  </body>
</html>
</template>

<script>
export default {
    name:"BlogCard",
    props: {
      author: String,
      title: String,
      image: String,
      text: String,
    },
    setup () {
         return {}
    },
};
</script>

<style scoped>
.background-test {
     background-color: green;
    width: 50%;
    height: 20rem; 
}
.title {
    font-size: 10rem;
    color: #ffffff;
    font-family: "Sora", sans-serif;
}
</style>