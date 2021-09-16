<template>
  <div class="relative apply-height md:h-200 w-full bg-fixed mask">
    <picture>
      <source
        :srcset="require('~/assets/landing/4.jpg?webp')"
        type="image/webp"
      />
      <source :srcset="require('~/assets/landing/4.jpg')" type="image/jpeg" />
      <img
        :src="require('~/assets/landing/4.jpg')"
        alt="vision"
        class="w-full h-full object-cover absolute gradient"
      />
    </picture>
    <div class="leading-relaxed font-semibold text-base w-auto pt-56 pb-56">
      <div>
        <nuxt-link
          to="/apply-now"
          type="button"
          class="transition apply text-center w-64 duration-300 ease-in-out transform bg-palette-5 hover:bg-palette-6 text-white text-4xl font-bold py-2 px-4 rounded-lg mt-6"
        >
          Apply Now
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
*:focus {
  outline: 0 !important;
}

.apply-height {
  height: 34rem;
}

.max-width {
  max-width: 30rem;
}

.mask {
  background: rgba(0, 0, 0, 0.3);
}

.apply {
  display: block;
  margin: auto;
}
</style>
