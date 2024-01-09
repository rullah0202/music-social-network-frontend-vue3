import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user-store'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next('/account/profile/' + useUserStore().id) : next()
      },
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next('/account/profile/' + useUserStore().id) : next()
      },
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/account',
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next() : next('/login')
      },
      component: () => import('@/views/AccountView.vue'),
      children : [
        {
        path: 'profile/:id',
        name: 'ProfileSection',
        component: () => import('@/views/account/ProfileSection.vue')
        },
        {
          path: 'edit-profile',
          name: 'EditProfile',
          component: () => import('@/views/account/EditProfile.vue')
        },
        {
          path: 'add-song',
          name: 'AddSong',
          component: () => import('@/views/account/AddSong.vue')
        },
        {
          path: 'delete-song',
          name: 'DeleteSong',
          component: () => import('@/views/account/DeleteSong.vue')
        },
        {
          path: 'add-youtube-video',
          name: 'AddYoutubeVideo',
          component: () => import('@/views/account/AddYoutubeVideo.vue')
        },
        {
          path: 'delete-youtube-video',
          name: 'DeleteYoutubeVideo',
          component: () => import('@/views/account/DeleteYoutubeVideo.vue')
        },
        {
          path: 'create-post',
          name: 'CreatePost',
          component: () => import('@/views/account/CreatePost.vue')
        },
        {
          path: 'edit-post/:id',
          name: 'EditPost',
          component: () => import('@/views/account/EditPost.vue')
        },
        {
          path: 'posts',
          name: 'PostsSection',
          component: () => import('@/views/account/PostsSection.vue')
        },
        {
          path: 'post-by-id/:id',
          name: 'PostById',
          component: () => import('@/views/account/PostById.vue')
        }
    ]
    }
  ]
})

export default router
