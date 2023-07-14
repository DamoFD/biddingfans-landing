<script setup>
import { ref } from 'vue';

const links = ref([
  {
    name: 'First Menu',
    active: false,
    showMenu: false,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  },
  {
    name: 'Second Menu',
    active: false,
    showMenu: false,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  },
  // Add more links as needed...
]);

const toggleActive = (index) => {
  links.value.forEach((link, i) => {
    if (i === index) {
      link.active = !link.active;
      link.showMenu = !link.showMenu;
    } else {
      link.active = false;
      link.showMenu = false;
    }
  });
};
</script>

<template>
<div class="w-full my-10">
    <div
        v-for="(link, index) in links"
        :key="index"
        class="w-full"
    >
      <div class="flex items-center justify-between bg-gradient-to-t from-brand-black to-brand-neutral">
      <h3 class="text-brand-white font-nunito font-extrabold" @click="toggleActive(index)">
        {{ link.name }}
      </h3>
      <span class="arrow" :class="{ 'rotate-180': link.showMenu}"></span>
      </div>
      <transition name="slide">
        <ul v-show="link.showMenu" class="bg-white slide-down" :style="{height: link.showMenu ? `${link.items.length * 50}px` : '0'}">
          <li v-for="(item, itemIndex) in link.items" :key="`item-${itemIndex}`">
            <a class="text-brand-white" href="#">{{ item }}</a>
          </li>
        </ul>
      </transition>
    </div>
</div>
</template>

<style scoped>
.arrow {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #FCFCFC;
  transition: transform .5s ease-in-out;
}

.rotate-180 {
  transform: rotate(180deg);
}

.slide-down {
  overflow: hidden;
  transition: height .3s ease-in-out;
}

</style>
