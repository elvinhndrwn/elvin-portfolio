<template>
  <section id="about" class="container py-24 md:py-32">
    <LayoutReveal>
      <p data-reveal class="eyebrow">{{ ABOUT.label }}</p>
      <h2 data-reveal class="headline-lg mt-4 max-w-2xl text-balance">
        {{ ABOUT.headline }}
      </h2>
    </LayoutReveal>

    <div class="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <LayoutReveal>
        <div data-reveal class="overflow-hidden rounded-[2rem] bg-surface">
          <NuxtImg
            :src="PROFILE.avatar"
            :alt="`${PROFILE.name} - ${PROFILE.role}`"
            width="1200"
            height="900"
            format="webp"
            loading="lazy"
            class="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
          />
        </div>
      </LayoutReveal>

      <LayoutReveal :stagger="0.12">
        <p data-reveal class="text-lg leading-relaxed text-ink">
          {{ ABOUT.introduce[0] }}
        </p>
        <p data-reveal class="mt-5 text-base leading-relaxed text-muted">
          {{ ABOUT.introduce[1] }}
        </p>
        <p data-reveal class="mt-5 text-base leading-relaxed text-muted">
          {{ ABOUT.introduce[2] }}
        </p>

        <div data-reveal class="mt-8 flex flex-wrap gap-3">
          <Button
            variant="secondary"
            :href="LINKS.linkedin"
            target="_blank"
          >
            <img
              src="/images/linkedin.svg"
              alt=""
              class="h-4 w-4"
              aria-hidden="true"
            />
            LinkedIn
          </Button>
          <Button variant="secondary" :href="LINKS.github" target="_blank">
            <img
              src="/images/github.svg"
              alt=""
              class="h-4 w-4"
              aria-hidden="true"
            />
            GitHub
          </Button>
        </div>
      </LayoutReveal>
    </div>

    <LayoutReveal class="mt-20" :stagger="0.08">
      <dl class="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div
          v-for="stat in STATS"
          :key="stat.label"
          data-reveal
          class="md:border-l md:border-hairline md:pl-8 [&:nth-child(1)]:border-l-0 [&:nth-child(1)]:pl-0"
        >
          <dd class="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {{ stat.value }}
          </dd>
          <dt class="mt-2 text-sm text-muted">{{ stat.label }}</dt>
        </div>
      </dl>
    </LayoutReveal>
  </section>
</template>
