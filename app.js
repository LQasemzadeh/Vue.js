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
        }
    }

})


app.mount('#app')