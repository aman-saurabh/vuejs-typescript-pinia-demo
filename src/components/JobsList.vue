<!-- Using Optional API. -->
<!--
<script lang="ts">
import type { PropType } from 'vue';
import type Job from '@/models/Job';

export default {
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        }
    }
}
</script>
-->
<!-- Using composition API. -->
<script lang="ts" setup>
import type Job from '@/models/Job';
import type OrderTerm from '@/models/OrderTerm';
import { computed } from '@vue/reactivity';
import type { PropType } from 'vue';
import { useJobsStore } from '@/stores/jobsStore';
import { storeToRefs } from 'pinia';

const jobsStore = useJobsStore();
//For state and Getters(i.e. computed properties) we need to use 'storeToRefs' but not for actions)
const { order } = storeToRefs(jobsStore);

const props = defineProps({
    jobs: {
        required: true,
        type: Array as PropType<Job[]>
    }
})

const orderedJobs = computed(() => {
    return [...props.jobs].sort((a: Job, b: Job) => {
        return a[order.value] > b[order.value] ? 1 : -1;
    })
})

// const emit = defineEmits(['change', 'delete'])
</script>
<template>
    <div class="job-list">
        <div class="order-container">
            <p class="order-type">Ordered by {{ order }}</p>
            <button class="reset" @click="$emit('resetOrder', 'title')">Reset</button>
            <!-- Here 'resetOrder' is the emit event name and 'title' is an argument -->
        </div>
        <transition-group name="list" tag="ul">
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{job.title}} in {{job.location}}</h2>
                <div class="salary">
                    <img src="../assets/rupee.svg" alt="Rupee icon">
                    <p>{{job.salary}}</p>
                </div>
                <div class="description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur id accusantium itaque
                        aliquid
                        ab? Odit iusto repellendus doloremque ipsum non placeat dolorem impedit? Quaerat possimus nihil
                        molestiae quis corrupti praesentium.
                    </p>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<style lang="scss" scoped>
.order-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -20px;
}

.order-type {
    background-color: #17bf66;
    padding: 10px 20px;
    width: max-content;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
}

.reset {
    background-color: red;
    color: whitesmoke;
    border: 3px solid whitesmoke;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
}

.job-list {
    max-width: 960px;
    margin: 40px auto;
}

.job-list ul {
    padding: 0;
}

.job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
}

.job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
}

.salary {
    display: flex;
}

.salary img {
    width: 30px;
}

.salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
}

.list-move {
    transition: all 1s;
}
</style>