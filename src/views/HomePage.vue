<template>
  <div class="home">
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
          Astronomy & Electronics Enthusiast || TCS Alumni || Full Stack
          Developer
        </p>
        <p>
          Member of The Planetary Society || Member of the Society of Amateur
          Radio Astronomers
        </p>
      </div>
      <div class="lnks">
        <a
          id="cy-effective-orcid-url"
          class="underline"
          href="https://orcid.org/0009-0000-8522-4887"
          target="orcid.widget"
          rel="me noopener noreferrer"
          style="vertical-align: top"
        >
          <i class="fab fa-orcid fa-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sresthaa-shaga-a5329b154"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-2xl"></i>
        </a>
        <a href="https://github.com/Shagasresthaa" target="_blank">
          <i class="fab fa-github fa-2xl"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/13PJt4xrrdotOcVET3wA536C4uIQ-rJI0/view?usp=sharing"
          target="_blank"
        >
          <i class="far fa-file-pdf fa-2xl"></i>
        </a>
        <a
          href="https://drive.google.com/drive/folders/1bs98W8ON9Rfk_zj_zmxD6dYAP14xQQht?usp=sharing"
          target="_blank"
        >
          <i class="fas fa-award fa-2xl"></i>
        </a>
        <a href="https://steamcommunity.com/id/maverick_017/" target="_blank">
          <i class="fab fa-steam fa-2xl"></i>
        </a>
      </div>
    </div>
    <FooterComponent class="footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    FooterComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/HomePage.scss";
</style>
