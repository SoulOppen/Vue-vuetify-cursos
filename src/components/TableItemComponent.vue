<script setup>
import {computed} from 'vue';
import { useStore } from 'vuex';
const store=useStore()
const prop=defineProps({
    id:{
        type:Number,
        required:true
    }
})
const curso=computed(()=>store.getters.findCourse(prop.id));
console.log(curso,curso.completado)
const completado=computed(()=>curso.value.completado? 'si':'no');
</script>
<template>
    <tr>
        <td>
            {{ curso.nombre }}
        </td>
        <td>
            {{ curso.cupos }}
        </td>
        <td>
            {{ curso.inscritos }}
        </td>
        <td>
            {{ curso.duracion}}
        </td>
        <td>
            {{curso.costo}}
        </td>
        <td>
            {{ completado}}
        </td>
        <td>
            {{ curso.fecha_registro}}
        </td>
        <td>
            <VBtnGroup class="px-4 py-2">
                <VBtn icon>
                    <VIcon color="green">mdi-pencil</VIcon>
                </VBtn>
                <VBtn  icon>
                    <VIcon color="red">mdi-delete</VIcon>
                </VBtn>
            </VBtnGroup>
        </td>
    </tr>
</template>