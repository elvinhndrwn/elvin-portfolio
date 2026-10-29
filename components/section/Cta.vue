<template>
  <section id="contact" class="container py-24 md:py-32">
    <LayoutReveal>
      <div
        data-reveal
        class="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0c] px-6 py-20 text-center md:px-16 md:py-28"
      >
        <div
          class="pointer-events-none absolute -top-48 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
        ></div>

        <h2
          class="headline-lg relative mx-auto max-w-2xl text-balance text-white"
        >
          {{ CTA.label }}
        </h2>
        <p class="relative mx-auto mt-6 max-w-xl text-lg text-white/60">
          {{ CTA.description }}
        </p>
        <div class="relative mt-10 flex justify-center">
          <Button
            label="Start a collaboration"
            :href="LINKS.whatsapp"
            target="_blank"
          />
        </div>
      </div>
    </LayoutReveal>
  </section>
</template>
