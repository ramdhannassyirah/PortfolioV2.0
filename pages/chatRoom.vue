<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-center w-full">
      <main
        class="no-scrollbar w-full scroll-smooth transition-all px-5 lg:px-0 md:px-0 duration-300 lg:min-h-screen lg:max-w-[854px]"
      >
        <div class="my-6">
          <h1 class="text-2xl font-bold">Chat Room</h1>
          <p>Kirimkan Pesan Sekarang Juga</p>
        </div>
        <div
          ref="chatContainer"
          class="no-scrollbar mb-4 h-[60vh] space-y-6 overflow-y-auto scroll-smooth border-b border-neutral-200 pb-2 dark:border-neutral-700 md:h-[65vh]"
        >
          <div class="flex flex-col gap-6">
            <CardChat
              v-for="data in chatData"
              :key="data"
              :pesan="data.pesan"
              :tanggal="data.tanggal"
              :name="data.name"
            />
          </div>
        </div>
        <div
          v-if="isLogin"
          class="flex items-center justify-between w-full bg-[#fbeee0] rounded-full input"
        >
          <textarea
            ref="messageInput"
            type="text"
            placeholder="Type a message"
            class="w-full p-2 text-xl placeholder:text-[#422800] font-bold bg-transparent outline-none"
          />
          <button @click="sendData" class="button-74" role="button">
            SEND
          </button>
        </div>
        <div v-else>
          <button class="button-74">Login with Google</button>
        </div>
      </main>
    </div>
  </div>
  <div class="flex justify-center">
    <NuxtLink class="my-10 text-2xl font-bold rounded-lg button-54" to="/"
      >- Back -</NuxtLink
    >
  </div>
</template>

<script>
import {collection, onSnapshot, addDoc} from "firebase/firestore";
import db from "../firebase";

export default {
  data() {
    return {
      isLogin: true,
      chatData: [],
    };
  },
  async mounted() {
    try {
      const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const data = {
              name: change.doc.id,
              tanggal: change.doc.data().tanggal,
              pesan: change.doc.data().pesan,
            };
            this.chatData.push(data);

            // Mengurutkan chatData berdasarkan tanggal setelah menambahkan pesan baru
            this.chatData.sort(
              (a, b) => new Date(a.tanggal) - new Date(b.tanggal)
            );

            this.$nextTick(this.scrollChatContainer);
          }
        });
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    async sendData() {
      const input = this.$refs.messageInput.value.trim();
      if (!input) {
        return alert("Please enter a message");
      }
      const currentDate = new Date();
      const tanggal = currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      await addDoc(collection(db, "users"), {
        pesan: input,
        tanggal: tanggal,
      });

      this.$refs.messageInput.value = ""; // Kosongkan textarea setelah pesan terkirim
    },
    scrollChatContainer() {
      const container = this.$refs.chatContainer;
      container.scrollTop = container.scrollHeight;
    },
  },
};
</script>

<style scoped>
.input {
  box-shadow: #422800 4px 4px 0 0;
  border: 2px solid #422800;
}

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

.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 10px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
</style>
