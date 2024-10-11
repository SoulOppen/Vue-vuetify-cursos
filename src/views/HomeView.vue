<script setup>
import CardComponent from '@/components/CardComponents.vue';
import {computed} from 'vue';
import { useStore } from 'vuex';
const store=useStore();
const cursos=computed(()=>store.state.courses)
</script>

<template>
  <main>
    <h1 class="text-center">Lista de cursos</h1>
    <VRow class="w-75 my-3 mx-auto">
      <VCol
      v-for="curso in cursos"
      :key="curso.id"
      cols="4">
        <CardComponent :id="curso.id"/>
      </VCol>
    </VRow>
  </main>
</template>
<style scoped>
  .grid{
    display: grid;
    grid-template-columns: repeat(1,1fr);
  }
</style>
