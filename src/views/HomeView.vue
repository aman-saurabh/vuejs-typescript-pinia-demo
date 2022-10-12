<script lang="ts" setup>
//Note adding setup attribute is important as The setup attribute is a hint that makes Vue 
//perform compile-time transforms that allow us to use Composition API with less boilerplate.
import { ref, onMounted } from 'vue';
import type Job from '../models/Job';
import JobsList from '../components/JobsList.vue';
import { useJobsStore } from '../stores/jobsStore';
import { storeToRefs } from 'pinia';

const jobsStore = useJobsStore();
//For state and Getters(i.e. computed properties) we need to use 'storeToRefs' but not for actions)
const { handleClick } = jobsStore;

// onMounted(() => console.log(`Mounted is called`));

</script>

<template>
    <div class="app">
        <header>
            <div class="title">
                <img src="../assets/heart.svg" alt="Site Logo" />
                <h1>Ennaman Jobs</h1>
            </div>
            <div class="order">
                <button @click="handleClick('title')">Order by title</button>
                <button @click="handleClick('salary')">Order by salary</button>
                <button @click="handleClick('location')">Order by location</button>
            </div>
        </header>
        <JobsList />
    </div>
</template>

<style lang="scss" scoped>
header {
    text-align: center;
}

header .order {
    margin-top: 20px;
}

button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

header .title {
    display: flex;
    justify-content: center;
}

header img {
    width: 60px;
    margin-right: 20px;
}

header h1 {
    font-size: 3em;
}
</style>