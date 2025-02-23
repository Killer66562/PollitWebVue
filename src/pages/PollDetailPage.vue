<script setup lang="ts">
import { ref } from 'vue';
import { APIInstance } from '../scripts/crud';
import type { PollSchema } from '../scripts/models';
import { router } from '../scripts/router';
import PollOptionList from '../components/PollOptionList.vue';

const instance = new APIInstance();
const data = ref<PollSchema>();
const pollId = router.currentRoute.value.params.pollId;

const getPoll = async () => {
    const response = await instance.GET<PollSchema>(`polls/${pollId}`);
    if (response.success) {
        data.value = response.data;
    }
    else {
        
    }
}

getPoll();
</script>

<template>
    <h2 class="text-center">Poll #{{ data?.id_ }}</h2>
    <h3>{{ data?.name }}</h3>
    <p>{{ data?.description }}</p>
    <PollOptionList :multiple-choice="data.multiple_choice" :poll-options="data.options" v-if="data"></PollOptionList>
</template>