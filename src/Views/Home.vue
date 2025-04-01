<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import HeroCarousel from '../components/HeroCarousel.vue';
import AboutUs from '../components/AboutUs.vue';
import Tickle from '../components/Tickle.vue';
// import Categories from '../components/Categories.vue';
import BrandSlider from '../components/BrandSlider.vue';
import ShopByCategory from '../components/ShopByCategory.vue';
import WorkProcess from '../components/WorkProcess.vue';
import WhyUs from '../components/WhyUs.vue';
import Testimonials from '../components/Testimonials.vue';
import FAQ from '../components/FAQ.vue';
import Product from '../components/Products.vue';
import Footer from '../components/Footer.vue';
import 'primeicons/primeicons.css';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow pt-14">
      <HeroCarousel />
      <section class="py-16 bg-white">
        <WhyUs />
        <AboutUs />
      </section>
      <!-- Featured Categories Section -->
      <section>
        <ShopByCategory />
        <WorkProcess />
      </section>



      <section class="py-20 bg-secondary-light">
        <BrandSlider />
      </section>
      <Testimonials />
      <div class="w-full h-0.5 bg-gray-200"></div>


        <FAQ />
    </main>
    <Tickle />

    <Footer />
  </div>
</template>
