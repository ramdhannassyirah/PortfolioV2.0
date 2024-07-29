<template>
  <div class="Card grid grid-cols-1 rounded-2xl md:grid-cols-2 p-6 gap-8 items-center  bg-[#38312fff]">
    <div class="max-h-[500px]">
      <img :src="Img" class="rounded-xl object-contain " alt="">
    </div>
    <div class="flex flex-col justify-center items-center lg:gap-10 text-[#e8e3d5ff] gap-6">
      <div class="flex items-center gap-6">
        <a target="_blank"
          class="w-10transition-all duration-300 ease-in-out rounded-full bg-foreground hover:bg-foreground/50"
          aria-label="Open Github Repo" href="https://github.com/ramdhannassyirah"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-6 h-6 text-[#e8e3d5ff] md:h-8 md:w-8 lg:h-10 lg:w-10">
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
            </path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg></a>
        <a :href="link" target="_blank" class=" font-semibold text-xl">Link Demo</a>
      </div>
			<div class="flex gap-2">
				<p
          class="text-xs font-semibold text-foreground/50 md:text-sm"
          v-for="item in tech"
          :key="item"
        >
          {{ item }}
        </p>
			</div>
      <div class="flex flex-col gap-2 ">
        <h1 class="text-2xl  font-bold text-foreground">{{ title }}</h1>
        <p class="md:text-md text-sm font-semibold text-balance ">{{ desc }}</p>
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
