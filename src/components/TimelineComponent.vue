<template>
  <div class="timeline">
    <div ref="timelineLine" class="timeline-line"></div>
    <TimelineCard
      v-for="(event, index) in events"
      :key="index"
      :title="event.title"
      :position="event.position"
      :institution="event.institution"
      :date="event.date"
      :duration="event.duration"
      :alignment="index % 2 === 0 ? 'left' : 'right'"
      :lineOffset="lineOffset"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import TimelineCard from "./TimelineCard.vue";

export default defineComponent({
  name: "TimelineComponent",
  components: { TimelineCard },
  data() {
    return {
      events: [
        {
          title: "Senior Secondary Education",
          position: "Student",
          institution: "Sai Chaitanya Junior College",
          date: "2015 - 2017",
          duration: "2 years",
        },
        {
          title: "Started Undergraduate Studies",
          position: "Student (BTech Computer Science and Engineering)",
          institution: "ICFAI Foundation for Higher Education",
          date: "July, 2017",
          duration: "",
        },
        {
          title: "Internship Program 1",
          position: "3D Game Artist (Intern)",
          institution: "CoreGlobal IT",
          date: "May, 2019 - June, 2019",
          duration: "2 months",
        },
        {
          title: "Technology Innovation Project Program 1",
          position: "Full Stack Dev / Data Analyst (Intern)",
          institution: "I Assist Innovation Labs",
          date: "March, 2020 - Aug, 2020",
          duration: "6 months",
        },
        {
          title: "Internship Program 2",
          position: "Full Stack Dev / AWS Cloud Engineer (Intern)",
          institution: "Skillbanc Inc",
          date: "Aug, 2020 - Jan, 2021",
          duration: "6 months",
        },
        {
          title: "Completed Undergraduate Studies",
          position: "Student (BTech Computer Science and Engineering)",
          institution: "ICFAI Foundation for Higher Education",
          date: "July, 2017 - Oct, 2021",
          duration: "4 years",
        },
        {
          title: "First Full Time Job",
          position: "Assistant Systems Engineer",
          institution: "Tata Consultancy Services",
          date: "Dec, 2021 - Nov, 2023",
          duration: "1 year 11 months",
        },
        {
          title: "Started Graduate Studies",
          position: "Student (MS Computer Science)",
          institution: "Western Michigan University",
          date: "Jan, 2024 - Apr, 2026",
        },
      ],
      lineOffset: 0,
    };
  },
  mounted() {
    this.calculateLineOffset();
    window.addEventListener("resize", this.calculateLineOffset);
  },
  methods: {
    calculateLineOffset() {
      const timelineLine = this.$refs.timelineLine as HTMLElement;
      if (timelineLine) {
        this.lineOffset = timelineLine.getBoundingClientRect().left;
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/TimelineComponent.scss";
</style>
