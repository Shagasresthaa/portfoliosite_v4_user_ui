<template>
  <div class="about">
    <h1>This is About Page</h1>
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "AboutPage",
  components: {
    FooterComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/AboutPage.scss";
</style>
