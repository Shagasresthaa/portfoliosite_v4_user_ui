<template>
  <div class="contact">
    <WorkInProgressComponent />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import WorkInProgressComponent from "@/components/WorkInProgress.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    FooterComponent,
    WorkInProgressComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/ContactPage.scss";
</style>
