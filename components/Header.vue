<template>
  <nav
    class="mx-auto fixed flex w-full p-5 flex-row items-center top-0 animated transition duration-300 ease-in-out"
    :class="{ scrolled: !view.atTopOfPage }"
  >
    <nuxt-link
      class="lg:ml-5 mr-auto flex h-10 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center"
      to="/"
      exact-active-class=""
    >
      <img
        src="~/assets/logo/logo.png"
        alt="Vision international"
        class="h-12 lazyload zoom"
      />
    </nuxt-link>
    <div
      class="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center"
    >
      <div
        v-tooltip.bottom="'Coming soon'"
        class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold text-xl"
      >
        Programs
      </div>
      <div
        v-tooltip.bottom-start="'Coming soon'"
        class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold text-xl"
      >
        About Us
      </div>
      <nuxt-link
        to="/contact-us"
        class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-palette-5 font-semibold text-xl"
        >Contact Us</nuxt-link
      >
      <div
        v-tooltip.bottom-start="'Coming soon'"
        class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold text-xl"
      >
        FAQ
      </div>
      <nuxt-link
        to="/apply-now"
        class="transition duration-300 ease-in-out transform bg-palette-5 hover:bg-palette-6 text-white font-bold py-2 px-4 rounded-lg"
        >Apply Now</nuxt-link
      >
    </div>
    <div
      class="md:ml-auto flex md:hidden flex-wrap items-center text-base justify-center"
    >
      <nuxt-link
        to="/apply-now"
        class="transition -mt-1 duration-300 ease-in-out transform bg-palette-5 hover:bg-palette-6 text-white font-bold py-2 px-4 rounded-lg"
        >Apply Now</nuxt-link
      >
    </div>

    <!-- <div class="ml-auto flex md:hidden text-base">
      <div
        class="hamburger"
        @click="hamburgerOpen = !hamburgerOpen"
        :class="hamburgerOpen ? 'hamburger--is-open' : ''"
      >
        <div class="hamburger__item hamburger__item--first"></div>
        <div class="hamburger__item hamburger__item--middle"></div>
        <div class="hamburger__item hamburger__item--last"></div>
      </div>
    </div>
    <div v-if="hamburgerOpen" class="absolute top-0 left-0 mt-20 w-full">
      <div class="p-5 transparent-mobile-menu">
        <div class="flex items-center justify-between mb-4"></div>
        <nav>
          <ul class="space-y-4">
            <li>
              <div
                v-tooltip.bottom="'Coming soon'"
                class="mr-5 float-right mx-auto transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold text-xl"
              >
                Programs
              </div>
            </li>
            <li>
              <div
                v-tooltip.bottom-start="'Coming soon'"
                class="mr-5 float-right transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold text-xl"
              >
                About Us
              </div>
            </li>
            <li>
              <nuxt-link
                to="/contact-us"
                class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-palette-5 font-semibold text-xl"
                >Contact Us</nuxt-link
              >
            </li>
            <li>
              <div
                v-tooltip.bottom-start="'Coming soon'"
                class="mr-5 transition duration-300 ease-in-out transform text-white hover:text-gray-700 cursor-not-allowed font-semibold text-xl"
              >
                FAQ
              </div>
            </li>
            <li>
              <nuxt-link
                to="/apply-now"
                class="transition duration-300 ease-in-out transform bg-palette-5 hover:bg-palette-6 text-white font-bold py-2 px-4 rounded-lg"
                >Apply Now</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div> -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
      hamburgerOpen: false,
    };
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>

<style>
nav {
  z-index: 10;
}

.transparent-mobile-menu {
  background: rgba(0, 0, 0, 0.2);
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
}

.zoom {
  transition: transform 0.5s;
}

.zoom:hover {
  transform: scale(1.1);
}

body {
  background-color: whitesmoke;
}

.bg-blue-bright {
  background-color: #eb5e28;
}

.hamburger {
  height: 30px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hamburger:hover {
  cursor: pointer;
}
.hamburger__item {
  height: 5px;
  width: 100%;
  background: #eb5e28;
  transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 300ms linear;
}
.hamburger--is-open .hamburger__item--first {
  transform: translate(0, 12px) rotate(45deg);
}
.hamburger--is-open .hamburger__item--middle {
  opacity: 0;
}
.hamburger--is-open .hamburger__item--last {
  transform: translate(0, -12px) rotate(-45deg);
}
</style>
