<script setup>
import {ref,reactive} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const emits=defineEmits(['cerrarAgregar']);
const textRules=[
  v => !!v || 'Propiedad requerida',
  v => (v.length >= 3) || 'Min 3 caracteres',
  v => (v.length <= 10) || 'Max 10 caracteres'
]
const numberRules=[
  v => !!v || 'Propiedad requerida',
  v => (Number.isInteger(Number(v))) || 'Número tiene que se entero'
]
const maxPersonas=v => (v<=999) || 'max de personas 999'
const inscritoMenorACupos=v => (Number(v)<=obj.cupos) || 'Inscritos tiene que ser menos que cupos'
const dateFormatRule = v => {
  const datePattern = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
  return datePattern.test(v) || 'Debe ser una fecha en formato dd/mm/yyyy';
}
const maxCosto=v => (Number(v)<=10000000) || 'max costo 10000000'

const minCosto=v => (v>=10000) || 'min costo 10000'
const valid = ref(false);
let obj=reactive(
  {
    "id": "",
    "img": "",
    "nombre": "",
    "costo": "",
    "duracion": "",
    "cupos": "",
    "inscritos":"",
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
  if (valid.value) {
  obj.id= Math.ceil(Math.random()*1000);
  obj.completado=false
  store.dispatch('agregar',obj)
  emits('cerrarAgregar')
  alert('add')
  }
  else{
    alert(valid.value)
  }
}
const cancelar=()=>{
  emits('cerrarAgregar')
  }
</script>
<template>

      <VCard>
        <VCardTitle class="text-blue-darken-4">Agregar Curso</VCardTitle>
        <VForm v-model="valid">
          <VTextField
            label="Nombre"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            required
            v-model="obj.nombre"
          >
          </VTextField>
          <VTextField
            label="URL de la imagen"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            required
            v-model="obj.img"
          >
          </VTextField>
          <VTextField
            label="Cupos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            :rules="[...numberRules,maxPersonas]"
            required
            v-model="obj.cupos"
          >
          </VTextField>
          <VTextField
            label="Inscritos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            :rules="[...numberRules,maxPersonas,inscritoMenorACupos]"
            required
            v-model="obj.inscritos"
          >
          </VTextField>
          <VTextField
            label="Duración del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            :rules="textRules"
            required
            v-model="obj.duracion"
          >
          </VTextField>
          <VTextField
            label="Fecha de registro"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            :rules="[...textRules,dateFormatRule]"
            required
            v-model="obj.fecha_registro"
          >
          </VTextField>
          <VTextField
            label="Costo del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="blue-darken-4"
            type="number"
            :rules="[...numberRules,maxCosto,minCosto]"
            required
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
            <VBtn class="bg-green" :disabled="!valid" @click="add">Agregar</VBtn>
            <VBtn class="bg-yellow" @click="clean">Limpiar</VBtn>
            <VBtn class="bg-red" @click="cancelar">Cancelar</VBtn>
          </VCardActions>
        </VForm>
      </VCard>
</template>