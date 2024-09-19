<template>
    <input type="text" placeholder="Adicionar um Dado" id="Add_Dados">
    <input type="text" placeholder="Dados de Iniciativa" id="Dados_Personagem">
    <input type="text" placeholder="Adicionar as Imagens" id="Imagens">
    <input type="file" id="Insira sua ficha">
    <button v-on:click="Add_Dados()">Adicionar um Personagem</button>
    <div id="Conteudo_Person"></div>
    <div id="Editar_Conteudo"></div>
    <br>
    <h1>Rolar dados Avulso</h1>
    <input type="text" id="Dados">
    <button v-on:click="Click()">Rodar os Dados</button>
    <div id="Conteudo"></div>
</template>

<script>
import { Rolar_Dados, Criar_Personagem,Aparecer_Personagem } from '../static/Api_Funcionamento';
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
            Criar_Personagem(Dados, Personagem,Icon)
        },
        Carregar() {
            Aparecer_Personagem()
        }
    }

}

</script>