import imgBook from "./assets/img/bookself-apps.png";
import imgToDo from "./assets/img/ToDoList.png";
import imgConsumeApi from "./assets/img/consume-api.png";
import ImgKasirinAja from "./assets/img/KasirinAja.png";
import ImgDesaWisata from "./assets/img/DesaWisata.png";

const Project = [
  {
    title: "Desa Wisata Sukarame",
    link: "https://github.com/khalilannbiya/desa-wisata",
    desc: "Capstone Project Desa Wisata Sukarame Merupakan sebuah Website sederhana yang memungkinkan pengguna untuk mencari informasi wisata di Sukarame, Projek ini dibuat dengan Laravel, MySQL, dan Tailwind CSS.",
    img: ImgDesaWisata,
    tech: ["Laravel", "MYSQL", "Tailwind CSS"],
  },
  {
    title: "Kasirin Aja",
    link: "https://github.com/ramdhannassyirah/KasirinAja",
    desc: "Kasir Sederhana Berbasis Web yang memungkinkan pengguna menghitung dan mendata barang dengan lebih cepat.",
    img: ImgKasirinAja,
    tech: ["Laravel", "MYSQL", "Quixlab"],
  },
  {
    title: "Bookself Apps",
    link: "https://ramdhannassyirah.github.io/BookselfAppsSubmisson/",
    desc: "Bookself App Merupakan Website Pengelolaan Buku. Web ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus buku.",
    img: imgBook,
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "ToDoList",
    link: "https://ramdhannassyirah.github.io/ToDoListSubmission/",
    desc: "ToDoList merupakan aplikasi sederhana yang memungkinkan pengguna untuk membuat to-do list. Web ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus to-do list.",
    img: imgToDo,
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Consume API",
    link: "https://consume-api-nu.vercel.app/",
    desc: "Consume API merupakan aplikasi sederhana yang memungkinkan pengguna untuk mengakses API. Web ini memungkinkan pengguna untuk mengakses API.",
    img: imgConsumeApi,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default Project;
