<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import HeroCarousel from '../components/HeroCarousel.vue';
import Tickle from '../components/Tickle.vue';
import Categories from '../components/Categories.vue';
import AboutUs from '../components/AboutUs.vue';
import Stats from '../components/Stats.vue';
import BrandSlider from '../components/BrandSlider.vue';
import ShopByCategory from '../components/ShopByCategory.vue';
import Product from '../components/Products.vue';
import Footer from '../components/Footer.vue';
import 'primeicons/primeicons.css';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow pt-20">
      <HeroCarousel />
      <Tickle />

      <!-- Featured Categories Section -->
      <section class="py-16 bg-secondary-light">
        <ShopByCategory />
      </section>

      <section class="py-16 bg-white">
        <AboutUs />
        <Stats />
      </section>

      <section class="py-16 bg-secondary-light">
        <BrandSlider />
      </section>

      <!-- Testimonials Section -->
      <section class="py-16 bg-secondary-light">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="i in 3" :key="i" class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <div class="text-yellow-400 flex">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-gray-700 mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam."
              </p>
              <div class="flex items-center">
                <img
                  :src="`https://randomuser.me/api/portraits/women/${i + 10}.jpg`"
                  alt="Customer"
                  class="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 class="font-medium">Customer Name</h4>
                  <p class="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
