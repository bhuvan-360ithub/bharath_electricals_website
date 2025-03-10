<template>
    <div class="flex flex-wrap justify-center  gap-6 py-10">
        
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="relative flex flex-col bg-white rounded-lg p-6 w-72"
      >
        <div class="flex items-center space-x-4 w-full">
          <div class="bg-blue-100 flex items-center justify-center w-14 h-14 rounded-lg">
            <component :is="stat.icon" class="w-8 h-8 text-blue-500" />
          </div>
          <div class="flex flex-col">
            <div class="text-4xl font-semibold">{{ stat.currentValue }}</div>
            <div class="text-gray-500 text-lg">{{ stat.title }}</div>
          </div>
        </div>
  
        <!-- Vertical Divider (Only on large screens) -->
        <div
          v-if="index !== stats.length - 1"
          class="hidden lg:block absolute right-0 top-1/4 h-2/4 w-px bg-gray-300"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  // SVG Icons as Vue Components
  const IconUsers = {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 13l3 3m0 0l3-3m-3 3V7m-6 12a6 6 0 110-12 6 6 0 010 12z" />
    </svg>`,
  };
  
  const IconRevenue = {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8m12 4a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`,
  };
  
  const IconProjects = {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>`,
  };
  
  const IconGrowth = {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h3l3 10 3-16 3 6h3" />
    </svg>`,
  };
  
  // Stats data
  const stats = ref([
    { title: "Users", target: 5000, currentValue: ref(0), icon: IconUsers },
    { title: "Revenue", target: 120000, currentValue: ref(0), icon: IconRevenue },
    { title: "Projects", target: 340, currentValue: ref(0), icon: IconProjects },
    { title: "Growth", target: 75, currentValue: ref(0), icon: IconGrowth },
  ]);
  
  // Function to animate numbers
  const animateStats = () => {
    stats.value.forEach((stat) => {
      let step = Math.ceil(stat.target / 100);
      let count = 0;
  
      let interval = setInterval(() => {
        count += step;
        if (count >= stat.target) {
          stat.currentValue = stat.target;
          clearInterval(interval);
        } else {
          stat.currentValue = count;
        }
      }, 20);
    });
  };
  
  onMounted(() => {
    animateStats();
  });
  </script>
  
  <style scoped>
  .shadow-lg {
    transition: transform 0.3s ease-in-out;
  }
  .shadow-lg:hover {
    transform: translateY(-5px);
  }
  </style>
  