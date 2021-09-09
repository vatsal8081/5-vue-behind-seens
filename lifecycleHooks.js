const app = Vue.createApp({

    data() {
        return {
            name: 'vatsal'
        }
    },

    // lifecycle hooks
    // - called synchronously 
    // - this will call before data, observers, methods, computed, watchers are setup  
    // so all this things will not be available in beforeCreate
    beforeCreate() {
        console.log('beforeCreate()');
    },
    // - called synchronously
    // at this stage vue object will be initialized so all the data, methods, computed, watchers will
    // be set and also available so you can use it in created hook 
    created() {
        console.log('created()');

        // access data property
        console.log(`name from created() ${this.name}`);

        // prepare for explain update hooks
        setTimeout(() => this.name = 'changed name', 5000)
    },
    // after created and before beforeMount call the vue will compile html template to show it on screen in future
    // this hook will call right before the mounting (showing something on screen) begins
    // still we won't seen any thing on screen yet so if you want to grab something from html 
    // it won't be possible right now on beforeMount() because there is nothing on screen yet.
    // This hook is not called during server-side rendering.
    beforeMount() {
        console.log('beforeMount()');
    },
    // this hook will call after app or component will be mounted that mins we can see something
    // on screen and can also grab something from html because it will be available now
    // mounted dose not guarantee that all child components also been mounted. they can or can't
    // be mounted yet 
    // This hook is not called during server-side rendering. 
    mounted() {
        console.log('mounted()');
        // you can use this function to wait until all childe also not mounted
        // this.$nextTick(function () {})
    },
    // now beforeUpdate and updated can call multiple times in any app or component
    // this hooks will trigger when something change on vue app or component and
    // vue have to reflect it on the screen. keep in mind this updation hooks will
    // only call when something change in vue object and vue have to change it on screen
    // like when we change name property in created hook after 5 sec if we are using
    // the name in template then after change happen updation methods will call but if 
    // we don't use name in template just change in data updation hooks won't call if change 
    // happens or not
    // this 2 updation hooks will not call first time when app or component will 
    // launch but it will only call when something will change in vue object 
    // this is good place to access the older dom before it update
    // This hook is not called during server-side rendering
    beforeUpdate() {
        console.log('beforeUpdate()');
    },
    // when updated will call dom will be updated with new change
    // updated dose not guarantee that all child components have also been re-render
    // This hook is not called during server-side rendering.
    updated() {
        console.log('updated()');
        // if you want to wait until all child components updated you can use
        // this.$nextTick(function () {})
    },
    // this hook will call right before component will unmount (destroy)
    // at this place component will be fully functional but going to destroy so this is good place
    // to add some clean up code
    // This hook is not called during server-side rendering.
    beforeUnmount() {
        console.log('beforeUnmount()');
    },
    // when this hook will call all data, methods, computed, event and data bindings will be unmounted
    // This hook is not called during server-side rendering.
    unmounted() {
        console.log('unmounted()');
    }




});


app.mount('#app');