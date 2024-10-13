<script setup>
import {reactive,computed,onMounted} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const emits=defineEmits(['cerrarEditar'])
const props=defineProps({
  id:{
    type:Number,
    Required:true
  }
})
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
const curso=computed(()=>store.getters.findCourse(props.id))
const update=()=>{
  console.log('update',curso.value)
  const keys=Object.keys(obj);
  for(let key of keys){
    obj[key]=curso.value[key]
  }
}
const edit=()=>{
  store.dispatch('edit',obj)
  emits('cerrarEditar')
  }
const cancelar=()=>{
  emits('cerrarEditar')
  }
onMounted(()=>update())
</script>
<template>
      <VCard>
        <VCardTitle class="text-green-darken-4">Editar Curso</VCardTitle>
        <VForm>
          <VTextField
            label="Nombre"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            v-model="obj.nombre"
          >
          </VTextField>
          <VTextField
            label="URL de la imagen"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            v-model="obj.img"
          >
          </VTextField>
          <VTextField
            label="Cupos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            type="number"
            v-model="obj.cupos"
          >
          </VTextField>
          <VTextField
            label="Inscritos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            type="number"
            v-model="obj.inscritos"
          >
          </VTextField>
          <VTextField
            label="Duración del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            v-model="obj.duracion"
          >
          </VTextField>
          <VTextField
            label="Fecha de registro"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            v-model="obj.fecha_registro"
          >
          </VTextField>
          <VTextField
            label="Costo del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            type="number"
            v-model="obj.costo"
          ></VTextField>
          <VTextField
            label="Completado"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            v-model="obj.completado"
          ></VTextField>
          <VTextarea
          label="Descripción"
          variant="underlined"
          color="green-darken-4"
          class="d-block w-75 mx-auto"
          v-model="obj.descripcion"
          no-resize>
          </VTextarea>
          <VCardActions class="d-block w-75 mx-auto pa-0">
            <VBtn class="bg-green" @click="edit">Editar</VBtn>
            <VBtn class="bg-red" @click="cancelar">Cerrar</VBtn>
          </VCardActions>
        </VForm>
      </VCard>
</template>