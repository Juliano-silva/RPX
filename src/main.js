import { createApp } from 'vue'
import './style.css'
import { createRouter,createWebHistory } from 'vue-router'

// Rotas
import Home from './components/templates/Home.vue'
import Perfil from './components/templates/Perfil.vue'
import Config from './components/templates/Config.vue'
import Rpg from './components/templates/RpgJogar.vue'

import App from './App.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/",name:"Home",component:Home},
        {path:"/Perfil",name:"Perfil",component:Perfil},
        {path:"/Config",name:"Config",component:Config},
        {path:"/Rpg",name:"Rpg",component:Rpg}
    ]
})

// Background Escolha
if(localStorage.Configuration){
    var Buscar = JSON.parse(localStorage.getItem("Configuration"))
    var Busscar2 = JSON.parse(localStorage.getItem("Escolher_Background"))
    document.querySelector("body").style.backgroundImage = `url(${Buscar[Busscar2].Background})`
}

createApp(App).use(router).mount('#app')
