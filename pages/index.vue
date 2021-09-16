<template>
  <div>
    <LandingImage />
    <Programs />
    <WhatTheySay />
    <Apply />
  </div>
</template>

<script>
export default {
  onMounted() {
    AOS.refresh();
  }
};
</script>

<style></style>
