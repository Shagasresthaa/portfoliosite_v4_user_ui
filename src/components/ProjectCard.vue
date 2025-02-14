<template>
  <div class="project-card">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Project image"
      class="project-card__image"
    />
    <div class="project-card__content">
      <h2 class="project-card__title">{{ title }}</h2>
      <h2 class="project-card__status">{{ status }}</h2>
      <p class="project-card__affiliation">
        <b>Affiliation:</b> {{ affiliation }}
      </p>
      <p class="project-card__dates">{{ startDate }} - {{ endDate }}</p>
      <p class="project-card__description">{{ description }}</p>
      <a
        v-if="projectUrl"
        :href="projectUrl"
        target="_blank"
        class="project-card__link"
        >View Project</a
      >
      <button @click="showMore = !showMore" class="project-card__toggle">
        {{ showMore ? "Show Less" : "Show More" }}
      </button>
      <transition name="fade">
        <p v-if="showMore" class="project-card__extended">
          {{ extendedDescription }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ProjectCard",
  props: {
    title: String,
    status: String,
    description: String,
    extendedDescription: String,
    imageUrl: String,
    projectUrl: String,
    startDate: String,
    endDate: String,
    affiliation: String,
  },
  setup() {
    const showMore = ref(false);
    return { showMore };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/ProjectCard.scss";
</style>
