<script setup lang="ts">
import type { PollSchema } from '../scripts/models';

defineProps<{
    poll: PollSchema
}>();
</script>

<template>
    <li class="list-group-item">
        <div class="fw-bold">{{ poll.name }}</div>
        <div>{{ poll.description }}</div>
        <div>
            <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineCheckbox1">Anonymous</label>
                <input class="form-check-input" type="radio" id="inlineCheckbox1" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineCheckbox1">Multiple choices</label>
                <input class="form-check-input" type="radio" id="inlineCheckbox1" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineCheckbox1">Can change choices</label>
                <input class="form-check-input" type="radio" id="inlineCheckbox1" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineCheckbox1">Weighted</label>
                <input class="form-check-input" type="radio" id="inlineCheckbox1" :checked="poll.anonymous" disabled>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineCheckbox1">Show result</label>
                <input class="form-check-input" type="radio" id="inlineCheckbox1" :checked="poll.anonymous" disabled>
            </div>
        </div>
    </li>
</template>