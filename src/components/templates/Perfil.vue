<template>
    <button id="Edit_Btn">
        <img src="../../assets/edit.png" alt="">
    </button>
    <div id="Register"></div>
</template>

<script>

export default{
    mounted(){
        this.load()
    },
    methods:{
        load(){
            var User = JSON.parse(localStorage.getItem("Register"))
            var Perfil = document.createElement("div")
            var Titulo = document.createElement("h1")
            var Image = document.createElement("img")
            var Textao = document.createElement("p")
            Perfil.id = "Caixa_Perfil"
            Titulo.innerText = User.User
            Image.src = "https://i.pinimg.com/564x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg"
            Textao.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perferendis, perspiciatis officiis illum et cupiditate, nesciunt rem, repellendus voluptates voluptas provident nobis non unde beatae maiores voluptatem molestiae laborum blanditiis.`
            Perfil.append(Image,Titulo,Textao)
            document.getElementById("Register").append(Perfil)
        }
    }
}

</script>