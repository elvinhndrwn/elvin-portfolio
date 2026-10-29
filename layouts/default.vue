<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Elvin Dwi Hendrawan | Software Developer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio Elvin Dwi Hendrawan - Backend-focused software developer specializing in API, backend systems, and modern web applications.",
    },
    {
      name: "keywords",
      content:
        "Elvin Dwi Hendrawan, Portfolio, Backend Developer, Software Engineer, Web Developer",
    },
    { name: "author", content: "Elvin Dwi Hendrawan" },

    // Open Graph
    { property: "og:title", content: "Elvin Dwi Hendrawan | Software Developer" },
    {
      property: "og:description",
      content:
        "Official portfolio of Elvin Dwi Hendrawan — experience, projects, tech stack, and contact.",
    },
    { property: "og:image", content: "/images/logo.png" },
    { property: "og:url", content: "https://elvinhendrawan.dev" },
    { property: "og:type", content: "website" },
  ],
  link: [{ rel: "canonical", href: "https://elvinhendrawan.dev" }],
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Elvin Dwi Hendrawan",
        url: "https://elvinhendrawan.dev",
        jobTitle: "Software Developer",
        sameAs: [LINKS.github, LINKS.linkedin],
      }),
    },
  ],
});

const { init, destroy } = useSmoothScroll();

onMounted(() => init());
onBeforeUnmount(() => destroy());
</script>

<template>
  <a
    href="#about"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lift"
  >
    Skip to content
  </a>
  <LayoutNavbar />
  <main>
    <slot />
  </main>
  <LayoutFooter />
</template>
