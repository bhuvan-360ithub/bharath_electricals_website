<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import 'primeicons/primeicons.css';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow pt-20 px-16 py-14">
      <div class="container mx-auto">
        <!-- Map at the top -->
        <div class="w-full h-[400px] rounded-3xl overflow-hidden mb-10">
          <iframe
            class="w-full h-full grayscale hover:grayscale-0 transition-all"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.6395960456302!2d77.621292!3d12.9156626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e76e62354d%3A0x28bc870ecf5535b6!2s360%20IT%20HUB%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1741599936246!5m2!1sen!2sin"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div class="flex flex-col md:flex-row gap-10">
          <div class="flex-1">
            <h2 class="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p class="text-gray-600 mb-4">Your email address will not be published. Required fields are marked *</p>

            <form class="space-y-4">
              <input type="text" placeholder="Name *" class="input-field" required />
              <input type="email" placeholder="Email *" class="input-field" required />
              <!-- <div class="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Name *" class="input-field" required />
                <input type="email" placeholder="Email *" class="input-field" required />
              </div> -->
              <input type="tel" placeholder="Phone Number *" class="input-field" required />
              <textarea placeholder="Message *" rows="5" class="input-field" required></textarea>
              <button type="submit" class="submit-btn">SEND MESSAGE</button>
            </form>
          </div>

          <div class="flex-1">
            <h2 class="text-2xl font-semibold mb-2">Contact Information</h2>
            <p class="text-gray-600 mb-6">Feel free to reach out to us. We are available during business hours.</p>

            <div class="mb-6">
              <h4 class="text-lg font-medium mb-2">LOCATION STORE:</h4>
              <p class="text-gray-700">228, SAVIRAM, 1ST CROSS, 39th Main Rd, KAS Officers Colony, BTM 2nd Stage, Bengaluru, Karnataka 560068</p>
            </div>

            <div class="mb-6">
              <h4 class="text-lg font-medium mb-2">WORK TIME:</h4>
              <p class="text-gray-700">Monday - Friday: 9:00 - 20:00</p>
              <p class="text-gray-700">Saturday: 11:00 - 15:00</p>
            </div>

            <div class="mb-6">
              <h4 class="text-lg font-medium mb-2">PHONE NUMBER:</h4>
              <div class="contact-details">
                <a href="tel:+2221800262" class="contact-link">+222-1800-262</a>
                <a href="tel:+1006664567890" class="contact-link">(+100) 666-456-7890</a>
              </div>
            </div>

            <div class="mb-6">
              <h4 class="text-lg font-medium mb-2">EMAIL ADDRESS:</h4>
              <div class="contact-details">
                <a href="mailto:aloshopify@alothemes.com" class="contact-link">bharathelectricals@gmail.com</a>
                <!-- <a href="mailto:aloshopify@alothemes.com" class="contact-link">aloshopify@alothemes.com</a> -->
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium mb-2">SOCIAL ACCOUNTS:</h4>
              <div class="social-icons flex gap-4">
                <a href="#" class="social-link bg-blue-500 text-white p-2 rounded-full">
                  <i class="pi pi-facebook text-xl"></i>
                </a>
                <a href="#" class="social-link bg-black text-white p-2 rounded-full">
                  <i class="pi pi-twitter text-xl"></i>
                </a>
                <a href="#" class="social-link bg-red-500 text-white p-2 rounded-full">
                  <i class="pi pi-youtube text-xl"></i>
                </a>
                <a href="#" class="social-link bg-pink-500 text-white p-2 rounded-full">
                  <i class="pi pi-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.input-field {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #f8f9fa;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #3b82f6;
}

.submit-btn {
  background: #1f2937;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: semibold;
  width: 100%;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #2563eb;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 4px; 
}

.contact-link {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.contact-link:hover {
  color: #3b82f6;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: background 0.3s;
}

.social-link:hover {
  background: #2563eb;
}

iframe {
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

iframe:hover {
  filter: grayscale(0%);
}

@media (max-width: 768px) {
  .flex-row {
    flex-direction: column;
  }
}
</style>
