import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Posts from '../views/Posts.vue';

//decalre routes
const routes =[
  {
    path:'/',
    name:"home",
    component:Home
  },
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
];

//create route instance
const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
