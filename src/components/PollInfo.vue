<script setup lang="ts">
import type { PollSchema } from '../scripts/models';

defineProps<{
    poll: PollSchema
}>();
</script>

<template>
    <li class="list-group-item">
        <div class="fw-bold">#{{ poll.id_ }} {{ poll.name }}</div>
        <div>{{ poll.description }}</div>
        <div>
            <div class="form-check form-check-inline">
                <label class="form-check-label">Anonymous</label>
                <input class="form-check-input" type="radio" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label">Multiple choices</label>
                <input class="form-check-input" type="radio" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label">Can change choices</label>
                <input class="form-check-input" type="radio" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label">Weighted</label>
                <input class="form-check-input" type="radio" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label">Show result</label>
                <input class="form-check-input" type="radio" :checked="poll.anonymous" disabled>
            </div>
        </div>
    </li>
</template>