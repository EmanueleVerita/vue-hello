const { createApp } = Vue

const app = createApp({
    data() {
        return {
            sayHello : 'Hello Vue',
        }
    }
})


app.mount('#welcome-vue')