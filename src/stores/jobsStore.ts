import type Job from "@/models/Job";
import type OrderTerm from "@/models/OrderTerm";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

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

    /*
    //Persisted etire store in localstorage,so commented out it
    //Check "main.ts" file to see how to persit entire store in localstorage

    //To get localstorage value to set 'order' state on initialization.
    const persistigOrder = localStorage.getItem("order");
    if (persistigOrder) {
        order.value = JSON.parse(persistigOrder);
    }

    //To persiste 'order' state in localstorage.
    watch(order, val => {
        localStorage.setItem('order', JSON.stringify(val));
    }, { deep: true }
        //Here setting {deep: true} doesn't have any advantage but if your state is 
        //deeply nested then you should set it to true.
    )
    */
    /*
    Here jobs value is not chaning through any function so not persisting that 
    */

    return { jobs, order, handleClick, resetOrder, orderedJobs }
});