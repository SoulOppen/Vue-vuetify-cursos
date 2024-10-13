<script setup>
import {ref} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const emits=defineEmits(['cerrarConfirmar'])
const props=defineProps({
  id:{
    type:Number,
    Required:true
  }
})
const confirmar=()=>{
  store.dispatch('deleteCourse',props)
  emits('cerrarConfirmar','Se elimino un curso')
  }
const cancelar=()=>{
  emits('cerrarConfirmar')
  }
</script>
<template>
   <VCard>
      <VCardTitle class="text-green-darken-4">Confirmar eliminar</VCardTitle>
      <div class="d-flex pa-2">
        <VBtn class="bg-green mx-2" @click="confirmar">Confirmar</VBtn>
        <VBtn class="bg-red mx-2" @click="cancelar">Cancelar</VBtn>
      </div>
    </VCard>
</template>