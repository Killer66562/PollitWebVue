<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { router } from '../scripts/router';
import { computed } from 'vue';

const isLogin = computed(() => {
    return localStorage.getItem("accessToken");
});

const logout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    await router.replace("/");
    location.reload();
}
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand" href="#"><h1>Pollit!</h1></RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/create-poll" class="nav-link" aria-current="page">Create a poll</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/user/polls" class="nav-link" aria-current="page">My polls</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/user/following-polls" class="nav-link" aria-current="page">Following polls</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/login" class="nav-link" aria-current="page" v-if="!isLogin">Login</RouterLink>
                        <RouterLink to="/" class="nav-link" aria-current="page" v-else><a @click="logout">Logout</a></RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>