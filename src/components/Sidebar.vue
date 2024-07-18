<template>
    <aside class="sidebar">
      <img src="@/assets/recycle-logo.png" alt="Recycle Logo" class="logo">
      <ul>
        <li>
          <RouterLink to="/bodegas" class="sidebar-link">
            <i class="pi pi-home icon"></i>
            <span>Bodegas</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/materiales" class="sidebar-link">
            <i class="pi pi-box icon"></i>
            <span>Materiales</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/reportes" class="sidebar-link">
            <i class="pi pi-chart-line icon"></i>
            <span>Reportes</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/configuracion" class="sidebar-link">
            <i class="pi pi-cog icon"></i>
            <span>Configuración</span>
          </RouterLink>
        </li>
      </ul>
    </aside>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { RouterLink } from 'vue-router';
  
  export default defineComponent({
    name: 'Sidebar',
    components: {
      RouterLink,
    },
  });
  </script>
  
  <style scoped>
  @import '@/styles/sidebar.css';
  </style>
  