<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import AboutUs from '../components/AboutUs.vue';
import WorkProcess from '../components/WorkProcess.vue';
import Footer from '../components/Footer.vue';
import 'primeicons/primeicons.css';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow pt-14">
      
      <section class="py-8 bg-gray-100">
        <!-- Image Section with Increased Width -->
        <div class="w-11/12 mx-auto mb-8">
          <img 
            src="/src/assets/Banner-1.png" 
            alt="About Us" 
            class="w-full h-auto rounded-xl block"
          />
        </div>
        <AboutUs />

        <!-- About Founder Section -->
        <section class="bg-blue-900 text-white py-20">
          <div class="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12">
            
            <!-- Left Content -->
             
            <div class="md:w-2/3 text-left">
              <div class="flex justify-between items-center px-6 mb-6">
      <div class="flex items-center gap-4">
        <div class="w-8 h-0.5 bg-white"></div>
        <h2 class="text-xl font-medium uppercase tracking-widest text-white">About Founder</h2>
      </div>
    </div>
              <p class="mt-4 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              </p>
              <p class="mt-4 font-semibold text-lg italic">Name</p>
              <p class="text-md">Designation</p>
            </div>

            <!-- Right Image -->
            <div class="md:w-1/3 flex justify-center">
              <img 
                src="/src/assets/founder.png" 
                alt="Founder" 
                class="w-full h-auto rounded-xl object-cover" 
                style="aspect-ratio: 3/4; max-height: 300px; max-width: 225px;"
              />
            </div>
          </div>
        </section>


        <WorkProcess />
      </section>
    </main>
    <Footer />
  </div>
</template>
