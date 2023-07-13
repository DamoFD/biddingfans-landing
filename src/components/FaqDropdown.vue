<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  // Add as many FAQ items as you want
]);

const activeIndex = ref(null);

const toggle = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>

<template>
  <div class="faq-dropdown">
    <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item border-b-2 border-gray-200 last:border-0"
    >
      <h3
          @click="toggle(index)"
          class="font-semibold text-lg cursor-pointer py-2 hover:text-blue-600 transition-colors"
      >
        {{ faq.question }}
      </h3>
      <div
          v-if="activeIndex === index"
          class="answer text-gray-600 mt-2 mb-4 transition-all"
          v-html="faq.answer"
      ></div>
    </div>
  </div>
</template>
