<template>
  <div class="home d-flex flex-column">
    <div class="introsec text-center">
      <div class="introbio">
        <div class="headerin">
          <h5 class="hintro h1">Greetings! My name is</h5>
        </div>
        <div class="bodyin">
          <h1 class="bintro display-1">Shaga Sresthaa</h1>
        </div>
        <div class="cont">
          <p class="mcont"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style scoped lang="scss">
@import "@/styles/HomePage.scss";
</style>
