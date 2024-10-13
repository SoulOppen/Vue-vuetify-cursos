<script setup>
import {ref,reactive,computed,onMounted} from 'vue'
import { useStore } from 'vuex';
const store=useStore();
const textRules=[
  v => !!v || 'Propiedad requerida',
  v => (v.length >= 3) || 'Min 3 caracteres',
  v => (v.length <= 10) || 'Max 10 caracteres'
]
const numberRules=v => (Number.isInteger(Number(v))) || 'Número tiene que se entero'
const maxPersonas=v => (v<=999) || 'max de personas 999'
const inscritoMenorACupos=v => (Number(v)<=obj.cupos) || 'Inscritos tiene que ser menos que cupos'
const dateFormatRule = v => {
  const datePattern = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
  return datePattern.test(v) || 'Debe ser una fecha en formato dd/mm/yyyy';
}
const maxCosto=v => (Number(v)<=10000000) || 'max costo 10000000'
const minCosto=v => (v>=10000) || 'min costo 10000'
const completadoRule=v => {
  if (typeof v === 'string') {
    return (v.toLowerCase() === 'false' || v.toLowerCase() === 'true') || 'Debe ser "true" o "false"';
  }
  return (v===false || v===true) || 'true or false'
};
const emits=defineEmits(['cerrarEditar'])
const props=defineProps({
  id:{
    type:Number,
    Required:true
  }
})
const valid = ref(false);
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

  const keys=Object.keys(obj);
  for(let key of keys){
    obj[key]=curso.value[key]
  }
}
const edit=()=>{
  if (valid.value) {
    if (typeof obj.completado=== 'string' ) {
      obj.completado= obj.completado.toLowerCase()==='true';
  }
  store.dispatch('edit',obj)
  emits('cerrarEditar','Se edito un curso')
  }
  else{
    alert(valid.value)
  }
}
const cancelar=()=>{
  emits('cerrarEditar')
  }
onMounted(()=>update())
</script>
<template>
      <VCard>
        <VCardTitle class="text-green-darken-4">Editar Curso</VCardTitle>
        <VForm v-model="valid">
          <VTextField
            label="Nombre"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            required
            v-model="obj.nombre"
          >
          </VTextField>
          <VTextField
            label="URL de la imagen"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            required
            v-model="obj.img"
          >
          </VTextField>
          <VTextField
            label="Cupos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            type="number"
            :rules="[numberRules,maxPersonas]"
            required
            v-model="obj.cupos"
          >
          </VTextField>
          <VTextField
            label="Inscritos del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            type="number"
            :rules="[numberRules,maxPersonas,inscritoMenorACupos]"
            v-model="obj.inscritos"
          >
          </VTextField>
          <VTextField
            label="Duración del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            :rules="textRules"
            v-model="obj.duracion"
          >
          </VTextField>
          <VTextField
            label="Fecha de registro"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            :rules="[...textRules,dateFormatRule]"
            required
            v-model="obj.fecha_registro"
          >
          </VTextField>
          <VTextField
            label="Costo del curso"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            type="number"
            :rules="[numberRules,maxCosto,minCosto]"
            v-model="obj.costo"
          ></VTextField>
          <VTextField
            label="Completado"
            class="d-block w-75 mx-auto"
            variant="underlined"
            color="green-darken-4"
            :rules="[completadoRule]"
            required
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
            <VBtn class="bg-green" :disabled="!valid" @click="edit">Editar</VBtn>
            <VBtn class="bg-red" @click="cancelar">Cerrar</VBtn>
          </VCardActions>
        </VForm>
      </VCard>
</template>