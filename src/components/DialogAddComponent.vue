<script setup>
import {ref} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const emits=defineEmits(['cerrarAgregar']);
const open=ref(true);
const mName=ref('');
const mUrl=ref('');
const mCupos=ref('');
const mInscritos=ref('');
const mDuracion=ref('');
const mDate=ref('');
const mValue=ref('');
const mDescription=ref('');
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
            <VBtn class="bg-green" @click="add">Agregar</VBtn>
            <VBtn class="bg-yellow" @click="clean">Limpiar</VBtn>
            <VBtn class="bg-red" @click="cancelar">Cancelar</VBtn>
          </VCardActions>
        </VForm>
      </VCard>
    </VDialog>
</template>