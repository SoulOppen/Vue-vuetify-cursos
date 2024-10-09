<script setup>
import {RouterView } from 'vue-router'
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <VApp>
    <NavComponent/>
    <RouterView/>
  </VApp>
</template>

<style scoped>
</style>