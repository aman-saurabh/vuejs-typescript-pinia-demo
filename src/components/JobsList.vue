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

const props = defineProps({
    jobs: {
        required: true,
        type: Array as PropType<Job[]>
    },
    order: {
        required: true,
        type: String as PropType<OrderTerm>
    }
})

const orderedJobs = computed(() => {
    return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
    })
})

// const emit = defineEmits(['change', 'delete'])
</script>
<template>
    <div class="job-list">
        <p>Ordered by {{ order }}</p>
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