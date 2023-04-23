const app = Vue.createApp({
    data() {
        return{
            title: 'The Final Empire',
            author: 'Eric John',
            age: '35',
        }
    },
    method: {
        changeTitle() {
            this.title = 'Words of Randiance'
        }
    }
})


app.mount('#app')