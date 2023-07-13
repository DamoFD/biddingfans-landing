<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  card: Number,
});

const img = ref('');
const title = ref('');
const description = ref('');

watchEffect(() => {
  switch (props.card) {
    case 1:
      img.value = new URL('../assets/svg/sparkle.svg', import.meta.url).href;
      title.value = 'Unique Interaction';
      description.value = 'Bid on time slots for exclusive access with your favorite creators.';
      break;
    case 2:
      img.value = new URL('../assets/svg/engagement.svg', import.meta.url).href;
      title.value = 'Real Engagement';
      description.value = 'Engage with creators live, not just through static content.';
      break;
    default:
      img.value = new URL('../assets/svg/diamond.svg', import.meta.url).href;
      title.value = 'Personalized Experiences';
      description.value = 'The auction system ensures every interaction is an exclusive experience.';
  }
});

</script>

<template>
  <div class="border-2 border-brand-neutral rounded-xl flex flex-col mt-4">
    <div class="
    bg-brand-neutral
    rounded-xl
    w-16
    h-16
    flex
    justify-center
    items-center
    m-4"
    >
      <img
          :src="img"
          :alt="title"
          class="w-10 h-10"
      />
    </div>
    <h3 class="text-brand-white font-nunito font-extrabold text-2xl ml-4">{{ title }}</h3>
    <p class="text-brand-neutral-secondary text-sm font-inter m-4">{{ description }}</p>
  </div>
</template>
