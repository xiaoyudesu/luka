import { createRouter, createWebHistory } from 'vue-router'
import MyVideo from '../views/MyVideo.vue'
import MyGroup from '../views/MyGroup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'my-video',
      component: MyVideo
    },
    {
      path: '/mygroup',
      name: 'my-group',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyGroup.vue')
    }
  ]
})

export default router
