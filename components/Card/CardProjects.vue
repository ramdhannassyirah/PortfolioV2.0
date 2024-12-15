<template>
  <div>
    <div
      class="grid md:grid-cols-2 border bg-[#38312fff] items-center gap-4 rounded-xl p-8 overflow-hidden"
    >
      <div>
        <img :src="Img" alt="" class="w-full h-48 md:h-96 object-cover rounded-lg" />
      </div>
      <div class="flex justify-center items-center">

        <div class="space-y-4  text-[#e8e3d5ff] max-w-md">
          <div class="flex items-center gap-3">
            <h1 class="md:text-2xl flex-1 text-xl font-bold">
              {{ title }}
            </h1>
            <a
              v-if="link"
              :href="link"
              target="_blank"
              class="text-lg font-bold inline-flex items-center gap-2 bg-[#e8e3d5ff] px-6 py-1 rounded-lg text-[#38312fff]">Link <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg></span></a>
          </div>
          <p class="break-all text-sm md:text-md">{{ desc }}</p>
          <div class="flex gap-2 items-center justify-center">
            <p class="" v-for="tech in tech" :key="tech.id">
              {{ tech }}
            </p>
          </div>
        </div>
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
