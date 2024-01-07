<template>
  <section id="projects" class="container mx-auto mt-24 flex flex-col gap-4">
    <div class="">
      <h1 class="text-5xl font-DotGothic16 text-[#38312fff] font-bold">
        Projects
      </h1>
    </div>
    <div class="flex flex-col gap-4">
      <CardProjects />
      <CardProjects />
      <CardProjects />
    </div>
    <div class="flex flex-col justify-center items-center gap-5 mt-10">
      <h1 class="text-center font-bold font-DotGothic16 text-4xl">
        See other project
      </h1>
      <a
        href=""
        class="px-5 py-2 bg-[#b0d1ceff] text-[#38312fff] font-bold rounded-lg"
        >Load More</a
      >
    </div>
  </section>
</template>
