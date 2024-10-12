<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
const store=useStore();
const prop=defineProps({
    id:{
        type:Number,
        required:true
    }
})
const curso=computed(()=>store.getters.findCourse(prop.id))
</script>
<template>
    <VCard>
        <VImg :src="curso.img" class="w-75 my-4 mx-auto" height="5rem"></VImg>
        <VCardTitle>{{curso.nombre}}</VCardTitle>
        <VCardSubtitle>Información</VCardSubtitle>
        <div class="pa-4">
            <VCardItem class="pa-0 ma-0">
                <div class="d-flex w-75 align-center justify-space-between mx-auto my-border">
                    <div class="size even"></div>
                    <div class="flex1 my-2">
                        <p>Costo:<span>{{curso.costo}}</span></p>
                        <p>Duración:<span>{{curso.duracion}}</span></p>
                    </div>
                </div>
            </VCardItem>
            <VCardItem class="pa-0 ma-0">
                <div class="d-flex w-75 align-center justify-space-between mx-auto  my-border">
                    <div class="size"></div>
                <div class="flex1 my-2">
                    <p>Cupos:<span>{{curso.cupos}}</span></p>
                    <p>Completado:<span>{{curso.completado?'Sí':'No'}}</span></p>
                </div>
            </div>
            </VCardItem>
            <VCardItem class="pa-0 ma-0">
                <div class="d-flex w-75 align-center justify-space-between mx-auto  my-border">
                    <div class="size even"></div>
                    <div class="flex1 my-2">
                        <p>Fecha de registro:</p>
                        <p>{{curso.fecha_registro}}</p>
                    </div>
                </div>
            </VCardItem>
            <VCardItem class="pa-0 ma-0">
                <div class="d-flex w-75 align-center justify-space-between mx-auto  my-border">
                    <div class="size"></div>
                <div class="flex1 my-2">
                    <p>Descripción:</p>
                    <p class="text-justify">{{curso.descripcion}}</p>
                </div>
            </div>
            </VCardItem>
        </div>
    </VCard>
</template>
<style scoped>
    .my-border{
        border-left: 1px solid black;
    }
    .size{
        border:5px solid white;
        border-radius: 100%;
        aspect-ratio: 1/1;
        width: 20%;
        background-color: darkolivegreen;
        transform: translateX(-50%);
        box-shadow: 0 0 2px black;
    }
   .size.even{
    background-color:darkblue;
   }
    .flex1{
        flex: 1;
    }
</style>