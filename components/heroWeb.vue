<template>
  <section id="hero " class="container mx-auto">
    <nav class="py-6 px-6 md:px-0 lg:px-0">
      <div class="flex justify-between relative">
        <div class="">
          <a class="font-DotGothic16 font-bold"> RAMDHAN NASSYIRAH </a>
        </div>
        <div class="">
          <a>AAA</a>
        </div>
      </div>
    </nav>

    <div
      class="bg-[#b0d1ceff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] h-[700px] md:rounded-t-[46px] md:rounded-b-[42px] w-full flex items-center px-8 overflow-hidden"
    >
      <div class="flex flex-col">
        <h1
          class="text-[#38312fff] text-2xl font-DotGothic16"
          v-motion-slide-visible-bottom
        >
          i'm
          <span>
            <a
              href="/about"
              class="text-xl text-[#38312fff] bg-[#e8e3d5ff] px-3 font-bold"
              >About Me -></a
            >
          </span>
        </h1>
        <div
          class="text-[#38312fff] text-6xl md:text-9xl font-DotGothic16"
          v-motion-slide-visible-left
        >
          <h1>Frontend</h1>
          <h1 class="lg:pl-56">Web</h1>
          <h1 class="lg:pl-40">Developer</h1>
        </div>
      </div>
    </div>
  </section>
</template>
