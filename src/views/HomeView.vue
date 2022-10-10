<script lang="ts" setup>
//Note adding setup attribute is important as The setup attribute is a hint that makes Vue 
//perform compile-time transforms that allow us to use Composition API with less boilerplate.
import { ref, onMounted } from 'vue';

const count = ref(0);
const userId = ref<string | number>(465568);

const update = (type: string) => {
    if (type == "inc")
        count.value++;
    else
        count.value--;
}


onMounted(() => console.log(`Count is : ${count.value}`));

</script>

<template>
    <h2>User id : {{userId}}</h2>
    <p class="abc">Count is {{count}}</p>
    <button class="inc" @click="update('inc')">Increase</button>
    <button class="dec" @click="update('dec')">Decrease</button>
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