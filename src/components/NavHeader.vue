<script setup>
    import { RouterLink } from 'vue-router'
    import '@/assets/scss/navHeader.scss'
</script>

<template>
    <header id="header-wrapper">
        <nav>
            <RouterLink to="/">PRODUCT</RouterLink>
            <RouterLink to="/video">VIDEO</RouterLink>
            <RouterLink to="/catalog">CATALOG</RouterLink>
            <RouterLink to="/explore">EXPLORE MORE</RouterLink>
        </nav>
    </header>
</template>