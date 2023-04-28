const app = Vue.createApp({
    data() {
        return{
            showBooks: false,
            title: 'The Final Empire',
            author: 'Eric John',
            age: '35',
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log('e, e.type')
        }
    }

})


app.mount('#app')