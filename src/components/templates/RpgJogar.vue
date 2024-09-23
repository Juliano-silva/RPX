<template>
    <div id="Conteudo_Body">
        <div id="Button_Body_add">
            <button v-on:click="Add_Button()">+</button>
        </div>
        <div id="Personagens_Body"></div>
        <div id="Adicionar_Personagens">
            <input type="text" placeholder="Adicionar um Dado" id="Add_Dados">
            <input type="text" placeholder="Dados de Iniciativa" id="Dados_Personagem">
            <input type="text" placeholder="Adicionar as Imagens" id="Imagens">
            <input type="file" placeholder="Insira sua ficha" id="ficha">
            <button v-on:click="Add_Dados()">Adicionar um Personagem</button>
        </div>
        <div id="Conteudo_Person"></div>
        <div id="Editar_Conteudo"></div>
        <div id="Visualizador_Conteudo"></div>
        <br>
        <div id="Rolagem">
            <h1>Rolar dados Avulso</h1>
            <input type="text" id="Dados">
            <button v-on:click="Click()">Rodar os Dados</button>
            <div id="Conteudo"></div>
        </div>
    </div>
</template>

<script>
import { Rolar_Dados, Criar_Personagem, Aparecer_Personagem, Adicionar_Personagens } from '../static/Api_Funcionamento';
export default {
    mounted() {
        this.Carregar()
    },
    methods: {
        Click() {
            Rolar_Dados("Conteudo", document.getElementById("Dados").value)
        },
        Add_Dados() {
            var Dados = document.getElementById("Add_Dados").value
            var Personagem = document.getElementById("Dados_Personagem").value
            var Icon = document.getElementById("Imagens").value
            var Ficha = document.getElementById("ficha")
            const reader = new FileReader()
            reader.readAsDataURL(Ficha.files[0])
            reader.onload = function(){
                Criar_Personagem(Dados, Personagem, Icon, reader.result)
            }
        },
        Add_Button() {
            Adicionar_Personagens()
        },
        Carregar() {
            Aparecer_Personagem()
        }
    }

}

</script>