const app = Vue.createApp({
    data() {
        return{
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'name of the war', author: 'massih orden' },
                { title: 'name of the west', author: 'allen defuss' },
            ]

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },


    }

})


app.mount('#app')