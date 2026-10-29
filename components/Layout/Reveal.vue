<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const props = withDefaults(
  defineProps<{
    y?: number;
    delay?: number;
    duration?: number;
    stagger?: number;
    selector?: string;
  }>(),
  {
    y: 32,
    delay: 0,
    duration: 1,
    stagger: 0.1,
    selector: "[data-reveal]",
  }
);

const el = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(() => {
  if (!el.value) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const matches = el.value.querySelectorAll(props.selector);
  const items: gsap.TweenTarget = matches.length ? matches : el.value;

  ctx = gsap.context(() => {
    gsap.fromTo(
      items,
      { autoAlpha: 0, y: props.y },
      {
        autoAlpha: 1,
        y: 0,
        duration: props.duration,
        delay: props.delay,
        stagger: props.stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.value,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, el.value);
});

onBeforeUnmount(() => ctx?.revert());
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
