<template>
  <div
    ref="timelineCard"
    :class="['timeline-card', alignmentClass]"
    :style="{ '--dynamic-left': dynamicLeft }"
  >
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
import {
  defineComponent,
  PropType,
  ref,
  watch,
  onMounted,
  computed,
} from "vue";

export default defineComponent({
  name: "TimelineCard",
  props: {
    title: { type: String as PropType<string>, required: true },
    position: { type: String as PropType<string>, required: true },
    institution: { type: String as PropType<string>, required: true },
    date: { type: String as PropType<string>, required: true },
    duration: { type: String as PropType<string>, required: false },
    alignment: { type: String as PropType<"left" | "right">, required: true },
    lineOffset: { type: Number as PropType<number>, required: true },
  },
  setup(props) {
    const timelineCard = ref<HTMLElement | null>(null);
    const dynamicLeft = ref<string>("50%");

    const calculateDynamicLeft = () => {
      if (timelineCard.value) {
        const cardRect = timelineCard.value.getBoundingClientRect();
        const offset = props.lineOffset - cardRect.left;
        const adjustment = -9.25; // Offset val for line
        dynamicLeft.value = `${offset + adjustment}px`;
      }
    };

    watch(() => props.lineOffset, calculateDynamicLeft);

    onMounted(() => {
      calculateDynamicLeft();
    });

    return {
      timelineCard,
      dynamicLeft,
      alignmentClass: computed(() =>
        props.alignment === "left" ? "align-left" : "align-right"
      ),
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/TimelineCard.scss";
</style>
