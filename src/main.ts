import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

const pinia = createPinia();

//To get localstorage value to set state on initialization.
const persistigState = localStorage.getItem("state");
if (persistigState) {
    pinia.state.value = JSON.parse(persistigState);
}

//To persiste state in localstorage.
watch(pinia.state, val => {
    localStorage.setItem('state', JSON.stringify(val));
}, { deep: true })

app.use(pinia)
app.use(router)

app.mount('#app')
