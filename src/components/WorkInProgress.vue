<template>
  <div class="work-in-progress-wrapper">
    <div class="top-bar"></div>
    <div class="work-in-progress">
      <p class="display-1"><b>Work in Progress</b></p>
    </div>
    <div class="bottom-bar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkInProgressComponent",
});
</script>

<style scoped lang="scss">
@import "@/styles/WorkInProgress.scss";
</style>
