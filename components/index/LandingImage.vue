<template>
  <div class="top h-128 md:h-200 w-full relative bg-fixed ">
    <picture>
      <source
        :srcset="require('~/assets/landing/1.jpg?webp')"
        type="image/webp"
      />
      <source :srcset="require('~/assets/landing/1.jpg')" type="image/jpeg" />
      <img
        :src="require('~/assets/landing/1.jpg')"
        alt="vision"
        class="w-full h-full object-cover absolute z-0"
      />
    </picture>
    <div
      class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-25 text-white "
    >
      <transition mode="out-in" name="fade-in">
        <h1
          v-on:click="isHidden = true"
          v-if="!isHidden"
          class="text-5xl sm:text-6xl font-bold font-semibold cursor-pointer zoom mb-16"
        >
          Vision
        </h1>
        <div
          class="lg:w-2/4 w-5/6 pt-16 leading-relaxed font-semibold text-base mb-6 container"
          v-if="isHidden"
        >
          <div
            class="mask text-xl md:text-2xl rounded-lg leading-relaxed p-4 text-center"
          >
            To inspire success and growth of our people and customers by
            providing a path to see new opportunities and talents.
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },
};
</script>

<style scoped>
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
  max-width: 40rem;
}

.mask {
  background: rgba(0, 0, 0, 0.3);
}

.dark {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 1;
}

.mask {
  background: rgba(0, 0, 0, 0.3);
}
</style>
