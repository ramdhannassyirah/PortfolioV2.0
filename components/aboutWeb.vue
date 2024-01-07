<template>
  <section id="about" class="container mx-auto mt-24">
    <div class="flex flex-col gap-4 px-4 md:px-0 lg:px-0">
      <div>
        <h1 class="text-5xl font-DotGothic16 text-[#38312fff] font-bold">
          About Me
        </h1>
      </div>
      <div
        class="flex flex-wrap lg:flex-nowrap gap-4 items-center"
        v-motion-fade-visible
      >
        <div class="flex flex-col gap-4 font-Manrope">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            exercitationem maxime amet at iste, vitae temporibus perspiciatis
            atque reprehenderit quidem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            exercitationem maxime amet at iste, vitae temporibus perspiciatis
            atque reprehenderit quidem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            exercitationem maxime amet at iste, vitae temporibus perspiciatis
            atque reprehenderit quidem?
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-3" v-motion-slide-visible-bottom>
            <h1 class="font-Pixelify font-bold text-2xl text-[#38312fff]">
              Education
            </h1>
            <p>SMA NEGERI 1 CIANJUR | 2018 - 2021</p>
          </div>
          <div class="flex flex-col gap-3" v-motion-slide-visible-bottom>
            <h1 class="font-Pixelify font-bold text-2xl text-[#38312fff]">
              Skills Programming
            </h1>
            <p>
              HTML5, CSS, Javascript(ES6+), Vuejs, Nuxtjs, Git/Github, and
              Firebase.
            </p>
          </div>
          <div class="flex flex-col gap-3" v-motion-slide-visible-bottom>
            <h1 class="font-Pixelify font-bold text-2xl text-[#38312fff]">
              UI Tools
            </h1>
            <p>CSS3/SCSS/SASS, TailwindCSS, Bootstrap.</p>
          </div>
        </div>
      </div>
      <div class="experience flex flex-col gap-4">
        <h1 class="text-5xl font-DotGothic16 text-[#38312fff] font-bold">
          Experience
        </h1>
        <div
          class="flex sm:flex-nowrap flex-wrap md:flex-nowrap lg:flex-nowrap"
          v-motion-slide-visible-right
        >
          <div
            class="mr-3 mt-3 min-h-fit max-w-[400px] rounded-xl bg-[#eda29aff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
          >
            <h1 class="font-bold">
              Participate in Bootcamp Online Sekolah Beta Intensif Hacker
              Progressive Web Apps Menggunakan Nuxt JS
            </h1>
            <time datetime="">Sep, 2023 - okt,2023</time>
          </div>
          <div
            class="mr-3 mt-3 min-h-fit max-w-[400px] rounded-xl bg-[#edce95ff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
          >
            <h1>
              Project-Based Virtual Intern : Frontend Developer Core Initiative
              x Rakamin Academy
            </h1>
            <time datetime="">Sep, 2023 - okt,2023</time>
          </div>
          <div
            class="mr-3 mt-3 min-h-fit max-w-[400px] rounded-xl bg-[#edb498ff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
          >
            <h1>Participate in Program Campus Code by Devhandal</h1>
            <time datetime="">Sep, 2023 - okt,2023</time>
          </div>
          <div
            class="mr-3 mt-3 min-h-fit max-w-[400px] rounded-xl bg-[#bfded9ff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
          >
            <h1>Participate in Frontend Developer Bootcamp at SMKDEV</h1>
            <time datetime="">Sep, 2023 - okt,2023</time>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
