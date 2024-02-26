<template>
  <section
    id="projects"
    class="container flex flex-col gap-4 px-4 mx-auto mt-20 overflow-hidden md:px-0 lg:px-0"
  >
    <div class="">
      <h1 class="text-5xl font-DotGothic16 text-[#38312fff] font-bold">
        Projects
      </h1>
    </div>
    <div class="flex flex-col gap-4">
      <CardProjects
        :Img="projects[0].img"
        :title="projects[0].title"
        :link="projects[0].link"
        v-motion-slide-visible-right
        :delay="300"
      />
      <CardProjects
        :Img="projects[0].img"
        :title="projects[0].title"
        :link="projects[0].link"
        v-motion-slide-visible-left
      />
      <CardProjects
        :Img="projects[0].img"
        :title="projects[0].title"
        :link="projects[0].link"
        v-motion-slide-visible-right
      />
    </div>
    <div class="flex flex-col items-center justify-center gap-5 mt-10">
      <h1 class="text-4xl font-bold text-center font-DotGothic16">
        See other project
      </h1>
      <NuxtLink
        to="/projectWeb"
        class="px-5 py-2 bg-[#b0d1ceff] text-[#38312fff] font-bold rounded-lg"
        >Load More</NuxtLink
      >
    </div>
  </section>
</template>
<script>
import imgBook from "../assets/img/bookself-apps.png";
export default {
  data() {
    return {
      projects: [
        {
          title: "Bookself Apps",
          link: "https://ramdhannassyirah.github.io/BookselfAppsSubmisson/",
          img: imgBook,
        },
      ],
    };
  },
};
</script>
