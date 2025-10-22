<template>
  <LayoutScrollSmooth>
    <section id="about" class="container">
      <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Content -->
        <div>
          <p class="badge">{{ ABOUT.label }}</p>
          <h1 class="section-title">
            {{ PROFILE.fullname }}
          </h1>

          <p class="paragraph mt-4" v-for="intro in ABOUT.introduce">
            {{ intro }}
          </p>

          <!-- Tombol LinkedIn dan GitHub -->
          <div class="mt-8 flex items-center gap-4 flex-wrap">
            <!-- LinkedIn Button -->
            <a
              href="https://www.linkedin.com/in/elvin-dwi-hendrawan-3314121b5/"
              target="_blank"
              class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:opacity-90 transition"
            >
              <img src="/images/linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <!-- GitHub Button -->
            <a
              href="https://github.com/elvinhndrwn"
              target="_blank"
              class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              <img src="/images/github.svg" alt="GitHub" class="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <!-- Image -->
        <div
          class="p-3 border bg-[#0b061a]/40 justify-center backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group"
        >
          <div class="relative">
            <!-- <p class="absolute top-4 left-4 text-white/20 font-medium p-2">
              Find me on <span class="text-white/50">LinkedIn</span>
            </p> -->

            <a
              href="https://www.linkedin.com/in/elvin-dwi-hendrawan-3314121b5/"
              target="_blank"
              class="block"
            >
              <img
                class="rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                :src="PROFILE.avatar"
                :alt="`${PROFILE.fullname} - ${PROFILE.role}`"
              />
            </a>
          </div>

          <div
            class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
          ></div>

          <div
            class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse"
          ></div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
