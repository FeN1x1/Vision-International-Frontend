<template>
  <div class="relative h-128 md:h-200 w-full bg-fixed mask">
    <picture>
      <source
        :srcset="require('~/assets/landing/2.jpg?webp')"
        type="image/webp"
      />
      <source :srcset="require('~/assets/landing/2.jpg')" type="image/jpeg" />
      <img
        :src="require('~/assets/landing/2.jpg')"
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
          International
        </h1>
        <div
          class="lg:w-2/4 w-5/6 md:w-3/4 md:ml-auto mx-auto pt-8 md:pt-16 leading-relaxed md:mr-32 font-semibold text-base mb-6"
        >
          <div data-aos="fade-left">
            <div
              class="mask text-xl md:text-2xl rounded-lg leading-relaxed p-4"
            >
              <!-- <transition mode="out-in" name="fade-in">
                <div :key="defaultProgram">
                  {{ defaultProgram }}
                </div></transition
              > -->
              Our mission is to connect talented people to amazing opportunities
              in unique places to create lasting value for our customers
            </div>
          </div>
          <!-- <div data-aos="fade-left">
            <button
              type="button"
              class="border-2 border-white transition duration-300 mask ease-in-out transform hover:text-palette-5 font-semibold text-3xl py-2 px-4 hover:border-palette-5 rounded-lg mt-6"
            >
              Programs
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*:focus {
  outline: 0 !important;
}

.fade-in-enter-active {
  transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
  transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.max-width {
  max-width: 30rem;
}

.mask {
  background: rgba(0, 0, 0, 0.3);
}
</style>
