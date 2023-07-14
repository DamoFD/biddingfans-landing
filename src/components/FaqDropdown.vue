<template>
  <div class="w-full max-w-md mx-auto">
    <div
        class="rounded-lg shadow-sm"
        v-for="(item, i) in items"
        :key="i"
    >
      <button
          @click="toggle(i)"
          class="w-full text-left px-4 py-2 text-brand-white font-nunito font-extrabold hover:bg-gray-100 flex justify-between items-center bg-gradient-to-t from-brand-black to-brand-neutral rounded-lg mt-4"
      >
        {{ item.title }}
        <span class="arrow" :class="{ 'rotate-180': open === i}" />
      </button>

      <div
          class=" bg-gray-50 overflow-hidden transition-all ease-in-out duration-500"
          :class="open === i ? 'max-h-20' : 'max-h-0'"
      >
        <p class="px-4 py-2 text-brand-white">
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { title: 'What is BiddingFans?', content: 'Content 1' },
  { title: 'When will become BiddingFans available?', content: 'Content 2' },
  { title: 'How do I get early access to BiddingFans?', content: 'Content 3' },
]);

const open = ref(null);

const toggle = (i) => {
  if (open.value === i) {
    open.value = null;
  } else {
    open.value = i;
  }
};
</script>

<style scoped>
.arrow {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #02AABD;
  transition: transform .3s ease-in-out;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
