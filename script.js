const app = Vue.createApp({

    data(){
        return{
            a_players: []
        }
    },
    methods:{
        addPlayer(){
            let name = document.querySelector("#in-player").value 
            this.a_players.push(name)
            document.querySelector("#in-player").value =""
        }
    }


})

app.mount(".main")