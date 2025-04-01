<template>
  <div class="bg-white text-black py-20 px-6 lg:px-12">
    <!-- Header -->
    <div class="flex flex-nowrap items-center justify-center md:justify-start gap-4 mb-4">
      <div class="w-8 h-0.5 bg-blue-500"></div>
      <h2 class="text-lg md:text-xl font-medium uppercase tracking-widest">Testimonials</h2>
    </div>

    <!-- Headline -->
    <h1 class="text-3xl md:text-4xl font-semibold leading-snug text-center mb-12">
      What <span class="text-blue-700">Our Clients</span> Say About Us
    </h1>

    <!-- Testimonials Section -->
    <div class="max-w-5xl mx-auto relative">
      <swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true" :autoplay="{ delay: 5000 }" :pagination="{ clickable: true }">
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="text-center flex flex-col items-center">
            <i class="pi pi-quote-left text-4xl text-black mb-4"></i>
            <p class="text-lg text-gray-800 mb-4 line-clamp-3">{{ testimonial.text }}</p>
            <div class="flex items-center gap-4">
              <img :src="userImage" alt="User" class="w-12 h-12 rounded-full border border-gray-300" />
              <div class="text-left">
                <p class="text-black font-semibold">{{ testimonial.name }}</p>
                <p class="text-gray-600 text-sm">{{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination mt-12"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import 'primeicons/primeicons.css';

// Import local image
import userImage from '../assets/user.png';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { Autoplay, Pagination };
  },
  data() {
    return {
      userImage,
      testimonials: [
        {
          text: 'For Sri Varalakshmi Constructions Bharath Electricals has been an invaluable partner. Their consistent supply and competitive pricing have greatly assisted in managing our project expenses. Mr Ramesh Kumars team is always available and professional. Their dedication to customer service is exceptional. We strongly endorse Bharath Electricals for all electrical supply needs. They have helped us complete projects on time and within budget which is crucial for our business.',
          name: 'Ramesh Kumar',
          company: 'Sri Varalakshmi Constructions, Chennai',
        },
        {
          text: 'As Kaveri Electrical Solutions we prioritize quality and reliability. Bharath Electricals consistently meets our expectations. Their extensive product range and timely deliveries make them our preferred supplier. Ms Priyas meticulous attention to detail and prompt responses are always appreciated. We value their partnership and recommend them to any business seeking dependable electrical supplies. Their support has streamlined our operations.',
          name: 'Priya Srinivas',
          company: 'Kaveri Electrical Solutions, Bengaluru',
        },
        {
          text: 'Godavari Power Systems has benefited significantly from partnering with Bharath Electricals. Their knowledgeable staff particularly Mr Anand provided invaluable assistance in selecting the appropriate products for our projects. Their swift delivery and ongoing support are essential for our operations. We appreciate their commitment to customer satisfaction and their ability to provide solutions tailored to our specific needs. They are a reliable and trustworthy supplier.',
          name: 'Prakash Kumar',
          company: 'Godavari Power Systems, Hyderabad',
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper-pagination-bullet {
  background: black;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.swiper-pagination {
  position: relative;
  margin-top: 40px;
}
</style>
