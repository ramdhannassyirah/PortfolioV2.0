<template>
  <div
    class="mr-3 mt-3 min-h-fit flex flex-col justify-between gap-1 w-[400px] rounded-xl bg-[#eda29aff] shadow-[5px_5px_0px_0px_rgba(56,49,47)] p-4 sm:pe-8">
    <h1 class="font-bold text-[#38312fff] font-Nunito-Sans">
      {{ name }}
    </h1>
    <p>{{ time }}</p>
  </div>
</template>

<script>

export default {
  name: "CardExperience",
  props: {
    name: {
      type: String,
    },
    time: {
      type: String,
    },
  },
};

</script>