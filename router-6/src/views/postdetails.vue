<template>
    <div class="parent">
     <h1>postdetails Component</h1>
     <button class="btn" @click="goBack()">Go Back</button>
     <button class="btn" @click="goForward()">Go Forward</button>
   </div>
   <div>
    <h1>Post Details  :  {{ params}}</h1><br>
    <h1>Post Details  :  {{ params.id }}</h1>
   </div>
 </template>
 
 <script setup>
 import{useRoute,useRouter} from 'vue-router'

 //useRoute --> To access current route location
 const route= useRoute();
 console.log("Route : ",route);
 //destructure route
 const{path,fullPath,hash,name,params,query,redirectedFrom}= route;
 console.log(`path : ${path}`)
 console.log(`fullPath : ${fullPath}`)
 console.log(`name : ${name}`)
 console.log("params : ",params)
 console.log("query : ",query)
 console.log(`hash : ${hash}`)
 console.log(`redirectedFrom : ${redirectedFrom}`)
 //useRouter --> To get Router instatance
 const router = useRouter();
 console.log("Router",router);

 function goBack(){
  router.back();
}
function goForward(){
   router.forward();
}

 </script>
 
 <style>
 
 </style>