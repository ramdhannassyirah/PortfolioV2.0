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
        :Img="projects[1].img"
        :title="projects[1].title"
        :link="projects[1].link"
        v-motion-slide-visible-left
      />
    </div>
    <div class="flex flex-col items-center justify-center gap-5 my-10">
      <h1 class="text-4xl font-bold text-center font-DotGothic16">
        See other project
      </h1>
      <button
        class="button-54 px-5 py-2 bg-[#b0d1ceff] text-[#38312fff] font-bold rounded-lg"
      >
        <NuxtLink to="/projectWeb">Load More</NuxtLink>
      </button>
    </div>
  </section>
</template>
<style scoped>
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
</style>
<script>
import imgBook from "../assets/img/bookself-apps.png";
import imgToDo from "../assets/img/ToDoList.png";
export default {
  data() {
    return {
      projects: [
        {
          title: "Bookself Apps",
          link: "https://ramdhannassyirah.github.io/BookselfAppsSubmisson/",
          img: imgBook,
        },
        {
          title: "ToDoList",
          link: "https://ramdhannassyirah.github.io/ToDoListSubmission/",
          img: imgToDo,
        },
      ],
    };
  },
};
</script>
