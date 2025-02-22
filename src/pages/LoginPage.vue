<script setup lang="ts">
import { APIInstance } from '../scripts/crud';
import type { LoginSchema, TokenSchema } from '../scripts/models'
import { ref } from 'vue';
import { router } from '../scripts/router';

const instance = new APIInstance();
const data = ref<LoginSchema>({
    username: "", 
    password: ""
});

//Connect to API in the future
const login = async () => {
    const response = await instance.POSTForm<TokenSchema, LoginSchema>("auth/login", data.value);
    if (response.success) {
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        await router.replace("/");
    }
    else {

    }

}

const reset = () => {
    data.value = {
        username: "", 
        password: ""
    }
}
</script>

<template>
    <h2 class="text-center">Login</h2>
    <form class="form" @submit.prevent="login" @reset.prevent="reset">
        <div class="row mb-3">
            <div class="col-12 col-sm-3 col-md-4"></div>
            <div class="col-12 col-sm-6 col-md-4">
                <label class="form-label">username</label>
                <input type="text" class="form-control" v-model="data.username">
            </div>
            <div class="col-12 col-sm-3 col-md-4"></div>
        </div>
        <div class="row mb-3">
            <div class="col-12 col-sm-3 col-md-4"></div>
            <div class="col-12 col-sm-6 col-md-4">
                <label class="form-label">password</label>
                <input type="password" class="form-control" v-model="data.password">
            </div>
            <div class="col-12 col-sm-3 col-md-4"></div>
        </div>
        <div class="row mb-3">
            <div class="col-12 col-sm-3 col-md-4"></div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="btn-group mb-3">
                    <button type="submit" class="btn btn-primary">Send</button>
                    <button type="reset" class="btn btn-secondary">Clear</button>
                </div>
                <p>Not registered? <RouterLink to="/register">Register</RouterLink></p>
            </div>
            <div class="col-12 col-sm-3 col-md-4"></div>
        </div>
    </form>
</template>