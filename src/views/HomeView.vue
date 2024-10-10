<script setup>
import CardComponent from '@/components/CardComponents.vue';
import {computed,onMounted} from 'vue';
import { useStore } from 'vuex';
const store=useStore();
const cursos=computed(()=>store.state.courses)
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
  <main>
    <h1 class="text-center">Lista de cursos</h1>
    <VRow class="w-75 my-3 mx-auto">
      <VCol
      v-for="curso in cursos"
      :key="curso.id"
      cols="4">
        <CardComponent :id="curso.id"/>
      </VCol>
    </VRow>
  </main>
</template>
<style scoped>
  .grid{
    display: grid;
    grid-template-columns: repeat(1,1fr);
  }
</style>
