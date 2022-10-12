import type Job from "@/models/Job";
import type OrderTerm from "@/models/OrderTerm";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useJobsStore = defineStore('counter', () => {
    const jobs = ref<Job[]>([
        { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
        { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
        { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
        { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
        { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
    ]);

    const orderedJobs = computed(() => {
        return [...jobs.value].sort((a: Job, b: Job) => {
            return a[order.value] > b[order.value] ? 1 : -1;
        })
    })

    const order = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
        order.value = term;
    }

    const resetOrder = (arg: OrderTerm) => {
        order.value = arg;
    }

    return { jobs, order, handleClick, resetOrder, orderedJobs }
});