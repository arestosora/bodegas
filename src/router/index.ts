import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import BodegasView from '@/views/BodegasView.vue'
import BodegaDetailView from '@/views/BodegaDetailView.vue'
import CreateBodegaView from '@/views/CreateBodegaView.vue'
import MaterialesView from '@/views/MaterialesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/bodegas',
      name: 'bodegas',
      component: BodegasView
    },
    {
      path: '/bodegas/:id',
      name: 'bodega-detail',
      component: BodegaDetailView,
      props: true
    },
    {
      path: '/bodegas/create',
      name: 'create-bodega',
      component: CreateBodegaView
    },
    {
      path: '/materiales',
      name: 'materiales',
      component: MaterialesView
    }
  ]
})

export default router
