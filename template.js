const app = Vue.createApp({


    template: `
        <button @click="counter++"> Incress </button>
        <p> {{ counter }} </p>
    `,

    data() {
        return {
            counter: 0
        };
    }

});

app.mount('#app');