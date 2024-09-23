<template>
    <input type="text" id="StyleName" placeholder="Digite o nome">
    <input type="text" id="Background" placeholder="Insira o seu background">
    <input type="color" id="Font_Color">
    <button v-on:click="Salvar()">Click</button>
    <div id="Config_Conteudo"></div>
</template>

<script>
import { Salvar_Configuração } from "../static/Api_Funcionamento.js";

export default {
    mounted(){
        this.Load()
    },
    methods: {
        Salvar() {
            var StyleName = document.getElementById("StyleName").value
            var Background = document.getElementById("Background").value
            var Font = document.getElementById("Font_Color").value
            
            Salvar_Configuração(StyleName,Background,Font)
        },
        Load(){
            var Carregar = JSON.parse(localStorage.getItem("Configuration"))

            for(var i = 0; i < Carregar.length; i++){
                var Caixa = document.createElement("div")     
                var Titulo = document.createElement("h1")     
                var img = document.createElement("img")
                var font = document.createElement("h2")
                var Escolha = document.createElement("button")
                Caixa.className = "Caixa_Style"
                Caixa.id = `Caixa_Style${i}`
                Escolha.id = i                
                Titulo.innerText = Carregar[i].Name
                font.innerText = Carregar[i].Font
                img.src = Carregar[i].Background
                Escolha.innerText = "Escolher"
                Escolha.addEventListener("click",function(){
                    localStorage.setItem("Escolher_Background",this.id)
                })
                Caixa.append(Titulo,img,font,Escolha)
                document.getElementById("Config_Conteudo").append(Caixa)
            }
        }
    }
}

</script>