<template>
  <div id="app">
    <BackgroundComponent />
    <AppNavbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavbar from "./components/AppNavbar.vue";
import BackgroundComponent from "./components/BackgroundComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavbar,
    BackgroundComponent,
  },
});
</script>

<style lang="scss">
@import "@/styles/App.scss";
</style>
