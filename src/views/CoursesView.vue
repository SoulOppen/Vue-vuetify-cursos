<script setup>
import DialogAddComponent from '@/components/DialogAddComponent.vue';
import DialogEditComponent from '@/components/DialogEditComponent.vue';
import DialogConfirmDeleteComponent from '@/components/DialogConfirmDeleteComponent.vue';
import TableItemComponent from '@/components/TableItemComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import {ref,computed} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const message=ref('')
const colorMessage=ref('blue-darken-4')
const agregarToggle=ref(false)
const editarToggle=ref(false)
const confirmToggle=ref(false)
const editarId=ref("")
const confirmId=ref("")
const cursos=computed(()=>store.state.courses)
const agregar=()=>{
  agregarToggle.value=true;
}
const agregarCerrar=(e)=>{
  if(e){
    message.value=e;
    colorMessage.value="blue-darken-4"
  }
  agregarToggle.value=false;
  cerrarAlert();
}

const edit=(e)=>{
  editarId.value=e;
  editarToggle.value=true;
}
const editarCerrar=(e)=>{
  if(e){
    message.value=e;
    colorMessage.value="green-darken-4"
  }
  editarToggle.value=false;
  cerrarAlert();
}
const eliminar=(e)=>{
  confirmId.value=e;
  confirmToggle.value=true;
}
const eliminarCerrar=(e)=>{
  if(e){
    message.value=e;
    colorMessage.value="red"
  }
  confirmToggle.value=false;
  cerrarAlert();
}
const cerrarAlert=()=>{
  setTimeout(()=>{
    message.value=''
  },3000)
}
</script>

<template>
  <main>
    <v-alert v-if="message!==''" closable variant="tonal" :color="colorMessage">
      <p class="text-center">{{ message }}</p>
    </v-alert>
    <VDialog
      v-model="agregarToggle"
      class="w-50"
      persistent
      >
      <DialogAddComponent @cerrar-agregar="agregarCerrar"/>
    </VDialog>
    <VDialog
      v-model="editarToggle"
      class="w-50"
      persistent
      >
      <DialogEditComponent :id="editarId" @cerrar-editar="editarCerrar"/>
    </VDialog>
    <VDialog
      v-model="confirmToggle"
      class="w-50"
      persistent
      >
      <DialogConfirmDeleteComponent v-if="confirmToggle" :id="confirmId" @cerrarConfirmar="eliminarCerrar"/>
    </VDialog>
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
      <TableItemComponent v-for="curso in cursos" :key="curso.id" :id="curso.id" @editar="edit" @borrar="eliminar"/>
    </tbody>
    <tbody v-else>
      <tr>
        <td  class="text-center font-weight-bold" colspan="8">
          No existen cursos
        </td>
      </tr>
    </tbody>
  </VTable>
  <v-divider class="border-opacity-75 w-75 mx-auto" color="grey-darken-1"></v-divider>
  <InfoComponent/>
  </main>
</template>

