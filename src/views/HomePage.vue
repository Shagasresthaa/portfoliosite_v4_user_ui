<template>
  <div class="home">
    <AppNavbar class="navbar" />
    <div class="content-area">
      <img
        src="@/assets/propic.jpg"
        alt="Profile Picture"
        class="profile-pic"
      />
      <h5 class="hintro h1">Greetings! My name is</h5>
      <h1 class="bintro display-1">Shaga Sresthaa</h1>
      <div class="cont display-6">
        <p>Graduate Student @ Western Michigan University</p>
        <p>
          Member of The Planetary Society || TCS Alumni || Full Stack Developer
        </p>
        <p>Astronomy and Electronics Enthusiast</p>
      </div>
      <div class="lnks">
        <a
          href="https://www.linkedin.com/in/sresthaa-shaga-a5329b154"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/Shagasresthaa" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1-rgNLOmNlwts84TTxz5ewItxeTlhfHj2/view?usp=sharing"
          target="_blank"
        >
          <i class="far fa-file-pdf fa-2x"></i>
        </a>
        <a
          href="https://drive.google.com/drive/folders/1bs98W8ON9Rfk_zj_zmxD6dYAP14xQQht?usp=sharing"
          target="_blank"
        >
          <i class="fas fa-award fa-2x"></i>
        </a>
      </div>
    </div>
    <FooterComponent class="footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import AppNavbar from "@/components/AppNavbar.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    FooterComponent,
    AppNavbar,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/HomePage.scss";
</style>
