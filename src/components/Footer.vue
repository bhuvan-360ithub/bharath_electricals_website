<template>
  <footer class="bg-gray-100 py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-start md:items-center md:justify-between">
        <div class="flex items-center space-x-3">
          <img src="/src/assets/logo-img.png" alt="Logo" class="h-14 mb-4" />
        </div>
        <div class="flex space-x-4 mt-4 pb-6 md:pb-0 md:mt-0 md:ml-auto">
          <i class="pi pi-facebook text-xl text-gray-600 hover:text-blue-500 cursor-pointer transition"></i>
          <i class="pi pi-instagram text-xl text-gray-600 hover:text-blue-500 cursor-pointer transition"></i>
          <i class="pi pi-twitter text-xl text-gray-600 hover:text-blue-500 cursor-pointer transition"></i>
          <i class="pi pi-github text-xl text-gray-600 hover:text-blue-500 cursor-pointer transition"></i>
          <i class="pi pi-dribbble text-xl text-gray-600 hover:text-blue-500 cursor-pointer transition"></i>
        </div>
      </div>

      <div class="border-t border-gray-300 py-6 mx-6"></div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6">
        <div v-for="(section, index) in sections" :key="index" class="border-b md:border-none pb-2 md:pb-0">
          <button
            @click="toggleSection(index)"
            class="flex justify-between items-center w-full text-gray-800 font-semibold py-2 md:py-0 no-hover md:pointer-events-none"
          >
            {{ section.title }}
            <i 
              v-if="isMobile" 
              :class="{'pi pi-chevron-down': !section.open, 'pi pi-chevron-up': section.open}" 
            ></i>
          </button>
          <ul :class="['mt-2 space-y-3 md:block', { 'hidden': !section.open && isMobile }]">
            <li v-for="(item, idx) in section.links" :key="idx">
              <a href="#" class="text-gray-600 hover:text-blue-500 transition">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-300 pt-6"></div>

      <div class="text-center text-gray-500 text-sm">
        © 2025. Company Name. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sections = ref([
  { title: "Services", open: false, links: ["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimization"] },
  { title: "Company", open: false, links: ["About", "Meet the Team", "Accounts Review"] },
  { title: "Helpful Links", open: false, links: ["Contact", "FAQs", "Live Chat"] },
  { title: "Legal", open: false, links: ["Accessibility", "Returns Policy", "Refund Policy", "Hiring-3 Statistics"] },
]);

const isMobile = ref(window.innerWidth < 768);

const toggleSection = (index) => {
  if (isMobile.value) {
    sections.value[index].open = !sections.value[index].open;
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    sections.value.forEach((section) => (section.open = true));
  } else {
    sections.value.forEach((section) => (section.open = false));
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
footer {
  transition: all 0.3s ease;
}

.no-hover:hover {
  color: inherit !important;
}

@media (min-width: 768px) {
  .no-hover {
    pointer-events: none;
  }
}
</style>
