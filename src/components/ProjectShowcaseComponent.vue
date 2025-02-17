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
        imageUrl: require("@/assets/orbits_lib.png"),
        // Image source from vexels.com Image Source: <a href='https://www.vexels.com/png-svg/preview/237959/planets-orbit-stroke'>vexels.com</a>
        attribution:
          "Image Source: <a href='https://www.vexels.com/png-svg/preview/237959/planets-orbit-stroke'>vexels.com</a>",
        extendedDescription:
          "ORBITS Library (Orbital Research and Body Interaction Toolkit for Simulations) Library is an API library written in C++. This project aims to provide an accurate enough API to simulate and research orbits and orbital mechanics and personally a way to understand better the 2-body, 3 body and N-body problems",
        projectUrl: "https://github.com/Shagasresthaa/ORBITS_Library",
      },
      {
        title: "CALMAT Library",
        status: "Planning",
        description:
          "CALMAT_LIB (Calculus and Math API Toolkit) Library is a C++ helper Library for advanced Math functions similar to the standard MATH library but a custom implementation. Scope TBD",
        startDate: "2025-01-27",
        endDate: "Present",
        affiliation: "Independent / Solo",
        imageUrl: require("@/assets/calmat_lib.png"),
        // Image source from PNG TREE: <a href='https://pngtree.com/freepng/differential-calculus-math-doodle-idea_6888561.html'>png image from pngtree.com/</a>
        attribution:
          "Image Source: <a href='https://pngtree.com/freepng/differential-calculus-math-doodle-idea_6888561.html'>png image from pngtree.com/</a>",
        extendedDescription:
          "CALMAT_LIB (Calculus and Math API Toolkit) Library is an API library written in C++ for helper functions of math such as vector math, calculus functions such as integration, differential equations, matrix math, etc. Scope to be determined as project starts and progresses.",
      },
      {
        title:
          "Exoplanet Candidate Detection using Multimodel Neural Networks and TESS Transit Data",
        status: "Completed",
        description:
          "This project is an early attempt to try to identify if a given transit could be an exoplanetary transit candidate",
        startDate: "2024-08-17",
        endDate: "2024-12-13",
        affiliation:
          "Western Michigan University (Class Project for CS 5300 Artifical Neural Systems) / Solo",
        imageUrl: require("@/assets/exoplanet.jpg"),
        // Image source fron NASA: https://images.nasa.gov/details/NHQ201803280022
        attribution:
          "Image Source: https://images.nasa.gov/details/NHQ201803280022",
        extendedDescription:
          "This project is an early attempt to try to classify if a light curve of transit could be an exoplanetary transit candidate. The datasets are obtained from the publicly available TESS (Transiting Exoplanet Survey Satelite) surveys hosted on the MAST portal. It takes into consideration several parameters such as Light Curve of transit, estimated orbital parameters, Image data from the light curve observation time, known / estimated orbital information, etc. It uses a 1-D CNN based Temporal Convolutional Neural Network for identifying telling patters of the Light curve of transit events. It also uses another Convolutional Neural Network trained on the observational images from exact time of the transit to weed out the false positive transit events such as random disruption, instrument errors, Eclipsing Binary Stars, etc. Finally in the pipeline it also utilizes a Denoising Autoencoder designed to clean the incoming light data with the target of maximising the Signal to Noise Ratio increasing the chances of finding previously unknown transit events. Each of the networks are independent components working together to form the final Exoplanetary Detection Pipeline. Due to late errors in the training data caught very late in the training process along with the time constrains for the project, the model failed to acheive sufficient accuracy and was biased towards non-exoplanetary candidates. However the testing metrics showed a promising architecture that can be improved once the data has been properly filtered and model architecture tuned and retrained. An independent rework is in planning to complete the training with new data and possible augmentations to the architecture with the data from newly arrived James Web Space Telescope data and any other surveys aiming to identify exoplanets.",
        projectUrl:
          "https://github.com/Shagasresthaa/ExoplanetDetectionNetwork",
      },
      {
        title:
          "Astronomical Objects Classification using Neural Networks and SDSS Data",
        status: "Completed",
        description:
          "A hybrid deep learning solution to attempt to identify and automate the classification of astronomical objects in massive datasets such as SDSS",
        startDate: "2024-01-15",
        endDate: "2024-04-18",
        affiliation:
          "Western Michigan University (Class Project for CS 5000 Machine Learning) / Group",
        imageUrl: require("@/assets/astro.jpg"),
        // Image source fron NASA: https://images.nasa.gov/details/PIA16114
        attribution: "Image Source: https://images.nasa.gov/details/PIA16114",
        extendedDescription:
          "This project leverages advanced Machine Learning (ML) techniques and Convolutional Neural Networks (CNNs) to automate the classification of astronomical objects within the Sloan Digital Sky Survey (SDSS). By developing sophisticated models capable of accurately identifying galaxies, stars, and quasars, we aim to significantly enhance the efficiency of analyzing extensive astronomical data. Traditional classification methods, often labor-intensive and time-consuming, are streamlined through our approach, potentially accelerating discovery rates in the vast datasets of celestial data. The successful application of ML and CNNs in this project not only demonstrates their effectiveness in complex classification tasks but also sets a precedent for their broader application across scientific fields. This practical effort shows the usefulness of these technologies in the bulk classification of celestial data, paving the way for future advancements in automated systems in astronomical research. Ongoing improvements to these models aim to boost the accuracy and efficiency of data analysis, supporting consistent progress and practical innovations in studying the cosmos.",
        projectUrl:
          "https://github.com/Shagasresthaa/AstronomicalObjectsClassifier",
      },
      {
        title: "IoT based Weather Monitoring System",
        status: "Completed",
        description:
          "An IoT Node Network for monitoring Weather using custom IoT hardware based off ESP-32",
        startDate: "2021-02-1",
        endDate: "2021-09-15",
        affiliation: "Independent Final Year Project / Solo",
        // Image Source: Me :) its the original IoT node image
        imageUrl: require("@/assets/iot.jpg"),
        extendedDescription:
          "An IoT node network designed to collect weather data far more locally specific to the area rather than weather stations which give for a wider area. Metrics collected included common factors like Temperature, Humidity, etc but also included UV intensity sensors, Barometric Pressure, etc. Everything was powered by an ESP-32 microcontroller family and firmware used MicroPython. The API and Monitoring panel used Django hosted on Heroku platform. Possible extensions included an AQI sensor for local Air Quality conditions, Secondary backup power unit for primary supply failures acting as a UPS and a GPS module to determine a node location rather than relying on the ISP to get the location data which all were not included due to time constrains. Future upgrade and complete overhaul of the tech stack was planned and executed but was halted midway due to other responsibilities.",
        projectUrl:
          "https://github.com/Shagasresthaa/IoT-based-Weather-Monitoring-System/tree/legacy",
      },
      {
        title: "COVID - 19 Data Monitoring Application and Data Analytics",
        status: "Completed",
        description:
          "Website showcasing the spread of COVID 19 using API and public sources web scraping and also displaying Analytics performed on data gathered",
        startDate: "2020-08",
        endDate: "2020-03",
        affiliation: "I Assist Innovation Labs / Group",
        imageUrl: require("@/assets/cv19.png"),
        // Image Source: https://www.amprogress.org/wp-content/uploads/2020/03/Microbes-2-800x450.png
        attribution:
          "Image source: https://www.amprogress.org/wp-content/uploads/2020/03/Microbes-2-800x450.png",
        extendedDescription:
          "Worked on a Django based web application showcasing the spread of COVID - 19 at the time. Primarily designed for showcasing the data analytics being performed and analysis of common factors leading to the spread of virus. The data sources were primarily public API's and Web scrapping to extract info related to daily spread and all was hosted on Heroku Platform.",
      },
      {
        title: "Pacman 3D (3D Assets / Material Shading and Animations)",
        status: "Completed",
        description: "A 3D version of pacman game with a powered twist",
        startDate: "2019-06",
        endDate: "2019-05",
        affiliation: "CoreGlobal IT Internship / Group",
        imageUrl: require("@/assets/pac1.jpg"),
        extendedDescription:
          "Worked and helped build a 3D variation on the classic Pacman Game built in Unity 3D engine and assets designed in Blender. Worked primarily on the 3D assets part and handling texturing and shading in Unity engine",
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
