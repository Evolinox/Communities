<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="sidebar">

    </div>
</template>

<style>
    .sidebar {
        height: 100vh;
        width: var(--sidebar-width);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: var(--background-color-primary);
        overflow-x: hidden;
    }
</style>