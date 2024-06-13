<template>
  <div class="projects">
    <h1>This is Projects Page</h1>
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "ProjectsPage",
  components: {
    FooterComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/ProjectsPage.scss";
</style>
