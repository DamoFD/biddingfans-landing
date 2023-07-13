<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  card: Number,
});

const title = ref('');
const description = ref('');
const points = ref([]);
const btn = ref('');

switch (props.card) {
  case 1:
    title.value = 'Schedule';
    description.value = 'Create your available times.';
    points.value = [
      'Set your own hours',
      'No more being booked out',
      'No customer rejections',
      'Auto scheduling',
    ];
    btn.value = 'Creator Account';
    break;
  case 2:
    title.value = 'Bidt';
    description.value = 'Bid for time with your idol';
    points.value = [
      'Fans bid on desired time',
      'Exclusive content',
      'You decide the price',
      'No waiting times',
    ];
    btn.value = 'Fan Account';
    break;
  default:
    title.value = 'Fulfill';
    description.value = 'Maximize engagement';
    points.value = [
      'Creators maximize gains',
      'Fans get exclusive content',
      'Increased engagement',
      'Smooth process',
    ];
    btn.value = 'Early Access';
}
</script>

<template>
  <div class="border-2 border-brand-neutral rounded-xl p-4 mt-4">
    <h3 class="text-brand-white text-2xl font-nunito font-extrabold">{{title}}</h3>
    <p class="text-brand-neutral-secondary font-inter">{{description}}</p>
    <hr class="text-brand-neutral-secondary mt-6" />
    <ul class="mt-6">
      <li
          v-for="point in points"
          :key="point"
          class="flex items-center mt-4"
      >
        <img src="../assets/svg/check.svg" alt="bullet point" />
        <p class="text-brand-white font-inter ml-2">{{point}}</p>
      </li>
    </ul>
    <div class="w-full flex justify-center mt-6">
      <button class="bg-brand-white text-brand-black px-8 py-2 rounded-full font-nunito font-extrabold">
        {{btn}}
      </button>
    </div>
  </div>
</template>
