<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: rgba(10, 25, 47, 0.9)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <font-awesome-icon
          :icon="['fas', 'user-astronaut']"
          size="2xl"
          style="color: #74c0fc; font-size: xx-large"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              @click="changeBackgroundColor('#a4c639', $event)"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
              @click="changeBackgroundColor('#ff6347', $event)"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/projects"
              @click="changeBackgroundColor('#4682b4', $event)"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/blog"
              @click="changeBackgroundColor('#deb887', $event)"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/contact"
              @click="changeBackgroundColor('#5f9ea0', $event)"
              >Contact</router-link
            >
          </li>
        </ul>
        <button
          class="btn btn-outline-success login-btn"
          type="button"
          @click="onLogin"
        >
          <font-awesome-icon icon="user-circle" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserAstronaut,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserAstronaut, faUserCircle);

export default defineComponent({
  name: "AppNavbar",
  components: {
    FontAwesomeIcon,
  },
  methods: {
    onLogin() {
      console.log("Login clicked");
    },
    changeBackgroundColor(color: string, event: MouseEvent) {
      event.preventDefault(); // Prevents the link from navigating immediately
      document.documentElement.style.setProperty("--background-color", color);
      this.$router.push((event.target as HTMLAnchorElement).pathname); // Manually navigate after color change
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/Navbar.scss";
</style>
