<script setup>
import TableItemComponent from '@/components/TableItemComponent.vue';
import CardInfoComponent from '@/components/CardInfoComponent.vue';
import {ref,computed} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const agregarToggle=ref(false)
const editarToggle=ref(false)
const cursos=computed(()=>store.state.courses)
const cupos=computed(()=>store.getters.totalCupos)
const inscritos=computed(()=>store.getters.totalInscrito)
const cursosActivos=computed(()=>store.getters.totalCursosActivos)
const mName=ref('');
const mUrl=ref('');
const mCupos=ref('');
const mInscritos=ref('');
const mDuracion=ref('');
const mDate=ref('');
const mValue=ref('');
const mDescription=ref('');
const agregar=()=>{
  agregarToggle.value=true;
}
const clean=()=>{
  mName.value='';
  mUrl.value='';
  mCupos.value='';
  mInscritos.value='';
  mDuracion.value='';
  mDate.value='';
  mValue.value='';
  mDescription.value='';
}
const add=()=>{
  const id= Math.ceil(Math.random()*1000);
  const obj={
        id,
        img: mUrl.value,
        nombre:mName.value,
        costo:mValue.value,
        duracion: mDuracion.value,
        cupos: mCupos.value,
        inscritos: mInscritos.value,
        completado: false,
        fecha_registro: mDate.value,
        descripcion: mDescription.value
      }
  store.dispatch('agregar',obj)
  clean();
  agregarToggle.value=false
  }
const cancelar=()=>{
  clean();
  agregarToggle.value=false
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
    <h1 class="text-center">Administración</h1>
    <VBtn  color="blue-darken-4" class="d-block w-25 mx-auto" @click="agregar">Agregar Curso</VBtn>
    <VDialog
      v-model="agregar"
      class="w-50"
      persistent
    >
      <VCard>
        <VCardTitle class="text-blue-darken-4">{{editarToggle?"Editar":"Agregar"}} Curso</VCardTitle>
        <VForm>
          <VTextField
            label="Nombre"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="mName"
          >
          </VTextField>
          <VTextField
            label="URL de la imagen"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="mUrl"
          >
          </VTextField>
          <VTextField
            label="Cupos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            v-model="mCupos"
          >
          </VTextField>
          <VTextField
            label="Inscritos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            v-model="mInscritos"
          >
          </VTextField>
          <VTextField
            label="Duración del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="mDuracion"
          >
          </VTextField>
          <VTextField
            label="Fecha de registro"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="mDate"
          >
          </VTextField>
          <VTextField
            label="Costo del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            v-model="mValue"
          ></VTextField>
          <VTextarea
          label="Descripción"
          variant="underlined"
          color="blue-darken-4"
          class="d-block w-75 mx-auto"
          v-model="mDescription"
          no-resize>
          </VTextarea>
          <VCardActions class="d-block w-75 mx-auto pa-0">
            <VBtn class="bg-green" @click="add">{{editarToggle?"Editar":"Agregar"}}</VBtn>
            <VBtn v-if="!editarToggle" class="bg-yellow" @click="clean">Limpiar</VBtn>
            <VBtn class="bg-red" @click="cancelar">{{editarToggle?"Cerrar":"Cancelar"}}</VBtn>
          </VCardActions>
        </VForm>
      </VCard>
    </VDialog>
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
