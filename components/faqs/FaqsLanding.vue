<template>
  <div class="top h-landing w-full relative bg-fixed ">
    <img
      src="~/assets/landing/1.jpg"
      class="w-full h-full object-cover absolute z-0"
    />
    <div
      class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-25 text-white "
    >
        <h1
          class="font-semibold cursor-pointer faq zoom"
        >
          Frequently Asked Questions
        </h1>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      isHidden: false
    };
  }
};
</script>

<style scoped>
.h-landing {
  height: 35rem;
}

.mask {
  background: rgba(0, 0, 0, 0.3);
}

.faq {
  font-size: 4rem;
  font-weight: bold;
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
