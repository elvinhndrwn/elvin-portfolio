<template>
  <LayoutScrollSmooth>
    <section id="stacks" class="container">
      <!-- Content -->
      <p class="badge">{{ STACKS.label }}</p>
      <h2 class="section-title">
        {{ STACKS.headline }}
      </h2>
      <p class="paragraph mt-4 max-w-xl">
        {{ STACKS.subline }}
      </p>

      <!-- Stacks List -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
        <div
          v-for="item in STACKS.services"
          :key="item.name"
          class="flex flex-col items-center justify-center group"
        >
          <!-- Logo Wrapper -->
          <div
            class="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="h-14 w-auto md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <!-- Optional text -->
          <p class="mt-3 text-white/70 text-sm font-medium">{{ item.name }}</p>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
