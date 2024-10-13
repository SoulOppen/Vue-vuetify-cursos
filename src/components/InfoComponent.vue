<script setup>
import CardInfoComponent from '@/components/CardInfoComponent.vue';
import {computed} from 'vue'
import { useStore } from 'vuex';
const store=useStore();

const cursos=computed(()=>store.state.courses)
const cupos=computed(()=>store.getters.totalCupos)
const inscritos=computed(()=>store.getters.totalInscrito)
const cursosActivos=computed(()=>store.getters.totalCursosActivos)
</script>
<template>
    <CardInfoComponent color="text-blue-darken-4" icon="account-multiple">
        <p>Cantidad total de alumnos permitidos: {{ cupos }} alumnos.</p>
    </CardInfoComponent>
    <CardInfoComponent color="text-blue-lighten-1" icon="account-check">
        <p>Cantidad total de alumnos inscritos: {{ inscritos }} alumnos.</p>
    </CardInfoComponent>
    <CardInfoComponent color="text-red-darken-1" icon="account-plus">
        <p>Cantidad total de cupos restantes: {{ cupos-inscritos }} alumnos.</p>
    </CardInfoComponent>
    <CardInfoComponent color="text-grey-darken-3" icon="cancel">
        <p>Cantidad de cursos terminados: {{cursos.length-cursosActivos}} cursos.</p>
    </CardInfoComponent>
    <CardInfoComponent color="text-red" icon="bell-ring">
        <p>Cantidad total de cursos activos: {{ cursosActivos }} cursos.</p>
    </CardInfoComponent>
    <CardInfoComponent color="text-amber-darken-2" icon="bell-ring">
        <p>Cantidad total de cursos: {{ cursos.length }} cursos.</p>
    </CardInfoComponent>
</template>