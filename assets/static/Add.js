var Commits = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/Commits/.json"

class Conteudo{
    constructor(title,img,conteudo){
        this.title = title
        this.img = img
        this.conteudo = conteudo
    }
}

function Enviar(){
    var ConteudoAdd = new Conteudo(
        document.getElementById("Chat_Name").value,
        document.getElementById("Chat_Image").value,
        document.getElementById("Chat_Conteudo").value
    )

    location.reload()

    $.ajax({
        url:Commits,
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify({Title:ConteudoAdd.title,Image:ConteudoAdd.img,Conteudos:ConteudoAdd.conteudo})
    })
}