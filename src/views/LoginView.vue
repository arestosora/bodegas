<template>
    <div class="login-container">
      <div class="login-box">
        <img src="@/assets/recycle-logo.png" alt="Recycle Logo" class="logo">
        <h2>Ingreso</h2>
        <form @submit.prevent="login">
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" v-model="username" placeholder="Usuario" required>
          </div>
          <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" v-model="password" placeholder="Contraseña" required>
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'LoginView',
    data() {
      return {
        username: '' as string,
        password: '' as string
      };
    },
    methods: {
      login() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      }
    }
  });
  </script>
  
  <style scoped>
  @import '@/styles/login.css'
  </style>
  