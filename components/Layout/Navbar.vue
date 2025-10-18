<script setup lang="ts">
const isActive = ref(false);

function navActive() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <header
    class="max-w-[1480px] px-4 mx-auto fixed inset-x-0 top-0 mt-4 lg:mt-10 z-50"
  >
    <div class="flex items-center justify-between">
      <img
        src="/images/logo.png"
        alt="My Logo"
        class="h-[clamp(60px,10vw,140px)] w-auto object-contain transition-transform duration-300 hover:scale-105"
      />

      <div
        :class="
          isActive
            ? 'opacity-100 translate-y-1 lg:opacity-100 lg:pointer-events-auto'
            : 'opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100'
        "
        class="absolute top-16 inset-x-4 lg:inset-0 lg:relative overflow-hidden flex flex-col lg:flex-row rounded-3xl gap-8 items-center lg:rounded-full px-7 py-8 lg:py-3 border border-white/10 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md transition-all duration-300"
      >
        <div
          class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500"
        ></div>

        <NuxtLink
          class="text-white group text-xl lg:text-base"
          v-for="link in NAVLINKS"
          :to="link.url"
        >
          <div class="relative overflow-hidden">
            <p
              class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              {{ link.label }}
            </p>
            <p
              class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              {{ link.label }}
            </p>
          </div>
        </NuxtLink>
        <!-- Connect Me -->
        <NuxtLink
          class="lg:hidden text-white group text-xl lg:text-base"
          to="#contact"
        >
          <div class="relative overflow-hidden">
            <p
              class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              Contact Me
            </p>
            <p
              class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              Contact Me
            </p>
          </div>
        </NuxtLink>
      </div>
      <div>
        <Button
          class="rounded-full hidden lg:block shadow-none"
          label="Contact Me"
          href="https://wa.me/6282146120284"
          variant="btn-dark"
          target="_blank"
        />
        <button
          @click="navActive"
          class="lg:hidden btn-dark px-4 py-2 rounded-full group"
        >
          <img
            class="group-focus:scale-100 group-hover:scale-110 transition-all"
            :src="isActive ? '/svg/ic-close.svg' : '/svg/ic-hamburger.svg'"
          />
        </button>
      </div>
    </div>
  </header>
</template>
