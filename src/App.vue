<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppNavbar />
    <router-view class="flex-grow-1" />
    <footer class="footer mt-auto py-3 w-100 text-center">
      <div class="container">
        <span class="text-center"><b>© Shaga Sresthaa, 2024</b></span>
        <span class="fhead">
          <a
            href="https://www.digitalocean.com/?refcode=85f458f92f16&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
            ><img
              src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%202.svg"
              alt="DigitalOcean Referral Badge"
              class="flogo"
          /></a>
          <br />
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavbar from "./components/AppNavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavbar,
  },
});
</script>

<style>
:root {
  --background-color: #0a3a62;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color) !important;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  font-family: "Pacifico", cursive !important;
  color: white;
  font-size: larger;
  text-align: center;
  padding: 1rem 0;
  background-color: rgba(10, 25, 47, 0.5) !important;
  width: 100%;
}

.fhead {
  padding: 0.5rem;
}
.flogo {
  padding-left: 1rem;
}
</style>
