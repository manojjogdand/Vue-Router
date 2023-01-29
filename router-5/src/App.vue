<script setup>
import{RouterLink, RouterView} from 'vue-router'
const topic = "optional parameter with regex and programatic navigation using router";
</script>

<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient fw-bold fs-3" >
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-5">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
<nav>
  <RouterLink :to="{name:'home'}">Home</RouterLink>
  <RouterLink :to="{name:'about'}">About</RouterLink>
  <RouterLink :to="{name:'contact'}">Contact</RouterLink>
  <RouterLink :to="{name:'posts'}">Posts</RouterLink>
</nav>
<h1 style="margin-top: 25px; display: flex; justify-content: center;">Topic : {{topic}}</h1>
<RouterView/>
</template>

<style>
nav{
  width: 100vw;
  font-size: 25px;
  border-bottom: 1px solid rgb(246, 39, 39);
}
nav a button{
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  margin: 10px;
  border-radius: 5px;
  /* border: 1px solid red; */
}
nav a.router-link-exact-active{
  background-color: rgb(252, 119, 119);
}
</style>
