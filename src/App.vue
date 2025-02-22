<script setup lang="ts">
import NavBar from './components/NavBar.vue';

</script>

<template>
    <div id="outer-container" class="container-fluid">
        <div id="inner-container" class="container">
            <NavBar />
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
#outer-container {
    background-color: blanchedalmond;
    min-height: 100vh;
}
</style>
