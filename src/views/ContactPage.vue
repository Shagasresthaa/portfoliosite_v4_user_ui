<template>
  <div class="contact">
    <h1>This is Contact Page</h1>
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    FooterComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/ContactPage.scss";
</style>
