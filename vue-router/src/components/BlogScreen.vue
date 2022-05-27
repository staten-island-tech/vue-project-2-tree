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
align-content: center;
align-items: center;
font-family: "Sora", sans-serif;
text-align: center;
display: flex;
flex-direction: column;
}
.title {
    margin-top: 2rem;
    font-size: 10rem;
    color: #ffffff;
    font-family: "Sora", sans-serif;
}
.img-display {
    margin: 1rem auto;
    object-fit: contain;
    width: 20%;
    height: 20%;
}
.user-display {
    margin-top: 1rem;
    font-weight: 700;
    color: #ffffff;
    font-size: 3rem;
}
.text-display {
    width: 80rem;
    font-weight: 400;
    font-size: 2rem;
    color: #ffffff;
    margin-top: 2rem;
}
</style>