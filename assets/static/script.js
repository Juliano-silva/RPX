var Home_Link = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/Commits/.json"

fetch(Home_Link,{method:"GET"}).then(res => res.json()).then(
    res => {
        var Obj = Object.keys(res)
        console.log(Obj);
        
        for(var i = 0 ; i < Obj.length; i++){
            var Title = res[Obj[i]].Title
            var Image = res[Obj[i]].Image
            var Conteudo = res[Obj[i]].Conteudos

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
            document.getElementById("Conteudo_Boxs").append(Box)
        }
    }
)