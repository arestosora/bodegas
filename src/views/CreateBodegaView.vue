<template>
    <div class="bodegas-create-container">
        <Sidebar />
        <main class="content">
            <header class="header">
                <h1>Bodegas > Crear</h1>
            </header>
            <form class="create-bodega-form" @submit.prevent="submitForm">
                <input type="text" v-model="nombre" placeholder="Nombre de bodega" required />
                <input type="text" v-model="celular" placeholder="Número de celular" required />
                <input type="text" v-model="responsable" placeholder="Responsable" required />
                <input type="text" v-model="direccion" placeholder="Dirección" required />
                <input type="text" v-model="usuario" placeholder="Usuario" required />
                <button type="submit">Crear</button>
            </form>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

export default defineComponent({
    name: 'CreateBodegaView',
    components: {
        Sidebar,
    },
    data() {
        return {
            nombre: '',
            celular: '',
            responsable: '',
            direccion: '',
            usuario: ''
        };
    },
    methods: {
        submitForm() {
            console.log('Form data:', this.nombre, this.celular, this.responsable, this.direccion, this.usuario);
            this.nombre = '';
            this.celular = '';
            this.responsable = '';
            this.direccion = '';
            this.usuario = '';
        }
    }
});
</script>

<style scoped>
@import '@/styles/bodegas.css';

.bodegas-create-container {
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

.create-bodega-form {
    display: flex;
    flex-direction: column;
}

.create-bodega-form input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.create-bodega-form button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.create-bodega-form button:hover {
    background-color: #218838;
}
</style>
