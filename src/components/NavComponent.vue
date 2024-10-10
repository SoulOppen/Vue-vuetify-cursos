<script setup>


</script>
<template>
    <v-toolbar theme="dark" color='blue-darken-4' class="d-flex justify-space-between">
        <v-btn icon>
            <v-icon color="white">mdi-menu</v-icon>
        </v-btn>
        <VToolbarTitle class="flex-1-0">Cursos AlfaWeb</VToolbarTitle>
        <v-btn icon to="/">
            <v-icon color="white">mdi-home</v-icon>
        </v-btn>
        <v-btn icon to="/cursos">
            <v-icon color="white">mdi-tools</v-icon>
        </v-btn>
    </v-toolbar>
</template>