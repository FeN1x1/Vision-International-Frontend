<template>
  <div class="relative py-2 px-4">
    <div
      href="#"
      class="cursor-pointer flex items-center text-2xl lg:text-xl font-semibold hover:text-red-800"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      Programs
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        ></path>
      </svg>

      <!-- <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg> -->
    </div>
    <transition name="dropdown-fade">
      <ul
        v-on-clickaway="hideDropdown"
        @click="hideDropdown"
        v-if="isVisible"
        ref="dropdown"
        class="absolute normal-case font-normal right-1 bg-white shadow overflow-hidden rounded w-56 border mt-2 py-1 lg:z-20"
      >
        <li>
          <nuxt-link
            to="/american-programs"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">American Programs</span>
          </nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link
            to="/american-programs/intership"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Intership/Traineeship</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/american-programs/work-and-travel"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Work and Travel</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/american-programs/teachers"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Teachers</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/american-programs/au-pair"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Au Pair</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/american-programs/agriculture"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Agriculture</span>
          </nuxt-link>
        </li> -->
        <li>
          <nuxt-link
            to="/australian-programs"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Australian Programs</span>
          </nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link
            to="/australian-programs/advanced-skills-training"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Advanced Skills Training</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/australian-programs/study-work-and-travel"
            class="flex items-center px-3 py-3 text-2xl lg:text-xl font-semibold hover:text-red-800"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Study, Work and Travel</span>
          </nuxt-link>
        </li> -->
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    }
  }
};
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
