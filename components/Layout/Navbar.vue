<script setup lang="ts">
const isOpen = ref(false);
const scrolled = ref(false);
const { scrollTo, stop, start } = useSmoothScroll();

function toggleMenu() {
  isOpen.value = !isOpen.value;
  isOpen.value ? stop() : start();
}

function goTo(hash: string) {
  if (isOpen.value) {
    isOpen.value = false;
    start();
  }
  scrollTo(hash, { offset: -64 });
}

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition-all duration-500"
    :class="
      scrolled || isOpen
        ? 'border-black/5 bg-white/80 backdrop-blur-xl'
        : 'border-transparent bg-white/0'
    "
  >
    <nav class="container flex h-14 items-center justify-between">
      <a
        href="#hero"
        aria-label="Back to top"
        class="flex items-center"
        @click.prevent="goTo('#hero')"
      >
        <span class="text-lg font-semibold tracking-tight text-ink">EDH</span>
      </a>

      <ul class="hidden items-center gap-9 md:flex">
        <li v-for="link in NAVLINKS" :key="link.url">
          <a
            :href="link.url"
            class="text-[13px] font-medium text-ink/70 transition-colors duration-300 hover:text-ink"
            @click.prevent="goTo(link.url)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <Button
          class="hidden md:inline-flex"
          size="sm"
          label="Contact"
          :href="LINKS.whatsapp"
          target="_blank"
        />
        <button
          class="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 md:hidden"
          :aria-expanded="isOpen"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          <svg
            v-if="!isOpen"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 4h16M1 9h16M1 14h16"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <svg
            v-else
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 3l12 12M15 3L3 15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="isOpen"
        class="border-t border-black/5 bg-white/95 backdrop-blur-xl md:hidden"
      >
        <ul class="container flex flex-col py-4">
          <li v-for="link in NAVLINKS" :key="link.url">
            <a
              :href="link.url"
              class="block py-3 text-2xl font-semibold tracking-tight text-ink"
              @click.prevent="goTo(link.url)"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="mt-4 mb-2">
            <Button
              class="w-full"
              label="Contact"
              :href="LINKS.whatsapp"
              target="_blank"
            />
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
