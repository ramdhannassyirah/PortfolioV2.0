<template>
  <div
    aria-hidden="true"
    class="relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl border border-foreground/20 bg-[#38312fff]"
    style="opacity: 1; transform: none"
  >
    <div aria-hidden="true" style="opacity: 1">
      <img
        alt="Rangkum"
        fetchpriority="high"
        width="1000"
        height="600"
        decoding="async"
        data-nimg="1"
        class="absolute rounded-l-xl -bottom-2 right-0 w-[85%] object-contain md:w-[60%] lg:max-w-[55%]"
        :src="Img"
        style="color: transparent"
      />
    </div>
    <div
      aria-hidden="true"
      class="absolute top-0 left-0 flex items-center justify-center gap-4 mt-6 ml-8 lg:ml-14 lg:mt-10"
      style="opacity: 1; transform: none"
    >
      <a
        target="_blank"
        class="p-2 transition-all duration-300 ease-in-out rounded-full bg-foreground hover:bg-foreground/50"
        aria-label="Open Github Repo"
        href="https://github.com/ramdhannassyirah"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 text-[#e8e3d5ff] md:h-8 md:w-8 lg:h-10 lg:w-10"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          ></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a
      ><a
        target="_blank"
        class="p-2 text-[#e8e3d5ff] font-bold text-xl"
        aria-label="Open Live Demo"
        :href="link"
        >Live Demo</a
      >
    </div>

    <div
      class="absolute mb-10 ml-0 left-10 top-32 text-foreground lg:top-52 lg:mb-14 lg:ml-4 text-[#e8e3d5ff]"
    >
      <h3
        class="max-w-[90%] text-5xl font-bold leading-none text-foreground md:text-4xl md:leading-none lg:max-w-[450px] lg:text-5xl lg:leading-none"
      >
        <span aria-hidden="true" style="opacity: 1; transform: none">{{
          title
        }}</span>
      </h3>
      <p
        class="mt-4 w-[90%] max-w-[454px] text-xs font-semibold text-foreground/50"
      >
        <span aria-hidden="true" style="opacity: 1; transform: none">{{
          desc
        }}</span>
      </p>
      <div
        aria-hidden="true"
        class="flex gap-4 tech mt-9"
        style="opacity: 1; transform: none"
      >
        <p
          class="text-xs font-semibold text-foreground/50 md:text-sm"
          v-for="item in tech"
          :key="item"
        >
          {{ item }}
        </p>

        <!-- Add additional technologies here if needed -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Img: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    tech: {
      type: Array,
    },
    desc: {
      type: String,
    },
  },
};
</script>
