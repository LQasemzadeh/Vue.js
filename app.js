const app = Vue.createApp({
    data() {
        return{
            title: 'The Final Empire',
            author: 'Eric John',
            age: '35',
        }
    },
    method: {
        changeTitle(title) {
           // this.title = 'Words of Randiance'
            this.title = title
        }
    }
})


app.mount('#app')