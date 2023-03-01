<script setup>
  import { RouterView } from 'vue-router'
  import NavHeader from './components/NavHeader.vue'
</script>

<template>
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <div id="main-wrapper">
    <NavHeader/>
    <RouterView />
  </div>
</template>