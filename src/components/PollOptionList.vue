<script setup lang="ts">
import { ref } from 'vue';
import type { PollOptionSchema } from '../scripts/models';
import { watch } from 'vue';

defineProps<{
    multipleChoice: boolean
    pollOptions: PollOptionSchema[]
}>();

const options = ref<PollOptionSchema[]>([]);

watch(options.value, () => {
    console.log(options.value);
});
</script>

<template>
    <div>{{ options }}</div>
    <form>
        <div class="input-group mb-3" v-for="pollOption in pollOptions" :key="pollOption.id_">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" :value="pollOption" v-model="options">
            </div>
            <input type="text" class="form-control" aria-label="Text input with radio button" :value="pollOption.name" readonly>
        </div>
        <div class="btn-group">
            <button class="btn btn-success" type="submit">Submit</button>
            <button class="btn btn-danger" type="reset">Reset</button>
        </div>
    </form>
</template>