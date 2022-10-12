import type Job from "@/models/Job";
import type OrderTerm from "@/models/OrderTerm";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useJobsStore = defineStore('counter', () => {
    const order = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
        order.value = term;
    }

    const resetOrder = (arg: OrderTerm) => {
        order.value = arg;
    }

    return { order, handleClick, resetOrder }
});