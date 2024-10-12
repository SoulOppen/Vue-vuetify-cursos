<script setup>
import TableItemComponent from '@/components/TableItemComponent.vue';
import CardInfoComponent from '@/components/CardInfoComponent.vue';
import DialogAddComponent from '@/components/DialogAddComponent.vue';
import {ref,computed} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const agregarToggle=ref(false)
const editarToggle=ref(false)
const cursos=computed(()=>store.state.courses)
const cupos=computed(()=>store.getters.totalCupos)
const inscritos=computed(()=>store.getters.totalInscrito)
const cursosActivos=computed(()=>store.getters.totalCursosActivos)
const agregar=()=>{
  agregarToggle.value=true;
}
const edit=(e)=>{
  const curso=store.getters.findCourse(e)
  mUrl.value=curso.img
  mName.value=curso.nombre
  mValue.value=curso.costo
  mDuracion.value=curso.duracion
  mCupos.value=curso.cupos
  mInscritos.value=curso.inscritos
  mDate.value=curso.fecha_registro
  mDescription.value=curso.descripcion
  editarToggle.value=true
  agregarToggle.value=true
}
</script>

<template>
  <main>
    <DialogAddComponent v-if="agregarToggle" @cerrar-agregar="agregarToggle=false"/>
    <h1 class="text-center">Administración</h1>
    <VBtn  color="blue-darken-4" class="d-block w-25 mx-auto" @click="agregar">Agregar Curso</VBtn>
    <VTable class="d-block w-75 mx-auto">
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
    <tbody v-if="cursos.length>0">
      <TableItemComponent v-for="curso in cursos" :key="curso.id" :id="curso.id" @editar="edit"/>
    </tbody>
    <tbody v-else>
      <tr>
        <td  class="text-center font-weight-bold" colspan="8">
          No existen cursos
        </td>
      </tr>
    </tbody>
  </VTable>
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

