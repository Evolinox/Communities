<script setup>
    import ServerSidebar from '../components/ServerSidebar.vue';
    defineProps({id: String});
</script>

<template>
    <div class="serverview">
        <ServerSidebar id="serverSidebar" />
        <h1>Serverview for {{ id }}</h1>
    </div>
</template>

<style>
  #serverSidebar {
    width: var(--server-sidebar-width);
  }
</style>