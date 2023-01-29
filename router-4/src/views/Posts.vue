<template>
  <div class="parent">
    <div>
      <h1 v-for="post in posts" :key="post.id">
        <!-- <RouterLink :to="`/posts/${post.id}`"> {{ post.title }}</RouterLink><br/></h1> -->
        <RouterLink :to="{name:'postdetails',params:{id:post.id}}"> {{ post.title }}</RouterLink><br/></h1>
    </div>
    <!-- <h1>Posts Component</h1> -->
  </div>
</template>

<script setup>
   import{ RouterLink}  from 'vue-router';
   const posts = [
    {id:'1',title:"1. Lorem, ipsum dolor sit amet consectetur"},
    {id:'2',title:"2. Lorem, ipsum dolor sit amet consectetur"},
    {id:'3',title:"3. Lorem, ipsum dolor sit amet consectetur"},
    {id:'4',title:"4. Lorem, ipsum dolor sit amet consectetur"},
    ]
</script>

<style>

</style>