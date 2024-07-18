<template>
    <div class="bodegas-detail-container">
        <Sidebar />
        <main class="content">
            <header class="header">
                <h1>Bodegas > Detalle</h1>
                <button class="manage-button">Gestionar Bodega</button>
            </header>
            <div class="bodega-card">
                <div class="bodega-icon">
                    <img src="@/assets/house.png" alt="Icono de Bodega" class="bodega-image">
                </div>
                <div class="bodega-details">
                    <p><strong>Nombre:</strong> {{ bodega.nombre }}</p>
                    <p><strong>Responsable:</strong> {{ bodega.responsable }}</p>
                    <p><strong>Dirección:</strong> {{ bodega.direccion }}</p>
                    <p><strong>Nit:</strong> {{ bodega.nit }}</p>
                </div>
            </div>
            <div class="recolectores">
                <h2>Recolectores</h2>
                <div class="bodega-list">
                    <div class="bodega-card" v-for="recolector in bodega.recolectores" :key="recolector.id">
                        <div class="bodega-icon">
                            <img src="@/assets/user.png" alt="Icono de Recolector" class="bodega-image">
                        </div>
                        <div class="bodega-details">
                            <p><strong>Nombre:</strong> {{ recolector.nombre }}</p>
                            <p><strong>Apellido:</strong> {{ recolector.apellido }}</p>
                            <p><strong>Dirección:</strong> {{ recolector.direccion }}</p>
                            <p><strong>Identificación:</strong> {{ recolector.identificacion }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';

const bodegaslist = [
    {
        id: 1,
        nombre: 'Bodega 1',
        responsable: 'Responsable 1',
        direccion: 'Dirección 1',
        nit: '1234234234',
        recolectores: [
            { id: 1, nombre: 'Nombre 1', apellido: 'Apellidos 1', direccion: 'Apellidos 1', identificacion: 'Apellidos 1' },
            { id: 2, nombre: 'Nombre 2', apellido: 'Apellidos 2', direccion: 'Apellidos 2', identificacion: 'Apellidos 2' },
            { id: 3, nombre: 'Nombre 3', apellido: 'Apellidos 3', direccion: 'Apellidos 3', identificacion: 'Apellidos 3' },
            { id: 4, nombre: 'Nombre 4', apellido: 'Apellidos 4', direccion: 'Apellidos 4', identificacion: 'Apellidos 4' },
        ]
    },
    // Add more bodega data as needed
];

export default defineComponent({
    name: 'BodegaDetailView',
    components: {
        Sidebar,
    },
    data() {
        return {
            bodega: null
        };
    },
    methods: {
        fetchBodegaDetails(id: number) {
            this.bodega = bodegaslist.find(bodega => bodega.id === id) || null;
        }
    },
    created() {
        const route = useRoute();
        const bodegaId = Number(route.params.id);
        this.fetchBodegaDetails(bodegaId);
    }
});
</script>

<style scoped>
@import '@/styles/bodegas.css';
@import '@/styles/bodegadetail.css';
</style>
