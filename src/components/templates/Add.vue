<template>
    <input type="text" id="Titulo" placeholder="Titulo">
    <input type="text" id="Image" placeholder="Insira uma URL">
    <input type="text" placeholder="Digite alguma coisa" id="Texto">
    <button v-on:click="Clickar">Click</button>
    <div id="Conteudo"></div>
</template>

<script>
import $ from 'jquery'
var Link = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/Adicionar/.json"

export default {
    methods: {
        Clickar() {
            var Texto = document.getElementById("Texto").value
            var Titulo = document.getElementById("Titulo").value
            var Image = document.getElementById("Image").value
            fetch(Link, {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Titulo: Titulo, Image: Image, Conteudo: Texto })
            })
                .then(res => res.json())
                .then(res => console.log(res))
        }
    }
}

</script>