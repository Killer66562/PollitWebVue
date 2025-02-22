<script setup lang="ts">
import type { LoginSchema } from '../scripts/models'
import { ref } from 'vue';

const data = ref<LoginSchema>({
    username: "", 
    password: ""
});

const register = async () => {}
const reset = () => {
    data.value = {
        username: "", 
        password: ""
    }
}
</script>

<template>
    <h2 class="text-center">Register</h2>
    <form class="form" @submit.prevent="register" @reset.prevent="reset">
        <div class="row mb-3">
            <div class="col-12 col-sm-3 col-md-4"></div>
            <div class="col-12 col-sm-6 col-md-4">
                <label class="form-label" :v-model="data.username">username</label>
                <input type="text" class="form-control" :v-model="data.username">
            </div>
            <div class="col-12 col-sm-3 col-md-4"></div>
        </div>
        <div class="row mb-3">
            <div class="col-12 col-sm-3 col-md-4"></div>
            <div class="col-12 col-sm-6 col-md-4">
                <label class="form-label" :v-model="data.username">password</label>
                <input type="text" class="form-control" :v-model="data.password">
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
                <p>Already have an account? <RouterLink to="/login">Login</RouterLink></p>
            </div>
            <div class="col-12 col-sm-3 col-md-4"></div>
        </div>
    </form>
</template>