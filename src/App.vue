<script setup>
  import { useDark } from "@vueuse/core"
  import Sidebar from "./components/Sidebar.vue";

  const isDark = useDark({
    selector: "body",
    attribute: "theme",
    valueDark: "dark",
    valueLight: "light"
  })
</script>

<template>
  <body theme=" isDark ? 'dark' : 'light' ">
    <div class="mainview">
      <Sidebar id="sidebar" />
      <div class="contentview">
        <RouterView />
      </div>
    </div>
  </body>
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