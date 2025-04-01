<template>
    <div class="w-4/5 sm:w-9/10 mx-auto py-20">
        <div class="flex flex-nowrap items-center justify-center md:justify-start gap-4 mb-4">
  <div class="w-8 h-0.5 bg-blue-500"></div>
  <h2 class="text-lg md:text-xl font-medium uppercase tracking-widest">FAQ</h2>
</div>

<!-- Headline -->
<h1 class="text-3xl md:text-4xl font-semibold leading-snug text-center mb-12">
  Your Questions, <span class="text-blue-700">Our Clear and Concise Answers</span>  
</h1>


      <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
        <div
          :class="expandedIndex === index ? 'bg-gray-100 text-gray-800 rounded-t-lg' : 'bg-gray-200 text-gray-800 rounded-lg'"
          class="p-4 flex justify-between items-center cursor-pointer"
          @click="toggleFAQ(index)"
        >
          <span class="font-semibold">{{ faq.question }}</span>
          <i :class="expandedIndex === index ? 'pi pi-minus' : 'pi pi-plus'" class="text-lg"></i>
        </div>
        <div v-if="expandedIndex === index" class="bg-gray-100 text-gray-800 -mt-1">
          <hr class="border-gray-300" />
          <div class="p-4 rounded-b-lg">{{ faq.answer }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expandedIndex: 0, // First FAQ open by default
        faqs: [
          {
            question: "What types of electrical products do you offer?",
            answer: "Bharath Electricals boasts an extensive inventory encompassing a vast spectrum of electrical products. This includes, but is not limited to, a comprehensive selection of wires and cables of various gauges and types, a diverse range of switches and sockets, an array of lighting fixtures catering to both residential and commercial needs, conduits, circuit breakers, distribution boards, and a multitude of other essential electrical components. We are committed to providing a one-stop solution for all your electrical supply requirements.",
          },
          {
            question: "Do you offer bulk discounts?",
            answer: "Absolutely. Recognizing the needs of our wholesale clients, we offer highly competitive pricing structures tailored to bulk orders. Our aim is to provide significant cost savings for our valued partners. To discuss specific bulk discount options, please contact our sales team, who will be delighted to provide personalized quotes based on your volume requirements.",
          },
          {
            question: "What areas do you serve?",
            answer: "Bharath Electricals is dedicated to serving a broad geographical area, primarily focusing on the South Indian region. Our distribution network effectively covers all major cities and surrounding areas within Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala. We are continuously expanding our reach to better serve our clients. Please contact us to confirm if we deliver to your specific location.",
          },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.expandedIndex = this.expandedIndex === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
  .w-4\/5 {
    width: 80%;
  }
  .sm\:w-9\/10 {
    width: 90%;
  }
  </style>
  