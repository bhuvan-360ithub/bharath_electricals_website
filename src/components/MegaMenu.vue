<template>
    <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="item in menuItems" :key="item.title" class="flex items-center space-x-4 cursor-pointer p-2 hover:bg-gray-100">
        <div class="w-12 h-12 flex items-center justify-center rounded-lg" :class="item.bgColor">
          <i :class="['pi', item.icon, 'text-xl', item.textColor]"></i>
        </div>
        <div>
          <h5 class="font-semibold">{{ item.title }}</h5>
          <p class="text-sm text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    mobile: Boolean
  })
  
  const menuItems = [
    { title: "Notifications", description: "Real-time alerts", icon: "pi-bell", bgColor: "bg-yellow-100", textColor: "text-yellow-500" },
    { title: "Analytics", description: "Data insights", icon: "pi-chart-line", bgColor: "bg-green-100", textColor: "text-green-500" },
    { title: "Security", description: "Top-tier protection", icon: "pi-lock", bgColor: "bg-red-100", textColor: "text-red-500" }
  ]
  </script>
  
  <style scoped>
  div {
    pointer-events: auto; /* Ensure menu is clickable */
  }
  </style>
  