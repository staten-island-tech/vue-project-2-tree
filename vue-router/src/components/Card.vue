<template>
    <div v-bind:index="index" class="carr">
        <h2 class="title">{{ title }}</h2>
        <img class="image" v-bind:src=image alt="image">
        <button class="add-btn" @click="add(index)">Check out Post</button>
        </div>
    </template>

<script>

export default {
  name: "Card",  
  props: {
    title:String,
    category:String,
    image:String,
    },
  };
</script>

<style>
html,
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

.title {
  font-size: 3rem;
}

.image {
  width: 80%;
  height: 20vh;
  margin-top: 0.05em;
}
.add-btn {
    height:5rem;
    font: size 5px;
    border-radius:20px;
    border:none;
    background-color:lightblue;
    color: black;
    transition: 0.3s;
    display: inline-block;
    width: 20rem;
    margin-bottom: 2rem;
}

.add-btn:hover {
    transform: scale(1.1);
}
.add-btn:active {
    transform: scale(0.6);
}
.money {
  padding-top: 1rem;
  font-weight: bold;
  font-size: 2.2 rem;
}
</style>
