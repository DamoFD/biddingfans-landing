<template>
  <div class="w-full max-w-md mx-auto">
    <div
        class="border border-gray-300 rounded-lg shadow-sm"
        v-for="(item, i) in items"
        :key="i"
    >
      <button
          @click="toggle(i)"
          class="w-full text-left px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 flex justify-between items-center"
      >
        {{ item.title }}
        <span class="arrow" :class="{ 'rotate-180': open === i}" />
      </button>

      <div
          class="border-t border-gray-300 bg-gray-50 overflow-hidden transition-all ease-in-out duration-500"
          :class="open === i ? 'max-h-20' : 'max-h-0'"
      >
        <div class="px-4 py-2">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { title: 'Title 1', content: 'Content 1' },
  { title: 'Title 2', content: 'Content 2' },
  { title: 'Title 3', content: 'Content 3' },
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
  border-top: 5px solid black;
  transition: transform .3s ease-in-out;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
