<script setup lang="ts">
defineProps<{
  imagePath: string;
  categoryName: string;
  productCount: number;
}>();
</script>

<template>
  <div
    class="group border border-gray-300 p-4 rounded-lg transition-shadow duration-600 hover:shadow-lg w-full max-w-xs mx-auto"
  >
    <div class="overflow-hidden rounded-md h-64">
      <img
        :src="imagePath"
        alt="Category"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div class="mt-3">
      <h3 class="text-lg font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
        {{ categoryName }}
      </h3>
      <p class="text-gray-500">{{ productCount }} products</p>
    </div>
  </div>
</template>
