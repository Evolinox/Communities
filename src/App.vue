<script setup>
  import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="mainview">
    <Sidebar id="sidebar"/>
    <div class="contentview">
      <RouterView />
    </div>
  </div>
</template>

<style>
  #sidebar {
    width: var(--sidebar-width);
  }

  .contentview {
    height: 100vh;
    width: calc(100vw - var(--sidebar-width));
    position: fixed;
    left: var(--sidebar-width);
    top: 0;
    background-color: var(--background-color-secondary);
  }
</style>