<script setup lang="ts">
type Variant = "primary" | "secondary" | "inverted" | "ghost" | "ghost-inverted";
type Size = "md" | "sm";

const props = withDefaults(
  defineProps<{
    label?: string;
    to?: string;
    href?: string;
    download?: string | boolean;
    target?: string;
    variant?: Variant;
    size?: Size;
  }>(),
  {
    variant: "primary",
    size: "md",
  }
);

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_10px_30px_-10px_rgba(0,113,227,0.55)]",
  secondary: "bg-[#e8e8ed] text-ink hover:bg-[#dcdce1]",
  inverted: "bg-white text-ink hover:bg-white/90",
  ghost: "text-accent hover:opacity-70",
  "ghost-inverted": "text-white/70 hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  sm: "px-4 py-2 text-[13px]",
};

const classes = computed(() => [
  sizeClasses[props.size],
  variantClasses[props.variant],
]);

const tag = computed(() => {
  if (props.href) return "a";
  if (props.to) return "NuxtLink";
  return "button";
});
</script>

<template>
  <component
    :is="tag"
    :type="tag === 'button' ? 'button' : undefined"
    :to="tag === 'NuxtLink' ? to : undefined"
    :href="tag === 'a' ? href : undefined"
    :download="tag === 'a' ? download : undefined"
    :target="tag === 'a' ? target : undefined"
    :rel="tag === 'a' && target === '_blank' ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2"
    :class="classes"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
