<script lang="ts" setup>
//Note adding setup attribute is important as The setup attribute is a hint that makes Vue 
//perform compile-time transforms that allow us to use Composition API with less boilerplate.
import { ref, onMounted } from 'vue';
import type Job from '../models/Job';
import JobsList from '../components/JobsList.vue';

const jobs = ref<Job[]>([
    { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
    { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
    { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
    { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
    { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
]);



// onMounted(() => console.log(`Mounted is called`));

</script>

<template>
    <JobsList :jobs="jobs" />
</template>

<style lang="scss" scoped>
button {
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    cursor: pointer;
}

.inc {
    background: red;
}

.dec {
    background: green;
    margin-left: 10px;
}
</style>