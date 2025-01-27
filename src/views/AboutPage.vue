<template>
  <div class="about">
    <div class="content-area">
      <div class="quest-area">
        <img src="@/assets/about.jpg" alt="" class="propic" />
        <p class="quest">
          <b>
            What happens when a Software Engineer, driven by curiosity, steps
            beyond the world of software to explore the vast and intricate
            mysteries of the cosmos?
          </b>
        </p>
      </div>
      <p class="cont">
        &nbsp;&nbsp;&nbsp;&nbsp;That's the journey I'm on—a Master's student in
        Computer Science at Western Michigan University, where my work in
        full-stack development and Artificial Intelligence intersects with a
        profound fascination for the cosmos. By day, I focus on software
        development and problem-solving; in my free time, I dive into
        Astrophysics and Astronomy, exploring everything from orbital mechanics
        to the mysteries of pulsars, and pondering the age-old question: "Are we
        alone in the universe?"<br />

        &nbsp;&nbsp;&nbsp;&nbsp;My path has always been driven by more than just
        a desire to build and solve—it's fueled by relentless curiosity and a
        passion for learning, not just individually, but alongside others who
        share similar interests. Whether I’m tackling a coding challenge,
        studying radio astronomy, poring over the latest JWST data, or gazing
        into the depths of the universe through the eyes of Kepler, TESS, and
        JWST, it’s the shared journey of discovery that truly excites me.<br />

        &nbsp;&nbsp;&nbsp;&nbsp;I’m drawn to environments where passion and
        collaboration take center stage. If you’re intrigued by the intersection
        of technology and astronomy, or if you find joy in marveling at the
        Pillars of Creation, contemplating the Pale Blue Dot, or binge-watching
        Star Trek and Doctor Who, drop me a message or just say hi. There’s a
        universe of ideas to explore, and I’m always eager to see where the
        journey might lead.
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
