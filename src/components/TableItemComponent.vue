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
const completado=computed(()=>curso.value.completado? 'si':'no');
const classCompletado=computed(()=>curso.value.completado? 'bg-blue':'bg-grey')
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
            <div class="rounded-pill bg-green text-white text-center pa-2">
                ${{curso.costo}}
            </div>
        </td>
        <td>
            <div class="d-block rounded-pill w-75 text-white text-center pa-2 mx-auto" :class="classCompletado">
                {{ completado}}
            </div>
        </td>
        <td>
            <div class="rounded-pill bg-green text-white text-center pa-2">
                {{ curso.fecha_registro}}
            </div>
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