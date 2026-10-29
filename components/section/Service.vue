<template>
  <section id="expertise" class="container py-24 md:py-32">
    <LayoutReveal>
      <p data-reveal class="eyebrow">{{ SERVICE.label }}</p>
      <h2 data-reveal class="headline-lg mt-4 max-w-2xl text-balance">
        {{ SERVICE.headline }}
      </h2>
      <p data-reveal class="subline mt-5 max-w-2xl">
        {{ SERVICE.subline }}
      </p>
    </LayoutReveal>

    <LayoutReveal
      class="mt-16 grid gap-5 md:grid-cols-2"
      :stagger="0.12"
    >
      <article
        v-for="(item, i) in SERVICE.services"
        :key="item.name"
        data-reveal
        class="group rounded-[2rem] bg-surface p-9 transition-all duration-500 hover:-translate-y-1 hover:bg-[#f0f0f2] hover:shadow-card md:p-12"
        :class="{ 'md:col-span-2': i === 0 }"
      >
        <div
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-105"
        >
          <VsxIcon
            :iconName="item.icon"
            :size="24"
            color="#0071E3"
            type="linear"
          />
        </div>
        <h3 class="mt-8 text-xl font-semibold tracking-tight md:text-2xl">
          {{ item.name }}
        </h3>
        <p
          class="mt-3 leading-relaxed text-muted"
          :class="{ 'max-w-2xl': i === 0 }"
        >
          {{ item.description }}
        </p>
      </article>
    </LayoutReveal>
  </section>
</template>
