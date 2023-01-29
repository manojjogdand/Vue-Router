import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Posts from '../views/Posts.vue';
import postdetails from '../views/postdetails.vue';
import PageNotFound from '../views/PageNotFound.vue';
//decalre routes
const routes =[
  // {
  //   path:'/',
  //   name:"home",
  //   component:Home
  // },
  {
    path:'/about',
    name:"about",
    component:About
  },
  {
    path:'/contact',
    name:"contact",
    component:Contact
  },
  {
    path:'/posts',
    name:"posts",
    component:Posts
  },
  {
    path:'/posts/:id',
    name:"postdetails",
    component:postdetails
  },
  {
    path:'/:pathMatch(.*)*',
    name:"pagenotfound",
    component:PageNotFound
  },
  //redirect will replace the actual route location
  // {
  //   path:'/home',
  //   redirect:'/'
  // },
  //alias will not replace the actual route location
  // {
  //   path:'/',
  //   name:"home",
  //   component:Home,
  //   alias:'/home'
  // },
  {
    path:'/',
    name:"home",
    component:Home,
    alias:['/home','/myhome']
  },
];

//create route instance
const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
