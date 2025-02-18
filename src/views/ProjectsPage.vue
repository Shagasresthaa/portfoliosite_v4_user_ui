<template>
  <div class="projects">
    <ProjectShowcaseComponent />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProjectShowcaseComponent from "@/components/ProjectShowcaseComponent.vue";

export default defineComponent({
  name: "ProjectsPage",
  components: {
    FooterComponent,
    ProjectShowcaseComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/ProjectsPage.scss";
</style>
