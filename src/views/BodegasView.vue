<template>
    <div class="bodegas-container">
        <Sidebar />
        <main class="content">
            <header class="header">
                <h1>Bodegas</h1>
                <RouterLink to="/bodegas/create">
                    <button class="create-button">Crear bodega</button>
                </RouterLink>
            </header>
            <div class="search-bar">
                <input type="text" placeholder="Nombre de bodega" v-model="searchQuery">
                <button @click="search">Buscar</button>
            </div>
            <div class="bodegas-list">
                <div class="bodega-card" v-for="bodega in bodegas" :key="bodega.id">
                    <div class="bodega-icon">
                        <img src="@/assets/house.png" alt="Icono de Bodega" class="bodega-image">
                    </div>
                    <div class="bodega-details">
                        <p><strong>Nombre:</strong> {{ bodega.nombre }}</p>
                        <p><strong>Responsable:</strong> {{ bodega.responsable }}</p>
                        <p><strong>Dirección:</strong> {{ bodega.direccion }}</p>
                        <p><strong>Nit:</strong> {{ bodega.nit }}</p>
                        <RouterLink :to="'/bodegas/' + bodega.id">Ver detalle</RouterLink>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue'

const bodegaslist = [
    {
        id: 1,
        nombre: 'Bodega 1',
        responsable: 'Responsable 1',
        direccion: 'Dirección 1',
        nit: '1234234234',
    },
    {
        id: 2,
        nombre: 'Bodega 1',
        responsable: 'Responsable 1',
        direccion: 'Dirección 1',
        nit: '1234234234',
    },
    {
        id: 3,
        nombre: 'Bodega 1',
        responsable: 'Responsable 1',
        direccion: 'Dirección 1',
        nit: '1234234234',
    },
    {
        id: 4,
        nombre: 'Bodega 1',
        responsable: 'Responsable 1',
        direccion: 'Dirección 1',
        nit: '1234234234',
    },
]

export default defineComponent({
    name: 'BodegasView',
    components: {
        Sidebar,
        RouterLink,
    },
    data() {
        return {
            searchQuery: '',
            bodegas: bodegaslist
        };
    },
    methods: {
        search() {
            console.log('Search query:', this.searchQuery);
        },
    },
});
</script>

<style scoped>
@import '@/styles/bodegas.css';
</style>
