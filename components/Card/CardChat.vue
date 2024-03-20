<template>
  <div class="">
    <div class="flex flex-col items-start w-full">
      <div class="flex items-center gap-2">
        <div class="overflow-hidden rounded-full">
          <!-- <img src="https://picsum.photos/40" alt="" /> -->
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <p class="font-bold font-Manrope">Anonim</p>
            <span class="text-xs">{{ tanggal }}</span>
          </div>
        </div>
      </div>
      <div class="p-2 mt-3 bg-white rounded-xl">
        <p>
          {{ pesan }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardChat",
  props: {
    pesan: {
      type: String,
    },
    tanggal: {
      type: String,
    },
    name: {
      type: String,
    },
  },
};
</script>
