<template>
  <div class="relative h-128 md:h-200 w-full bg-fixed mask">
    <picture>
      <source
        :srcset="require('~/assets/landing/3.jpg?webp')"
        type="image/webp"
      />
      <source :srcset="require('~/assets/landing/3.jpg')" type="image/jpeg" />
      <img
        :src="require('~/assets/landing/3.jpg')"
        alt="vision"
        class="w-full h-full object-cover absolute gradient"
      />
    </picture>
    <div class="flex mr-auto items-center relative">
      <div
        class="flex flex-col text-center w-full m-auto text-white overflow-x-hidden container"
      >
        <h1
          class="text-5xl sm:text-6xl font-bold pt-8 md:pt-32"
          data-aos="fade-down"
        >
          Professionals
        </h1>
        <div
          class="lg:w-2/4 w-5/6 md:w-3/4 mx-auto md:mr-auto pt-8 md:pt-16 leading-relaxed md:ml-32 font-semibold text-base mb-6"
        >
          <div
            class="mask text-xl md:text-2xl rounded-lg leading-relaxed p-4"
            data-aos="fade-right"
          >
            We represent professionals. Talent and skills can be found in many
            places. We believe professionals are passionate and skilled in the
            trades they perform and in their desire to constantly seek out and
            improve their capabilities through new experiences and
            opportunities.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-width {
  max-width: 30rem;
}

.mask {
  background: rgba(0, 0, 0, 0.3);
}
</style>
