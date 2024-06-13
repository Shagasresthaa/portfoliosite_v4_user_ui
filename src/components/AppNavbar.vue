<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <font-awesome-icon
          :icon="['fas', 'user-astronaut']"
          size="2xl"
          style="color: #ffffff; font-size: xx-large"
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
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
        <button class="btn login-btn" type="button" @click="onLogin">
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
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/Navbar.scss";
</style>
