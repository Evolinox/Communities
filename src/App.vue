<script setup>
  import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Sidebar id="sidebar"/>
  <div class="contentview">
    <RouterView />
  </div>
</template>

<style>
  #sidebar {
    width: 70px;
  }

  .contentview {
    height: 100%;
    width: calc(100% - 70px);
    position: fixed;
    left: 70px;
    top: 0;
    background-color: rgb(40,40,40);
  }
</style>