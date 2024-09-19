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
            var Perfil = document.createElement("div")
            var Titulo = document.createElement("h1")
            var Image = document.createElement("img")
            var Textao = document.createElement("p")
            Perfil.id = "Caixa_Perfil"
            Titulo.innerText = "Juliano"
            Image.src = "https://i.pinimg.com/564x/ee/93/c6/ee93c66843ac82bf8af26b604d75e02b.jpg"
            Textao.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perferendis, perspiciatis officiis illum et cupiditate, nesciunt rem, repellendus voluptates voluptas provident nobis non unde beatae maiores voluptatem molestiae laborum blanditiis.`
            Perfil.append(Image,Titulo,Textao)
            document.getElementById("Register").append(Perfil)
        }
    }
}

</script>