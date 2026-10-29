<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type WorkItem = {
  visible: boolean;
  name: string;
  live_demo: string;
  description: string;
  thumbnails: string;
  type: string;
  details: { label: string; text: string }[];
};

const root = ref<HTMLElement | null>(null);
const selected = ref<WorkItem | null>(null);
const { stop, start } = useSmoothScroll();
let ctx: gsap.Context | null = null;

function openModal(item: WorkItem) {
  selected.value = item;
  stop();
}

function closeModal() {
  selected.value = null;
  start();
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") closeModal();
}

watch(selected, (value) => {
  if (value) window.addEventListener("keydown", onKeydown);
  else window.removeEventListener("keydown", onKeydown);
});

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -5, scale: 1.08 },
        {
          yPercent: 5,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    const cards = gsap.utils.toArray<HTMLElement>("[data-work-card]");
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.96,
        opacity: 0.75,
        transformOrigin: "center top",
        ease: "none",
        scrollTrigger: {
          trigger: next,
          start: "top bottom",
          end: "top 25%",
          scrub: true,
        },
      });
    });
  }, root.value ?? undefined);
});

onBeforeUnmount(() => {
  ctx?.revert();
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <section id="work" ref="root" class="py-24 md:py-32">
    <div class="container">
      <LayoutReveal>
        <p data-reveal class="eyebrow">{{ WORK.label }}</p>
        <h2 data-reveal class="headline-lg mt-4 max-w-2xl text-balance">
          {{ WORK.headline }}
        </h2>
        <p data-reveal class="subline mt-5 max-w-2xl">
          {{ WORK.subline }}
        </p>
      </LayoutReveal>

      <div class="mt-16 space-y-6 md:space-y-10">
        <div
          v-for="(item, i) in WORK.visibleWorks"
          :key="item.name"
          class="md:sticky"
          :style="{ top: `${84 + i * 16}px` }"
        >
          <article
            data-work-card
            class="overflow-hidden rounded-[2rem] md:rounded-[2.5rem]"
            :class="i % 2 === 0 ? 'bg-surface text-ink' : 'bg-[#101013] text-white'"
          >
            <div
              class="grid items-center gap-6 p-6 md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14"
            >
              <div class="order-2 lg:order-1">
                <p
                  class="eyebrow"
                  :class="{ 'text-[#5aa9ff]': i % 2 === 1 }"
                >
                  {{ item.type }}
                </p>
                <h3
                  class="mt-3 text-2xl font-semibold tracking-tight md:text-4xl"
                >
                  {{ item.name }}
                </h3>
                <p
                  class="mt-4 text-base leading-relaxed md:text-lg"
                  :class="i % 2 === 0 ? 'text-muted' : 'text-white/60'"
                >
                  {{ item.description }}
                </p>
                <div class="mt-8 flex flex-wrap items-center gap-3">
                  <Button label="Learn more" @click="openModal(item)" />
                  <Button
                    v-if="item.live_demo !== '#'"
                    label="Visit site"
                    :variant="i % 2 === 0 ? 'secondary' : 'ghost-inverted'"
                    :href="item.live_demo"
                    target="_blank"
                  />
                </div>
              </div>

              <div class="order-1 lg:order-2">
                <div class="overflow-hidden rounded-2xl md:rounded-3xl">
                  <NuxtImg
                    data-parallax
                    :src="`/images/work/${item.thumbnails}`"
                    :alt="item.name"
                    width="1200"
                    format="webp"
                    loading="lazy"
                    class="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selected"
          class="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 backdrop-blur-sm md:items-center md:p-6"
          @click.self="closeModal"
        >
          <div
            role="dialog"
            aria-modal="true"
            :aria-label="selected.name"
            data-lenis-prevent
            class="modal-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-white md:rounded-[2rem]"
          >
            <div class="relative">
              <NuxtImg
                :src="`/images/work/${selected.thumbnails}`"
                :alt="selected.name"
                width="1200"
                format="webp"
                class="aspect-[16/9] w-full object-cover"
              />
              <button
                class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur transition-colors hover:bg-white"
                aria-label="Close"
                @click="closeModal"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 2l10 10M12 2L2 12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>

            <div class="p-7 md:p-10">
              <p class="eyebrow">{{ selected.type }}</p>
              <h3 class="mt-2 text-2xl font-semibold tracking-tight text-ink">
                {{ selected.name }}
              </h3>
              <p class="mt-3 leading-relaxed text-muted">
                {{ selected.description }}
              </p>

              <div
                v-for="detail in selected.details"
                :key="detail.label"
                class="mt-6"
              >
                <h4 class="text-sm font-semibold text-ink">
                  {{ detail.label }}
                </h4>
                <p class="mt-1.5 text-sm leading-relaxed text-muted">
                  {{ detail.text }}
                </p>
              </div>

              <div
                v-if="selected.live_demo !== '#'"
                class="mt-8 flex justify-end"
              >
                <Button
                  label="Visit site"
                  :href="selected.live_demo"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
