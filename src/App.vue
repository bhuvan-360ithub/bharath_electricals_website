<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeroCarousel from './components/HeroCarousel.vue';
import ShopByCategoryVue from './components/ShopByCategory.vue'
import Product from './components/Products.vue'
import Footer from './components/Footer.vue';
import 'primeicons/primeicons.css'
import ShopByCategory from './components/ShopByCategory.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <HeroCarousel />
      
      <!-- Featured Categories Section -->
      <section class="py-16 bg-secondary-light">
        <ShopByCategory />
      </section>

      <section class="py-16 bg-white">
        <Product />
      </section>
      
      <!-- New Arrivals Section -->
      <section class="py-16">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">New Arrivals</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="i in 4" :key="i" class="group">
              <div class="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  :src="`https://source.unsplash.com/random/300x400/?fashion,product${i}`" 
                  alt="Product"
                  class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                >
                <div class="absolute top-2 right-2">
                  <span class="bg-primary text-white text-xs px-2 py-1 rounded">New</span>
                </div>
                <div class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button class="bg-white text-gray-900 px-4 py-2 rounded-md font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 class="font-medium text-gray-900">Product Name {{ i }}</h3>
              <p class="text-gray-600 mb-2">Category</p>
              <p class="font-bold text-gray-900">$99.99</p>
            </div>
          </div>
          <div class="text-center mt-10">
            <a href="#" class="btn btn-primary inline-block">View All Products</a>
          </div>
        </div>
      </section>
      
      <!-- Promotion Banner -->
      <section class="py-16 bg-primary text-white">
        <div class="container-custom">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="mb-8 md:mb-0 md:w-1/2">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">Summer Sale</h2>
              <p class="text-xl mb-6">Up to 50% off on selected items. Limited time offer.</p>
              <a href="#" class="bg-white text-primary hover:bg-gray-100 transition-colors duration-200 px-6 py-3 rounded-md font-bold inline-block">
                Shop the Sale
              </a>
            </div>
            <div class="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Summer Sale"
                class="rounded-lg shadow-lg w-full h-auto"
              >
            </div>
          </div>
        </div>
      </section>
      
      <!-- Testimonials Section -->
      <section class="py-16 bg-secondary-light">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="i in 3" :key="i" class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <div class="text-yellow-400 flex">
                  <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p class="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
              <div class="flex items-center">
                <img 
                  :src="`https://randomuser.me/api/portraits/women/${i + 10}.jpg`" 
                  alt="Customer" 
                  class="w-10 h-10 rounded-full mr-3"
                >
                <div>
                  <h4 class="font-medium">Customer Name</h4>
                  <p class="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Newsletter Section -->
      <section class="py-16">
        <div class="container-custom">
          <div class="bg-secondary rounded-lg p-8 md:p-12">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p class="text-gray-600 mb-6">Stay updated with our latest products, trends, and exclusive offers.</p>
              <form class="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  class="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                <button 
                  type="submit" 
                  class="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
              <p class="text-sm text-gray-500 mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>