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
    <CardProjects
      :Img="projects[2].img"
      :title="projects[2].title"
      :link="projects[2].link"
      v-motion-slide-visible-left
    />
    <CardProjects
      :Img="projects[3].img"
      :title="projects[3].title"
      :link="projects[3].link"
      v-motion-slide-visible-left
    />

    <NuxtLink class="my-10 text-2xl font-bold rounded-lg button-54" to="/"
      >- Back -</NuxtLink
    >
  </div>

  <buttonBar />
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
import imgConsumeApi from "../assets/img/consume-api.png";
import imgShoppingCart from "../assets/img/shoppingCart.png";
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
        {
          title: "Shopping Cart",
          link: "https://shopping-cart-vue-gamma.vercel.app/",
          img: imgShoppingCart,
        },
        {
          title: "Consume API",
          link: "https://consume-api-nu.vercel.app/",
          img: imgConsumeApi,
        },
      ],
    };
  },
};
</script>
