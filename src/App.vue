<script setup>
  import { useDark } from "@vueuse/core"
  import AppSidebar from "./components/AppSidebar.vue";

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
      <AppSidebar id="appSidebar" />
      <div class="contentview">
        <RouterView />
      </div>
    </div>
  </body>
</template>

<style>
  #appSidebar {
    width: var(--app-sidebar-width);
  }

  .contentview {
    height: 100vh;
    width: calc(100vw - var(--app-sidebar-width));
    position: fixed;
    left: var(--app-sidebar-width);
    top: 0;
    background-color: var(--background-color-secondary);
  }
</style>