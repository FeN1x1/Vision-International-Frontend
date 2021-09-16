<template>
  <div class="top h-128 w-full relative bg-fixed ">
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
      class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-25 text-white"
    >
      <h1 class="font-semibold text-5xl sm:text-6xl cursor-pointer">
        Apply Now
      </h1>
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

.programs {
  font-size: 4rem;
  font-weight: 900;
}
</style>
