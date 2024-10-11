<script setup>
import {ref} from 'vue';
const prop=defineProps({
    color:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    }
})
</script>
<template>
    <div class="d-flex w-75 mx-auto my-4 align-center borde pa-2" :class="prop.color">
        <VIcon>
            mdi-{{ prop.icon }}
        </VIcon>
        <div class="ps-2">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.borde{
    border: 1px solid currentColor;
}
</style>