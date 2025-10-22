<script setup lang="ts">
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useHead } from "#imports";

// Tambahkan konfigurasi SEO global di sini
useHead({
  title: "Elvin Dwi Hendrawan | Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Portfolio Elvin Dwi Hendrawan - Backend Developer yang berfokus pada API, sistem backend, dan pengembangan aplikasi web modern.",
    },
    {
      name: "keywords",
      content:
        "Elvin Dwi Hendrawan, Portfolio, Backend Developer, Software Engineer, Web Developer",
    },
    { name: "author", content: "Elvin Dwi Hendrawan" },

    // Open Graph (preview ketika dibagikan ke WhatsApp, Twitter, LinkedIn, dll)
    { property: "og:title", content: "Elvin Dwi Hendrawan | Portfolio" },
    {
      property: "og:description",
      content:
        "Website portfolio resmi Elvin Dwi Hendrawan yang berisi tentang pengalaman, proyek, tech stack, dan kontak.",
    },
    { property: "og:image", content: "/images/logo.png" },
    { property: "og:url", content: "https://elvinhendrawan.dev" },
    { property: "og:type", content: "website" },
  ],
  link: [{ rel: "canonical", href: "https://elvinhendrawan.dev" }],
});

// (Opsional tapi sangat bagus untuk SEO) Tambah Schema.org agar Google kenal kamu sebagai "Person"
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Elvin Dwi Hendrawan",
        url: "https://elvinhendrawan.dev",
        jobTitle: "Backend Developer",
        sameAs: [
          "https://github.com/elvinhndrwn",
          "https://www.linkedin.com/in/elvin-dwi-hendrawan-3314121b5",
        ],
      }),
    },
  ],
});

// Bagian animasi dan smooth scroll
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
});
</script>

<template>
  <LayoutNavbar />
  <main class="overflow-hidden relative">
    <slot />
    <div
      class="bg-gradient-to-t from-dark to-transparent fixed bottom-0 inset-x-0 h-24 z-50"
    ></div>
  </main>
</template>
