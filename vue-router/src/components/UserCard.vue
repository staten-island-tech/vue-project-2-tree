<template>
    <div class="carr">
        <h2 class="title">{{ title }}</h2>
        <img class="image" v-bind:src=image alt="image">
        <router-link class="add-btn">View Post</router-link>
    </div>
    </template>

<script>
    export default {
        title:String,
        image:String,
    }
</script>

