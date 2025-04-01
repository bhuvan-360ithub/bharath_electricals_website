<template>
    <section class="py-20 px-4 max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
  <div class="w-8 h-0.5 bg-blue-500"></div>
  <h2 class="text-lg md:text-xl font-medium uppercase tracking-widest">How we work?</h2>
</div>

<!-- Headline -->
<h1 class="text-3xl md:text-4xl font-semibold leading-snug text-center mb-12">
  <span class="text-blue-700">Streamlined Process: </span> From Order to Reliable Delivery
</h1>


      
      <!-- Steps -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-6xl mx-auto">
        <template v-for="(step, index) in steps" :key="index">
          <div class="flex flex-col items-center text-center w-48">
            <div class="w-16 h-16 flex items-center justify-center rounded-full bg-blue-900 text-white text-2xl">
              <i :class="step.icon"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
          <div v-if="index < steps.length - 1" class="hidden md:block w-24 h-0.5 bg-gray-300 my-4"></div>
        </template>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: [
          { icon: 'pi pi-lightbulb', title: 'Step 1', description: 'Discuss needs, expert advice, place your order simply.' },
          { icon: 'pi pi-code', title: 'Step 2', description: 'Verify stock, prepare your order for quick dispatch.' },
          { icon: 'pi pi-cog', title: 'Step 3', description: 'Secure packaging, reliable logistics, safe and timely delivery.' },
          { icon: 'pi pi-send', title: 'Step 4', description: 'Receive order quickly, ongoing support for all inquiries.' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @media (max-width: 768px) {
    .flex-row {
      flex-direction: column;
    }
  }
  </style>
  