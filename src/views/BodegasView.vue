<template>
    <div class="bodegas-container">
        <Sidebar />
        <main class="content">
            <header class="header">
                <h1>Bodegas</h1>
                <button class="create-button">Crear bodega</button>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

.bodegas-container {
    display: flex;
    height: 100%;
}

.content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.create-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.create-button:hover {
    background-color: #218838;
}

.search-bar {
    display: flex;
    margin-bottom: 20px;
}

.search-bar input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
}

.search-bar button {
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0 5px 5px 0;
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

.search-bar button:hover {
    background-color: #218838;
}

.bodegas-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.bodega-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex: 1 1 calc(33.333% - 20px);
    display: flex;
    align-items: center;
}

.bodega-icon {
    width: 100px;
    height: 100px;
    border: 2px solid #000000;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
}

.bodega-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bodega-details p {
    margin: 5px 0;
}

.bodega-details a {
    color: #28a745;
    text-decoration: none;
}

.bodega-details a:hover {
    text-decoration: underline;
}
</style>
