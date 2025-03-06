<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Slide {
  id: number
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/src/assets/Banner-1.png',
  },
  {
    id: 2,
    image: '/src/assets/Banner-2.png',
  },
  {
    id: 3,
    image: '/src/assets/Banner-1.png',
  },
]

const currentSlide = ref(0)
const autoplayInterval = ref<number | null>(null)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval.value = window.setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value !== null) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

onMounted(() => startAutoplay())
onBeforeUnmount(() => stopAutoplay())
</script>

<template>
  <section class="relative flex justify-center bg-gray-100 py-4 sm:py-8 md:py-10 lg:py-12 xl:py-16">
    <div class="relative w-[90%] max-w-screen-2xl mx-auto overflow-hidden rounded-lg md:mt-16">
      <div class="relative flex h-[300px] md:h-[500px]">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
          :class="index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'"
        >
          <img
            :src="slide.image"
            alt="Slide Image"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <button
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 z-30"
        @click="prevSlide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7 7-7" />
        </svg>
      </button>

      <button
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 z-30"
        @click="nextSlide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
        <button
          v-for="(slide, index) in slides"
          :key="`dot-${slide.id}`"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-gray-300'"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>