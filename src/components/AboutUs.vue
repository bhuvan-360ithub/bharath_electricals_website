<template>
  <div class="container mx-auto py-20 p-6 md:p-10 flex flex-col md:flex-row items-center gap-16">
    <!-- Left Section - Image -->
    <div class="flex-1 flex justify-center items-center">
      <div class="w-full max-w-lg aspect-w-1 aspect-h-1">
        <img 
          src="/src/assets/About-1.png" 
          alt="Cleaning Service" 
          class="rounded-[40px] w-full h-full object-cover shadow-xl"
        />
      </div>
    </div>

    <!-- Right Section - Content -->
    <div class="flex-1 text-center md:text-left space-y-6">
      <div class="flex justify-center md:justify-start items-center gap-4">
        <div class="w-8 h-0.5 bg-blue-500"></div>
        <h2 class="text-lg font-medium uppercase tracking-widest">ABOUT US</h2>
      </div>
      <h3 class="text-3xl md:text-4xl font-semibold leading-snug">
        Your Reliable Partner for <span class="text-blue-600">Electrical
          Wholesale Needs.</span>  
      </h3>
      <p class="text-sm md:text-md text-gray-700 leading-relaxed">
        Bharath Electricals stands as your reliable partner for comprehensive electrical wholesale needs. We offer an extensive product range, ensuring quality and timely delivery. Our commitment is to empower your business with competitive pricing, expert support, and unwavering reliability, building lasting partnerships.
      </p>
      
      <!-- Statistics Section -->
      <div class="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 text-center gap-8">
        <div class="flex-1">
          <span class="text-2xl md:text-3xl font-semibold text-gray-800">{{ projectCount }}+</span>
          <p class="text-gray-600 text-md">Product Lines</p>
        </div>
        <div class="hidden md:block w-px bg-gray-400 h-20"></div>
        <div class="flex-1">
          <span class="text-2xl md:text-3xl font-semibold text-gray-800">{{ expertCount }}+ Years</span>
          <p class="text-gray-600 text-md">Industry Experience</p>
        </div>
        <div class="hidden md:block w-px bg-gray-400 h-20"></div>
        <div class="flex-1">
          <span class="text-2xl md:text-3xl font-semibold text-gray-800">{{ satisfactionCount }}+</span>
          <p class="text-gray-600 text-md">Serving Business Clients</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectCount: 0,
      expertCount: 0,
      satisfactionCount: 0,
    };
  },
  mounted() {
    this.animateCount("projectCount", 500);
    this.animateCount("expertCount", 10);
    this.animateCount("satisfactionCount", 200);
  },
  methods: {
    animateCount(field, target) {
      let count = 0;
      const interval = setInterval(() => {
        this[field] = count;
        if (count >= target) clearInterval(interval);
        count += Math.ceil(target / 50); // Speed control
      }, 25);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>
