<template>
  <div class="flex flex-col md:flex-row items-center md:items-center gap-8 p-6 py-12 md:p-12">
    <!-- Left Side Image -->
    <div class="md:w-1/2 flex justify-center">
      <img 
        src="/src/assets/About-1.png" 
        alt="Section Image" 
        class="w-84 h-84 object-cover rounded-xl"
      >
    </div>

    <!-- Right Side Content -->
    <div class="md:w-1/2 flex flex-col justify-center text-left">
      <h3 class="text-lg font-semibold text-gray-600">About</h3>
      <h2 class="text-2xl font-bold text-gray-900 mt-2">Some Title of Section</h2>
      <p class="text-gray-700 mt-3">
        This is a sample paragraph that explains the section. It can have multiple lines,
        and the image on the left will automatically adjust its height accordingly.
        The goal is to keep everything well-aligned and visually appealing.
      </p>

      <!-- 3 Points with Icons -->
      <div class="mt-4 space-y-3">
        <div class="flex items-center gap-2">
          <i class="pi pi-check-circle text-blue-600 text-lg"></i>
          <span class="text-gray-800">Point One Description</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-star text-yellow-500 text-lg"></i>
          <span class="text-gray-800">Point Two Description</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-info-circle text-green-600 text-lg"></i>
          <span class="text-gray-800">Point Three Description</span>
        </div>
      </div>

      <!-- Button with Fixed Size -->
      <button class="mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 inline-flex w-fit">
        Know More...
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveSection"
};

</script>

<style>
/* Import PrimeIcons */
@import "primeicons/primeicons.css";
</style>
