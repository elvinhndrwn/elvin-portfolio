<template>
  <section id="stack" class="bg-surface py-24 md:py-32">
    <div class="container">
      <LayoutReveal>
        <p data-reveal class="eyebrow">{{ STACKS.label }}</p>
        <h2 data-reveal class="headline-lg mt-4 max-w-2xl text-balance">
          {{ STACKS.headline }}
        </h2>
        <p data-reveal class="subline mt-5 max-w-2xl">
          {{ STACKS.subline }}
        </p>
      </LayoutReveal>

      <LayoutReveal
        class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        :stagger="0.06"
      >
        <div
          v-for="item in STACKS.services"
          :key="item.name"
          data-reveal
          class="group flex flex-col items-center gap-5 rounded-3xl bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card md:p-10"
        >
          <NuxtImg
            :src="item.image"
            :alt="item.name"
            width="96"
            height="96"
            format="webp"
            loading="lazy"
            class="h-12 w-12 object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 md:h-14 md:w-14"
          />
          <p
            class="text-sm font-medium text-muted transition-colors duration-500 group-hover:text-ink"
          >
            {{ item.name }}
          </p>
        </div>
      </LayoutReveal>
    </div>
  </section>
</template>
