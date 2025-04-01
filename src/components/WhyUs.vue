<template>
  <div class="bg-white p-6 md:px-8">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 md:px-0">
      <div v-for="(feature, index) in features" :key="index" 
           class="flex items-start space-x-4"
           :class="{
             'md:ml-10': index === 0,  /* More space for the first item on medium+ screens */
             'md:mr-10': index === features.length - 1 /* More space for the last item on medium+ screens */
           }">
        <!-- Icon Section -->
        <div class="relative flex items-center justify-center w-14 h-14 bg-blue-600 rounded-lg">
          <i :class="feature.icon" class="text-2xl text-white"></i>
        </div>
        <!-- Text Section -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900">{{ feature.title }}</h3>
          <p class="text-gray-600 text-sm">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Extensive Product Range",
          description: "Wide range, quality items stocked.",
          icon: "pi pi-box" // PrimeIcons class
        },
        {
          title: "Competitive Wholesale Pricing",
          description: "Cost-effective bulk purchase options.",
          icon: "pi pi-clock" // PrimeIcons class
        },
        {
          title: "Assured Products",
          description: "Trusted brands, rigorously tested items.",
          icon: "pi pi-users" // PrimeIcons class
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Ensures a visually balanced layout */
</style>
