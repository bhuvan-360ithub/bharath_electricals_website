<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  bgColor: String,
  textColor: String,
})
</script>

<template>
  <div class="flex space-x-4 items-center">
    <div :class="['w-12 h-12 flex items-center justify-center rounded-lg', bgColor]">
      <i :class="['pi', icon, 'text-xl', textColor]"></i>
    </div>
    <div>
      <h5 class="font-semibold">{{ title }}</h5>
      <p class="text-gray-500 text-sm">{{ description }}</p>
    </div>
  </div>
</template>
