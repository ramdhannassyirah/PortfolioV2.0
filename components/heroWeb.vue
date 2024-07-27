<template>
  <section id="hero " class="container mx-auto">
    <div
      class="bg-[#b0d1ceff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] h-[700px] md:rounded-t-[46px] md:rounded-b-[42px] w-full flex items-center px-8 overflow-hidden"
    >
      <div class="flex flex-col">
        <h1
          class="text-[#38312fff] text-3xl font-DotGothic16"
          v-motion-slide-visible-left
          :delay="500"
        >
          i'm
        </h1>
        <div
          class="text-[#38312fff] text-6xl md:text-9xl font-DotGothic16"
          v-motion-slide-visible-left
          :delay="500"
        >
          <h1>Frontend</h1>
          <h1 class="lg:pl-56">Web</h1>
          <h1 class="lg:pl-40">Developer</h1>
        </div>
      </div>
    </div>
  </section>
</template>
