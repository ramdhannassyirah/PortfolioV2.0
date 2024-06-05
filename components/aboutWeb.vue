<template>
  <section id="about" class="container mx-auto mt-24">
    <div class="flex flex-col gap-4 px-4 md:px-0 lg:px-0">
      <div>
        <h1 class="text-5xl font-DotGothic16 text-[#38312fff] font-bold">
          About Me
        </h1>
      </div>
      <div class="flex flex-wrap items-center gap-6 lg:flex-nowrap">
        <div class="flex flex-col gap-4 font-Manrope w-[80%]">
          <p v-motion-fade-visible :delay="500">
            Salam! Saya Ramdhan Nassyirah, Pengembang Frontend serba bisa dengan
            kemampuan untuk HTML, CSS, JavaScript, Vuejs dan Nuxtjs.
          </p>
          <p v-motion-fade-visible>
            Walaupun saya meninggalkan pendidikan formal di Universitas,
            komitmen saya pertumbuhan dibuktikan melalui sertifikasi dari
            Codepolitan, the Sekolah Beta Gerakan 1000 Startup Indonesia dan
            Dicoding Indonesia.
          </p>
          <p v-motion-fade-visible>
            Dengan menempuh jalur non-tradisional, saya meninggalkan universitas
            untuk fokus pembelajaran langsung dan aplikasi dunia nyata, budidaya
            ketahanan dan kemampuan beradaptasi.Saya membawa pengalaman praktis,
            semangat untuk inovasi, dan dedikasi untuk menciptakan digital tanpa
            batas pengalaman. Jelajahi portofolio saya untuk menyaksikan hasil
            nyata perjalanan saya di dunia pengembangan web.
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
      <div class="flex flex-col gap-4 pb-10 overflow-hidden experience">
        <h1 class="text-5xl font-DotGothic16 text-[#38312fff] font-bold">
          Experience
        </h1>
        <div
          class="flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap"
        >
          <div
            class="mr-3 mt-3 min-h-fit flex flex-col gap-1 max-w-[400px] rounded-xl bg-[#eda29aff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
            v-motion-slide-visible-right
          >
            <h1 class="font-bold text-[#38312fff] font-Nunito-Sans">
              Participate in Bootcamp Online Sekolah Beta Intensif Hacker
              Progressive Web Apps Menggunakan Nuxt JS
            </h1>
            <time datetime="">Sep, 2023 - okt,2023 • 2 Mouth</time>
          </div>
          <div
            class="mr-3 mt-3 flex flex-col gap-1 min-h-fit max-w-[400px] rounded-xl bg-[#edce95ff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
            v-motion-slide-visible-right
          >
            <h1 class="font-bold font-Nunito-Sans text-[#38312fff]">
              Project-Based Virtual Intern : Frontend Developer Core Initiative
              x Rakamin Academy
            </h1>
            <time datetime="">Okt,2023 </time>
          </div>
          <div
            class="mr-3 mt-3 min-h-fit flex flex-col gap-1 max-w-[400px] rounded-xl bg-[#edb498ff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
            v-motion-slide-visible-right
          >
            <h1 class="font-bold text-[#38312fff] font-Nunito-Sans">
              Participate in Program Campus Code by Devhandal
            </h1>
            <time datetime="">2023 - 2024 </time>
          </div>
          <div
            class="mr-3 mt-3 flex flex-col gap-1 min-h-fit max-w-[400px] rounded-xl bg-[#bfded9ff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
            v-motion-slide-visible-right
          >
            <h1 class="font-bold text-[#38312fff] font-Nunito-Sans">
              Meta Front-End Developer || Coursera & Indonesia Cyber Education
              Institute
            </h1>
            <time datetime="">2024 - 2025</time>
          </div>
          <div
            class="mr-3 mt-3 flex flex-col gap-1 min-h-fit max-w-[400px] rounded-xl bg-[#bfded9ff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8"
            v-motion-slide-visible-right
          >
            <h1 class="font-bold text-[#38312fff] font-Nunito-Sans">
              Jabar Digital Academy || Alkademi Digital
            </h1>
            <time datetime="">April - June 2024</time>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
