<template>
  <section id="contact" class="container mx-auto">
    <h1
      class="text-5xl font-DotGothic16 text-[#38312fff] font-bold text-center py-24"
    >
      Contact
    </h1>
    <div class="flex flex-col w-full gap-6 px-4 mx-auto text-4xl lg:px-0">
      <form>
        <div class="group" v-motion-fade-visible>
          <div class="relative overflow-hidden">
            <input
              required
              type="text"
              placeholder="Your Name"
              class="name w-full py-5 text-xl font-bold transition-colors duration-200 ease-in-out bg-transparent outline-none peer text-zinc-200 placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
            <svg
              viewBox="0 0 300 100"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="input-line-3 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-zinc-200 dark:stroke-zinc-800 peer-focus:!stroke-zinc-200/50 dark:peer-focus:!stroke-zinc-800/50"
              preserveAspectRatio="none"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(66%, 0px);
              "
            >
              <path
                d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"
              ></path>
            </svg>
          </div>
        </div>
        <div class="group" v-motion-fade-visible>
          <div class="relative overflow-hidden">
            <input
              required
              type="text"
              placeholder="Your Email"
              class="email w-full py-5 text-xl font-bold transition-colors duration-200 ease-in-out bg-transparent outline-none peer text-zinc-200 placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
            <svg
              viewBox="0 0 300 100"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="input-line-3 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-zinc-200 dark:stroke-zinc-800 peer-focus:!stroke-zinc-200/50 dark:peer-focus:!stroke-zinc-800/50"
              preserveAspectRatio="none"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(66%, 0px);
              "
            >
              <path
                d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"
              ></path>
            </svg>
          </div>
        </div>
        <div class="group" v-motion-fade-visible>
          <div class="relative overflow-hidden">
            <input
              required
              type="text"
              placeholder="Your Subject"
              class="subject w-full py-5 text-xl font-bold transition-colors duration-200 ease-in-out bg-transparent outline-none peer text-zinc-200 placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
            <svg
              viewBox="0 0 300 100"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="input-line-3 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-zinc-200 dark:stroke-zinc-800 peer-focus:!stroke-zinc-200/50 dark:peer-focus:!stroke-zinc-800/50"
              preserveAspectRatio="none"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(66%, 0px);
              "
            >
              <path
                d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"
              ></path>
            </svg>
          </div>
        </div>
        <div class="group" v-motion-fade-visible>
          <div class="relative overflow-hidden">
            <textarea
              required
              class="message peer min-h-[11rem] w-full resize-none bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
              placeholder="Your Message"
            ></textarea>
            <svg
              viewBox="0 0 300 100"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="input-line-3 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-zinc-200 dark:stroke-zinc-800 peer-focus:!stroke-zinc-200/50 dark:peer-focus:!stroke-zinc-800/50"
              preserveAspectRatio="none"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(66%, 0px);
              "
            >
              <path
                d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"
              ></path>
            </svg>
          </div>
        </div>
        <button
          @click="sendWhatsapp"
          type="button"
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors border border-input bg-background hover:bg-black hover:text-[#e8e3d5ff] h-11 rounded-md px-8 mt-6 bg-[#38312fff] text-[#e8e3d5ff]"
        >
          <div style="transform: none">
            <div class="inline-flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg
              ><span>Send</span>
            </div>
          </div>
        </button>
      </form>
      <div class="flex justify-between w-full py-12">
        <div>
          <p
            class="mb-4 text-xl font-semibold text-zinc-200 dark:text-zinc-800"
          >
            Github
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Link"
            href="https://github.com/ramdhannassyirah"
            ><div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-8 text-zinc-100 dark:text-zinc-800"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                ></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg></div
          ></a>
        </div>
        <div class="flex flex-col items-end">
          <p
            class="mb-4 text-xl font-semibold text-zinc-200 dark:text-zinc-800"
          >
            Links
          </p>
          <div class="flex items-center gap-x-2">
            <a
              target="_blank"
              aria-label="noopener noreferrer"
              class="mx-2"
              href="https://instagram.com/ramdhannassyirah"
              ><div style="transform: none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-zinc-200 dark:text-zinc-800"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg></div></a
            ><a
              target="_self"
              aria-label=""
              class="mx-2"
              href="ramdhannassyirahh@gmail.com"
              ><div style="transform: none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-zinc-200 dark:text-zinc-800"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg></div></a
            ><a
              target="_blank"
              aria-label="noopener noreferrer"
              class="mx-2"
              href="https://www.linkedin.com/in/ramdhannassyirah/"
              ><div style="transform: none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-zinc-200 dark:text-zinc-800"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg></div
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    sendWhatsapp: function () {
      var phonenumber = "+6285156330411";

      var name = document.querySelector(".name").value;
      var email = document.querySelector(".email").value;
      var subject = document.querySelector(".subject").value;
      var message = document.querySelector(".message").value;

      var url =
        "https://wa.me/" +
        phonenumber +
        "?text=" +
        "Nama : " +
        name +
        "%0a" +
        "Email : " +
        email +
        "%0a" +
        "Subject : " +
        subject +
        "%0a" +
        "Message : " +
        message +
        "%0a%0a";

      window.open(url, "_blank").focus();
    },
  },
};
</script>
