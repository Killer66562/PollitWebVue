<script setup lang="ts">
import PollInfo from './PollInfo.vue';
import type { PollSchema } from '../scripts/models';

defineProps<{
    polls: PollSchema[]
}>();
</script>

<template>
    <ol class="list-group">
        <PollInfo v-for="poll in polls" :key="poll.id_" :poll="poll" />
    </ol>
</template>