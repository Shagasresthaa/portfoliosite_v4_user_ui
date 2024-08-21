<template>
  <div :class="['timeline-card', alignmentClass]">
    <div class="timeline-content">
      <h3 class="title">
        <b>{{ title }}</b>
      </h3>
      <p class="institution h3">
        <b>{{ institution }}</b>
      </p>
      <p class="position">{{ position }}</p>
      <p class="date">{{ date }}</p>
      <p class="duration">{{ duration }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TimelineCard",
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    position: {
      type: String as PropType<string>,
      required: true,
    },
    institution: {
      type: String as PropType<string>,
      required: true,
    },
    date: {
      type: String as PropType<string>,
      required: true,
    },
    duration: {
      type: String as PropType<string>,
      required: false,
    },
    alignment: {
      type: String as PropType<"left" | "right">,
      required: true,
    },
  },
  computed: {
    alignmentClass(): string {
      return this.alignment === "left" ? "align-left" : "align-right";
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/styles/TimelineCard.scss";
</style>
