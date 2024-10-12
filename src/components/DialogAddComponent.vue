<script setup>
import {ref,reactive} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const emits=defineEmits(['cerrarAgregar']);
const open=ref(true);
let obj=reactive(
  {
    "id": "",
    "img": "",
    "nombre": "",
    "costo": "",
    "duracion": "",
    "cupos": "",
    "inscritos": "",
    "completado": "",
    "fecha_registro":"",
    "descripcion": ""
    }
  )
const clean=()=>{
    const keys=Object.keys(obj).filter((item)=>item!=="id"&&item!=="completado");
    for(let key of keys){
        obj[key]="";
    }
}

const add=()=>{
  obj.id= Math.ceil(Math.random()*1000);
  obj.completado=false
  store.dispatch('agregar',obj)
  emits('cerrarAgregar')
  }
const cancelar=()=>{
  emits('cerrarAgregar')
  }
</script>
<template>
    <VDialog
        v-model="open"
      class="w-50"
      persistent
    >
      <VCard>
        <VCardTitle class="text-blue-darken-4">Agregar Curso</VCardTitle>
        <VForm>
          <VTextField
            label="Nombre"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="obj.nombre"
          >
          </VTextField>
          <VTextField
            label="URL de la imagen"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="obj.img"
          >
          </VTextField>
          <VTextField
            label="Cupos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            v-model="obj.cupos"
          >
          </VTextField>
          <VTextField
            label="Inscritos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            v-model="obj.inscritos"
          >
          </VTextField>
          <VTextField
            label="Duración del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="obj.duracion"
          >
          </VTextField>
          <VTextField
            label="Fecha de registro"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            v-model="obj.fecha_registro"
          >
          </VTextField>
          <VTextField
            label="Costo del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            v-model="obj.costo"
          ></VTextField>
          <VTextarea
          label="Descripción"
          variant="underlined"
          color="blue-darken-4"
          class="d-block w-75 mx-auto"
          v-model="obj.descripcion"
          no-resize>
          </VTextarea>
          <VCardActions class="d-block w-75 mx-auto pa-0">
            <VBtn class="bg-green" @click="add">Agregar</VBtn>
            <VBtn class="bg-yellow" @click="clean">Limpiar</VBtn>
            <VBtn class="bg-red" @click="cancelar">Cancelar</VBtn>
          </VCardActions>
        </VForm>
      </VCard>
    </VDialog>
</template>