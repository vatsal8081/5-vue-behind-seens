const app = Vue.createApp({

    data() {
        return {};
    },

    methods: {
        eventInput(event) {
            console.log('event input', event);
        },
        getRef() {
            console.log('ref input log', this.$refs.refInput);
        }
    }
});


app.mount('#app');