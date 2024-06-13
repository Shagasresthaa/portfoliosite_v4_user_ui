<template>
  <div class="blog">
    <h1>This is Blog Page</h1>
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "BlogPage",
  components: {
    FooterComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/BlogPage.scss";
</style>
