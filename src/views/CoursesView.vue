<script setup>
import TableItemComponent from '@/components/TableItemComponent.vue';
import {computed} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const cursos=computed(()=>store.state.courses)
</script>

<template>
  <main>
    <h1 class="text-center">Administración</h1>
    <VBtn  color="blue-darken-4" class="d-block w-25 mx-auto">Agregar Curso</VBtn>
    <v-table class="d-block w-75 mx-auto">
    <thead>
      <tr>
        <th class="text-left">
          Curso
        </th>
        <th class="text-left">
          Cupos
        </th>
        <th class="text-left">
          Inscritos
        </th>
        <th class="text-left">
          Duración
        </th>
        <th class="text-left">
          Costo
        </th>
        <th class="text-left">
          Terminado
        </th>
        <th class="text-left">
          Fecha
        </th>
        <th class="text-left">
          Acciones
        </th>
      </tr>
    </thead>
    <tbody>
      <TableItemComponent v-for="curso in cursos" :key="curso.id" :id="curso.id"/>
    </tbody>
  </v-table>
  </main>
</template>
