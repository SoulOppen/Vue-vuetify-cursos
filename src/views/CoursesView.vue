<script setup>
import TableItemComponent from '@/components/TableItemComponent.vue';
import CardInfoComponent from '@/components/CardInfoComponent.vue';
import {computed} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const cursos=computed(()=>store.state.courses)
const cupos=computed(()=>store.getters.totalCupos)
const inscritos=computed(()=>store.getters.totalInscrito)
const cursosActivos=computed(()=>store.getters.totalCursosActivos)
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
  <VDivider class="d-block w-75 mx-auto"></VDivider>
  <CardInfoComponent color="text-blue-darken-4" icon="account-multiple">
    <p>Cantidad total de alumnos permitidos: {{ cupos }} alumnos.</p>
  </CardInfoComponent>
  <CardInfoComponent color="text-blue-lighten-1" icon="account-check">
    <p>Cantidad total de alumnos inscritos: {{ inscritos }} alumnos.</p>
  </CardInfoComponent>
  <CardInfoComponent color="text-red-darken-1" icon="account-plus">
    <p>Cantidad total de cupos restantes: {{ cupos-inscritos }} alumnos.</p>
  </CardInfoComponent>
  <CardInfoComponent color="text-grey-darken-3" icon="cancel">
    <p>Cantidad de cursos terminados: {{cursos.length-cursosActivos}} cursos.</p>
  </CardInfoComponent>
  <CardInfoComponent color="text-red" icon="bell-ring">
    <p>Cantidad total de cursos activos: {{ cursosActivos }} cursos.</p>
  </CardInfoComponent>
  <CardInfoComponent color="text-amber-darken-2" icon="bell-ring">
    <p>Cantidad total de cursos: {{ cursos.length }} cursos.</p>
  </CardInfoComponent>
  </main>
</template>
