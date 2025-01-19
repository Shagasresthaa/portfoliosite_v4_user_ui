<template>
  <div class="about">
    <div class="content-area">
      <div class="quest-area">
        <img src="@/assets/about.jpg" alt="" class="propic" />
        <p class="quest">
          <b>
            What occurs when a Software Engineer, motivated by endless
            curiosity, ventures beyond the confines of software to explore the
            wonders of the cosmos?
          </b>
        </p>
      </div>
      <p class="cont">
        &nbsp;&nbsp;&nbsp;&nbsp;That's the journey I'm on—a Master's student in
        Computer Science at Western Michigan University, where my work in
        full-stack development intersects with a deep fascination for the
        universe. I spend my days focused on software development and
        problem-solving, while my free moments are dedicated to exploring
        Astrophysics & Astronomy, particularly the signals of pulsars and the
        dynamics of galaxies.<br />

        &nbsp;&nbsp;&nbsp;&nbsp;My path has always been driven by more than just
        a desire to build and solve—it's fueled by relentless curiosity and a
        passion for learning, not just individually, but alongside others who
        share similar interests. Whether I'm tackling a coding challenge or
        delving into radio astronomy, or just staring into the dark from the
        eyes of TESS looking for signs of life filled exoplanets, it's the
        shared journey of exploration and growth that truly excites me.<br />

        &nbsp;&nbsp;&nbsp;&nbsp;I'm drawn to environments where passion and
        together is what matters most. If you're intrigued by the blend of
        technology and astronomy, or if you share a passion for exploring the
        unknown, let's connect. There's a universe of ideas to explore, and I'm
        always eager to see where the journey might lead us.
      </p>
    </div>
    <div class="timeline-holder">
      <TimelineComponent />
    </div>
  </div>

  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import TimelineComponent from "@/components/TimelineComponent.vue";

export default defineComponent({
  name: "AboutPage",
  components: {
    FooterComponent,
    TimelineComponent,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/AboutPage.scss";
</style>
