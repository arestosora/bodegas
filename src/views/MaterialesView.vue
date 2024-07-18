<template>
    <div class="materiales-container">
        <Sidebar />
        <main class="content">
            <header class="header">
                <h1>Material</h1>
            </header>
            <div class="search-bar">
                <input type="text" placeholder="Nombre material" v-model="searchQuery">
                <button @click="search">Buscar</button>
            </div>
            <div class="material-list">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Material</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="material in filteredMaterials" :key="material.id">
                            <td>{{ material.id }}</td>
                            <td>{{ material.nombre }}</td>
                            <td>
                                <button class="edit-button" @click="editMaterial(material.id)">
                                    <i class="pi pi-pencil"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const materialList = [
    { id: 1, nombre: 'Material 1' },
    { id: 2, nombre: 'Material 2' },
    { id: 3, nombre: 'Material 3' },
    { id: 4, nombre: 'Material 4' },
    { id: 5, nombre: 'Material 5' },
    { id: 6, nombre: 'Material 6' },
    { id: 7, nombre: 'Material 7' },
    { id: 8, nombre: 'Material 8' },
];

export default defineComponent({
    name: 'MaterialesView',
    components: {
        Sidebar,
    },
    data() {
        return {
            searchQuery: '',
            materials: materialList,
        };
    },
    computed: {
        filteredMaterials() {
            return this.materials.filter(material =>
                material.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        search() {
            console.log('Search query:', this.searchQuery);
        },
        editMaterial(id: number) {
            console.log('Edit material with id:', id);
        }
    }
});
</script>

<style scoped>
@import '@/styles/bodegas.css';
@import 'primeicons/primeicons.css';

.materiales-container {
    display: flex;
}

.content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.header {
    margin-bottom: 20px;
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

.material-list {
    margin-top: 20px;
}

.material-list table {
    width: 100%;
    border-collapse: collapse;
}

.material-list th, .material-list td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

.edit-button {
    background: none;
    border: none;
    cursor: pointer;
}

.edit-button .pi {
    font-size: 1.2rem;
    color: #28a745;
}
</style>
