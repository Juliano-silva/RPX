import { createApp } from 'vue'
import './style.css'
import { createRouter,createWebHistory } from 'vue-router'

// Rotas
import Add from './components/templates/Add.vue'
import Home from './components/templates/Home.vue'
import Fama from './components/templates/Fama.vue'
import Perfil from './components/templates/Perfil.vue'
import Group from './components/templates/Group.vue'
import Config from './components/templates/Config.vue'

import App from './App.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/",name:"Home",component:Home},
        {path:"/Fama",name:"Fama",component:Fama},
        {path:"/Adicionar",name:"Adicionar",component:Add},
        {path:"/Group",name:"Group",component:Group},
        {path:"/Perfil",name:"Perfil",component:Perfil},
        {path:"/Config",name:"Config",component:Config}
    ]
})

createApp(App).use(router).mount('#app')
