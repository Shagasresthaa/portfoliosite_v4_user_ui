<template>
  <div id="app">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavbar from "./components/AppNavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavbar,
  },
});
</script>

<style>
:root {
  --background-color: #f4f4f9; /* Default background color */
}

html body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color); /* Use the CSS variable */
  font-family: "Source Sans Pro", sans-serif;
}
</style>
