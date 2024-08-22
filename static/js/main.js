var Link = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/Adicionar/.json"

function Clickar(){
    var Texto = document.getElementById("Texto").value
    var Titulo = document.getElementById("Titulo").value
    var Image = document.getElementById("Image").value
    fetch(Link,{
        method:"POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({Titulo:Titulo,Image:Image,Conteudo:Texto})
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

// Conteudo

fetch(Link,{method:"GET"}).then(res => res.json()).then(
    res => {
        var Obj = Object.keys(res)        
        for(var i = 0 ; i < Obj.length; i++){
            
            var Title = res[Obj[i]].Titulo
            var Image = res[Obj[i]].Image
            var Conteudo = res[Obj[i]].Conteudo

            var Box = document.createElement("div")
            var Titulo = document.createElement("h1")
            var Images = document.createElement("img")
            var Conteudos = document.createElement("p")

            Titulo.innerText = i + "." + Title
            Images.src = Image
            Images.addEventListener("error",function(){
                this.style.display = "none"
            })
            Conteudos.innerText = Conteudo
            Box.append(Titulo,Images,Conteudos)
            document.getElementById("Conteudo").append(Box)
        }
    }
)