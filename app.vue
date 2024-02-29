<template>
  <div class="md:px-7 bg-[#e8e3d5ff]">
    <navbarWeb />
    <NuxtPage />
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import {SpeedInsights} from "@vercel/speed-insights/vue";
useSeoMeta({
  title: "Ramdhan Nassyirah",
  ogTitle: "Ramdhan Nassyirah",
  description: "Ramdhan Nassyirah, Portfolio",
  ogDescription: "Ramdhan Nassyirah, Portfolio",
});
</script>
