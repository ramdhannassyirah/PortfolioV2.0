<template>
  <NuxtLayout>
    <NuxtPage />
    <SpeedInsights />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
useHead({
  title: "Ramdhan Nassyirah",
  meta: [
    {
      name: "description",
      content: "This My Portfolio Ramdhan Nassyirah",
    },
    { property: "og:title", content: "Ramdhan Nassyirah" },
    {
      property: "og:description",
      content: "This My Portfolio Ramdhan Nassyirah",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ramdhannassyirah.my.id/" },
  ],
});
</script>
