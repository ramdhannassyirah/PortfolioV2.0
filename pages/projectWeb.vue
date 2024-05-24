<template>
  <section>
    <div class="flex flex-col items-center justify-center min-h-screen gap-3">
      <CardProjects
        v-for="project in projects"
        :key="project.id"
        :Img="project.img"
        :title="project.title"
        :link="project.link"
        v-motion-slide-visible-right
        :delay="300"
        :tech="project.tech"
      />
      <NuxtLink class="my-10 text-2xl font-bold rounded-lg button-54" to="/"
        >- Back -</NuxtLink
      >
    </div>
    <buttonBar />
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
import Project from "~/data-project";
export default {
  data() {
    return {
      projects: Project,
    };
  },
};
</script>
