<script setup lang="ts">
import { ref,} from 'vue';
import { APIInstance } from '../scripts/crud';
import type { Page, PollSchema, PollSearchSchema } from '../scripts/models'
import { Period, OrderBy } from '../scripts/models'

import PollInfoList from '../components/PollInfoList.vue';

const data = ref<PollSchema[]>([]);
const params = ref<PollSearchSchema>({
    period: Period.ENDED, 
    order_by: OrderBy.NAME, 
    desc: false
});
const instance = new APIInstance();

const getPolls = async () => {
    const response = await instance.GET<Page<PollSchema>>("polls", params.value);
    data.value = response.data.items;
}

getPolls();
</script>

<template>
    <h2 class="text-center mb-3">Home</h2>
    <form @submit.prevent="getPolls" class="d-flex mb-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Name of the poll" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <form class="d-flex justify-content-end mb-3" role="radiogroup">
        <div class="form-check form-check-inline">
            <label class="form-check-label" for="flexRadioDefault1">
                Filter:
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Not started
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
                In progress
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label class="form-check-label" for="flexRadioDefault3">
                Ended
            </label>
        </div>
    </form>
    <PollInfoList :polls="data" />

    <!--
    A search bar
    A filter (By time. Not started / In progress / Ended)
    Page switch btns
    Polls. Default order by time. The new ones are at the top.
    -->
</template>