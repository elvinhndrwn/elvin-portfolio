<script setup lang="ts">
const { scrollTo } = useSmoothScroll();

const year = new Date().getFullYear();

function goTo(hash: string) {
  scrollTo(hash, { offset: -64 });
}
</script>

<template>
  <footer class="border-t border-hairline bg-surface">
    <div class="container py-14">
      <div class="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <span class="text-base font-semibold tracking-tight text-ink"
            >EDH</span
          >
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {{ FOOTER.tagline }}
          </p>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-ink/40">
            Explore
          </h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in NAVLINKS" :key="link.url">
              <a
                :href="link.url"
                class="text-sm text-muted transition-colors hover:text-ink"
                @click.prevent="goTo(link.url)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-ink/40">
            Connect
          </h3>
          <ul class="mt-4 space-y-3">
            <li>
              <a
                :href="LINKS.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-muted transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                :href="LINKS.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-muted transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                :href="LINKS.whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-muted transition-colors hover:text-ink"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-ink/40">
            Resume
          </h3>
          <ul class="mt-4 space-y-3">
            <li>
              <a
                :href="LINKS.cv"
                download="CV_Elvin_Dwi_Hendrawan.pdf"
                class="text-sm text-muted transition-colors hover:text-ink"
              >
                Download CV
              </a>
            </li>
            <li>
              <a
                href="#hero"
                class="text-sm text-muted transition-colors hover:text-ink"
                @click.prevent="goTo('#hero')"
              >
                Back to top ↑
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between"
      >
        <p>&copy; {{ year }} Elvin Dwi Hendrawan. All rights reserved.</p>
        <p>Designed & built with Nuxt 3 and Tailwind CSS.</p>
      </div>
    </div>
  </footer>
</template>
