<script setup lang="ts">
import { ref } from 'vue';
import { APIInstance } from '../scripts/crud';
import type { Page, PollSchema } from '../scripts/models';
import PollInfoList from '../components/PollInfoList.vue';

const instance = new APIInstance();
const paginatedData = ref<Page<PollSchema>>({
    items: [], 
    page: 0, 
    pages: 0, 
    total: 0, 
    size: 0
});

const getUserPolls = async () => {
    const response = await instance.GET<Page<PollSchema>>("user/polls");
    if (response.success) {
        paginatedData.value = response.data;
    }
    else {
        
    }
}

getUserPolls();
</script>

<template>
    <h2 class="text-center">Your polls</h2>
    <PollInfoList :polls="paginatedData.items" />
</template>