<script setup>
import NavComponent from '@/components/NavComponent.vue'
import {onMounted} from 'vue';
import {RouterView } from 'vue-router'
import { useStore } from 'vuex';
const store=useStore();
const cargarCursos=async()=>{
  try {
          const response = await fetch('/cursos.json');

          if (!response.ok) {
              throw new Error('Error al cargar el archivo JSON');
          }

          const data = await response.json();

          const listaCursos = data.cursos;
          for(let curso of listaCursos){
            store.dispatch('agregarFetch', curso);
          }
          store.dispatch('changeStatus')
    } catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
    }
};
onMounted(()=>cargarCursos());
</script>

<template>
  <VApp>
    <NavComponent/>
    <RouterView/>
  </VApp>
</template>

<style scoped>
</style>