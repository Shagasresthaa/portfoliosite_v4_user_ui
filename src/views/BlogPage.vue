<template>
  <div class="blog">
    <WorkInProgressComponent />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import WorkInProgressComponent from "@/components/WorkInProgress.vue";

export default defineComponent({
  name: "BlogPage",
  components: {
    FooterComponent,
    WorkInProgressComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/BlogPage.scss";
</style>
