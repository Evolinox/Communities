<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="sidebar">

        <!-- Explore Button -->
        <div class="sidebar-explore">
            <RouterLink to="/explore">Explore</RouterLink>
        </div>

        <!-- Divider -->
        <div class="sidebar-divider"></div>

        <!-- Communities Buttons -->
        <div class="sidebar-communities">
            <!-- filled by JS -->

            <!-- Testserver -->
            <RouterLink to="/server/823h2842029j">Demo</RouterLink>
        </div>

        <!-- Divider -->
        <div class="sidebar-divider"></div>

        <!-- Join Button -->
        <div class="sidebar-bottom">
            <RouterLink to="/settings">Settings</RouterLink>
        </div>
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