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
  <div class="border-2 border-brand-neutral rounded-lg flex flex-col mt-4 glowing-effect in">
    <div class="
    bg-brand-neutral
    rounded-xl
    w-16
    h-16
    flex
    justify-center
    items-center
    m-4
    md:ml-10
    md:h-20
    md:w-20
    "
    >
      <img
          :src="img"
          :alt="title"
          class="w-10 h-10 md:w-14 md:h-14"
      />
    </div>
    <h3 class="text-brand-white font-nunito font-extrabold text-2xl ml-4 md:text-3xl md:ml-10">{{ title }}</h3>
    <p class="text-brand-neutral-secondary text-sm font-inter m-4 md:text-lg md:ml-10">{{ description }}</p>
  </div>
</template>

<style>
.glowing-effect {
  position: relative;
}

.glowing-effect:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  background: linear-gradient(120deg, #00F260, #0575E6, #00F260);
  background-size: 300% 300%;
  clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);
}

.glowing-effect.in:after {
  animation: frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s ease-in-out infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
}

@keyframes frame-enter {
  0% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%);
  }
}
</style>
