<script setup lang="ts">
import gsap from "gsap";

const root = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  ctx = gsap.context(() => {
    gsap.fromTo(
      "[data-hero]",
      { autoAlpha: 0, y: 26 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.05,
      }
    );
    gsap.fromTo(
      "[data-hero-strip]",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );
  }, root.value ?? undefined);
});

onBeforeUnmount(() => ctx?.revert());
</script>

<template>
  <section id="hero" ref="root" class="relative overflow-hidden pt-36 md:pt-44">
    <div class="container text-center">
      <div
        data-hero
        class="inline-flex items-center gap-2 rounded-full border border-black/5 bg-surface px-4 py-1.5 text-[13px] font-medium text-ink/70"
      >
        <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
        {{ HERO.badge }}
      </div>

      <h1 data-hero class="headline-xl mx-auto mt-7 max-w-4xl text-balance">
        Building the backend behind
        <span
          class="bg-gradient-to-r from-accent to-[#5aa9ff] bg-clip-text text-transparent"
        >
          seamless digital experiences.
        </span>
      </h1>

      <p data-hero class="subline mx-auto mt-6 max-w-2xl">
        {{ HERO.subline }}
      </p>

      <div
        data-hero
        class="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Button
          label="Download CV"
          :href="LINKS.cv"
          download="CV_Elvin_Dwi_Hendrawan.pdf"
        />
        <Button
          label="Contact me"
          variant="secondary"
          :href="LINKS.whatsapp"
          target="_blank"
        />
      </div>
    </div>

    <div data-hero-strip class="relative mt-20 md:mt-28">
      <div class="marquee-mask overflow-hidden">
        <ul
          class="flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]"
        >
          <li
            v-for="(item, i) in [...WORK.visibleWorks, ...WORK.visibleWorks]"
            :key="i"
            class="group"
          >
            <NuxtImg
              v-if="item.thumbnails"
              :src="`/images/work/${item.thumbnails}`"
              :alt="item.name"
              width="600"
              format="webp"
              loading="lazy"
              class="h-[180px] w-auto rounded-2xl object-cover shadow-card transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-[300px] md:rounded-3xl"
            />
            <div
              v-else
              class="flex h-[180px] w-[240px] flex-col justify-end rounded-2xl bg-[radial-gradient(circle_at_top_left,#2c3550,#0f1117_70%)] p-5 shadow-card transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-[300px] md:w-[400px] md:rounded-3xl md:p-7"
            >
              <span
                class="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40 md:text-[11px]"
              >
                Preview coming soon
              </span>
              <span
                class="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-white/80 md:text-lg"
              >
                {{ item.name }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
