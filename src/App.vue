<script setup>
  import { RouterView } from 'vue-router'
  import NavHeader from './components/NavHeader.vue'
</script>

<template>
  <div id="main-wrapper">
    <NavHeader/>

    <RouterView v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>