<script setup lang="ts">
import { ref } from 'vue';
import type { CreatePollOptionSchema, CreatePollSchema, PollSchema } from '../scripts/models';
import { APIInstance } from '../scripts/crud';
import { router } from '../scripts/router';
import { watch } from 'vue';

const instance = new APIInstance();

const startDate = ref<string>(new Date().toISOString().slice(0, 10));

const data = ref<CreatePollSchema>({
    name: "", 
    description: "", 
    
    anonymous: false, 
    multiple_choice: false, 
    can_change_choices: false, 
    weighted: false, 
    show_result: false, 

    starts_at: new Date(), 
    ends_at: new Date(), 

    options: []
});

const optionData = ref<CreatePollOptionSchema>({
    name: "", 
    weight: 1
});

const createPoll = async () => {
    const response = await instance.POST<PollSchema, CreatePollSchema>("polls", data.value);
    if (!response.success) {

    }
    else {
        await router.replace("/");
    }
}

const reset = () => {
    data.value = {
        name: "", 
        description: "", 
        
        anonymous: false, 
        multiple_choice: false, 
        can_change_choices: false, 
        weighted: false, 
        show_result: false, 

        starts_at: new Date(), 
        ends_at: new Date(), 

        options: []
    }
}

const addOption = () => {
    data.value.options.push({...optionData.value});
    optionData.value = {
        name: "", 
        weight: 1
    }
}

const removeoption = (option: CreatePollOptionSchema) => {
    const idx = data.value.options.indexOf(option);
    data.value.options.splice(idx);
}

watch(data.value, () => {
    console.log(data.value);
});

watch(startDate, () => {
    console.log(startDate.value);
})
</script>

<template>
    <h2 class="text-center">Create a poll</h2>
    <form @submit.prevent="createPoll" @reset.prevent="reset">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" v-model="data.name" maxlength="50">
        </div>
        <div class="mb-3">
            <label class="form-label">Destricption</label>
            <textarea class="form-control" v-model="data.description" rows="10" maxlength="200"></textarea>
        </div>
        <div class="mb-3">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="data.anonymous">
                <label class="form-check-label">Anonymous</label>
            </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" v-model="data.multiple_choice">
                    <label class="form-check-label">Multiple choices</label>
                </div>

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="data.can_change_choices">
                <label class="form-check-label">Can change choices</label>
            </div>

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="data.weighted">
                <label class="form-check-label">Weighted</label>
            </div>

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="data.show_result">
                <label class="form-check-label">Show result</label>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <label class="form-label">Starts at</label>
                <input class="form-control" type="date" v-model="startDate" required>
            </div>
        </div>
        <div class="row">
            
        </div>
        <div class="mb-3">
            <h3>Current options</h3>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Option name" v-model="optionData.name" maxlength="50">
                <input type="number" class="form-control" placeholder="Weight" v-show="data.weighted" v-model="optionData.weight" min="1">
                <button class="btn btn-primary" type="button" id="button-addon1" @click="addOption" :disabled="optionData.name.length <= 0">Add option</button>
            </div>
            <template v-if="data.options.length">
                <div class="input-group mb-3" v-for="option in data.options">
                    <input type="text" class="form-control" v-model="option.name" maxlength="50" readonly disabled>
                    <input type="number" class="form-control" v-show="data.weighted" v-model="option.weight" min="1">
                    <button class="btn btn-danger" type="button" id="button-addon1" @click="removeoption(option)">Remove option</button>
                </div>
            </template>
            <p class="mb-3" v-else>It is empty right now. Please add some options.</p>
        </div>
        <div class="mb-3">
            <h3>Actions</h3>
            <div class="btn-group">
                <button type="submit" class="btn btn-success" :disabled="data.options.length <= 0">Commit</button>
                <button type="reset" class="btn btn-danger">Reset</button>
            </div>
        </div>
    </form>
</template>