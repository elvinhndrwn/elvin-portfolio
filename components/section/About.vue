<script setup lang="ts"></script>

<template>
  <LayoutScrollSmooth>
    <section id="about" class="container">
      <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Content -->
        <div>
          <p class="badge">{{ ABOUT.label }}</p>
          <h2 class="section-title">
            {{ PROFILE.fullname }}
          </h2>

          <p class="paragraph mt-4" v-for="intro in ABOUT.introduce">
            {{ intro }}
          </p>

          <Button
            class="mt-8"
            label="Find Me on LinkedIn"
            href="https://www.linkedin.com/in/elvin-dwi-hendrawan-3314121b5/"
            variant="btn-dark"
            target="_blank"
          />
        </div>

        <!-- Image -->
        <!-- Wrapper utama -->
        <div
          class="p-3 border bg-[#0b061a]/40 justify-center backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group"
        >
          <!-- Gambar + teks berada di dalam wrapper yang sama -->
          <div class="relative">
            <!-- Teks muncul di atas gambar (absolute positioning) -->
            <p class="absolute top-4 left-4 text-white/20 font-medium p-2">
              Find me on <span class="text-white/50">LinkedIn</span>
            </p>

            <!-- Gambar profil yang bisa diklik -->
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

          <!-- Garis gradasi dekoratif -->
          <div
            class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
          ></div>

          <!-- Efek cahaya biru blur di bawah -->
          <div
            class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse"
          ></div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
