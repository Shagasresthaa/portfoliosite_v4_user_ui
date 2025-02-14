<template>
  <div class="projects-showcase">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      v-bind="project"
      :class="['projects-showcase__card', statusClass(project.status)]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "./ProjectCard.vue";

export default defineComponent({
  name: "ProjectsShowcaseComponent",
  components: { ProjectCard },
  setup() {
    const projects = [
      {
        title: "ORBITS Library",
        status: "In Progress",
        description:
          "ORBITS (Orbital Research and Body Interaction Toolkit for Simulations) Library is a C++ API Library designed to simulate and understand orbital mechanics given the observations",
        startDate: "2024-12-25",
        endDate: "Present",
        affiliation: "Independent / Solo",
        imageUrl: require("@/assets/test.png"),
        extendedDescription:
          "ORBITS Library (Orbital Research and Body Interaction Toolkit for Simulations) Library is an API library written in C++ for estimating orbital parameters and enabling simulation of basic orbital mechanics",
      },
      {
        title: "CALMAT Library",
        status: "Planning",
        description:
          "CALMAT_LIB (Calculus and Math API Toolkit) Library is a C++ helper Library for advanced Math functions similar to the standard MATH library but a custom implementation. Scope TBD",
        startDate: "2025-01-27",
        endDate: "Present",
        affiliation: "Independent / Solo",
        imageUrl: require("@/assets/test.png"),
        extendedDescription:
          "CALMAT_LIB (Calculus and Math API Toolkit) Library is an API library written in C++ for helper functions of math such as vector math, calculus functions such as integration, differential equations, matrix math, etc",
      },
      {
        title: "Exoplanet Candidate Detection using Multimodel Neural Networks",
        status: "Completed",
        description:
          "This project is an early attempt to try to classify if a light curve of transit could be an exoplanetary transit candidate",
        startDate: "2024-08-17",
        endDate: "2024-12-13",
        affiliation:
          "Western Michigan University (Class Project for CS 5300 Artifical Neural Systems) / Solo",
        imageUrl: require("@/assets/test.png"),
        extendedDescription:
          "This project is an early attempt to try to classify if a light curve of transit could be an exoplanetary transit candidate. The datasets are obtained from the publicly available TESS (Transiting Exoplanet Survey Satelite) surveys hosted on the MAST portal. It takes into consideration several parameters such as Light Curve of transit, estimated orbital parameters, Image data from the light curve observation time, known / estimated orbital information, etc. It uses a 1-D CNN based Temporal Convolutional Neural Network for identifying telling patters of the Light curve of transit events. It also uses another Convolutional Neural Network trained on the observational images from exact time of the transit to weed out the false positive transit events such as random disruption, instrument errors, Eclipsing Binary Stars, etc. Finally in the pipeline it also utilizes a Denoising Autoencoder designed to clean the incoming light data with the target of maximising the Signal to Noise Ratio increasing the chances of finding previously unknown transit events. Each of the networks are independent components working together to form the final Exoplanetary Detection Pipeline. Due to late errors in the training data caught very late in the training process along with the time constrains for the project, the model failed to acheive sufficient accuracy and was biased towards non-exoplanetary candidates. However the testing metrics showed a promising architecture that can be improved once the data has been properly filtered and model architecture tuned and retrained. An independent rework is in planning to complete the training with new data and possible augmentations to the architecture with the data from newly arrived James Web Space Telescope data and any other surveys aiming to identify exoplanets.",
      },
      {
        title: "E-commerce Store",
        status: "Planning",
        description: "A Vue-powered shopping site.",
        startDate: "2023-06-01",
        endDate: "2023-08-30",
        affiliation: "ShopEase",
        imageUrl: require("@/assets/test.png"),
        extendedDescription:
          "A fully functional e-commerce platform with a product catalog and cart.",
      },
      {
        title: "Chat App",
        status: "Completed",
        description: "A secure chat application.",
        startDate: "2022-05-10",
        endDate: "2022-09-20",
        affiliation: "Tech Connect",
        imageUrl: require("@/assets/test.png"),
        extendedDescription:
          "A real-time chat app supporting encrypted conversations.",
      },
    ];

    const statusClass = (status: string) => {
      switch (status) {
        case "Completed":
          return "status-completed";
        case "In Progress":
          return "status-in-progress";
        case "Planning":
          return "status-planning";
        default:
          return "";
      }
    };

    return { projects, statusClass };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/ProjectShowcaseComponent.scss";
</style>
