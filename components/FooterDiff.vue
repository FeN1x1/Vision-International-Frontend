<template>
  <footer class="body-font bg-palette-4">
    <div class="py-6 mx-auto">
      <div class="flex flex-col sm:flex-row overflow-x-hidden">
        <div
          class="flex-grow mx-auto w-full sm:pr-16 text-2xl font-medium title-font text-gray-900 px-12"
        >
          <div class="pt-2">
            <iframe
              width="100%"
              height="300"
              class="inset-0"
              title="map"
              data-aos="fade-right"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8211273025545!2d33.05814831553208!3d34.68446369159481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7333f56ed9fa3%3A0x4abff3af99db0189!2s28%20October%20Ave%2C%20Limassol%2C%20Cyprus!5e0!3m2!1sen!2ssk!4v1610461005081!5m2!1sen!2ssk"
            ></iframe>
          </div>
        </div>

        <div
          class="flex-shrink-0 text-white py-8 md:py-16 px-16 text-lg text-center"
          data-aos="fade-left"
        >
          <div class="text-2xl font-semibold">Our Address</div>
          <div>
            Vision International Professionals <br />
            28th October street <br />
            WTC Cyprus, Office 201 <br />
            Limassol, 3107 <br />
            Cyprus <br />
          </div>
        </div>
        <div
          class="md:ml-auto md:p-12 flex  items-center text-base justify-center"
          data-aos="fade-left"
        >
          <a
            href="/"
            target="_blank"
            class="p-2 transition duration-300 ease-in-out transform text-white hover:text-palette-5"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/vision_intl_professionals/"
            target="_blank"
            class="p-2 -mt-1 transition duration-300 ease-in-out transform text-white hover:text-palette-5"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/company/vision-international-professionals/"
            target="_blank"
            class="pt-1 pb-2 transition duration-300 ease-in-out transform text-white hover:text-palette-5"
          >
            <LinkedIn />
          </a>
          <a
            href="mailto:contact@visionintlpro.eu"
            class="p-1 -mt-1 transition duration-300 ease-in-out transform text-white hover:text-palette-5"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>

    <div
      class="md:ml-auto py-6 flex flex-wrap items-center text-base bg-black justify-center"
    >
      <div class="pl-16">
        <span
          v-tooltip.top-start="'Coming soon'"
          class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold "
        >
          Programs
        </span>
        <span
          v-tooltip.top-start="'Coming soon'"
          class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold"
        >
          About Us
        </span>
        <nuxt-link
          to="/contact-us"
          class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-palette-5 font-semibold"
          >Contact Us</nuxt-link
        >
        <span
          v-tooltip.top-start="'Coming soon'"
          class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold"
        >
          FAQs
        </span>
        <nuxt-link
          to="/apply-now"
          class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-palette-5 font-semibold"
          >Apply Now</nuxt-link
        >
      </div>
      <div class="text-white ml-auto pr-16">
        © 2020 Vision International. All rights reserved.
      </div>
    </div>
  </footer>
</template>
