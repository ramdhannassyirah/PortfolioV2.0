<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-3">
    <CardProjects
      :Img="projects[0].img"
      :title="projects[0].title"
      :link="projects[0].link"
    />
    <CardProjects
      :Img="projects[1].img"
      :title="projects[1].title"
      :link="projects[1].link"
    />
    <CardProjects />
    <CardProjects />
    <NuxtLink class="text-2xl font-bold" to="/">- Back -</NuxtLink>
  </div>
</template>
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
