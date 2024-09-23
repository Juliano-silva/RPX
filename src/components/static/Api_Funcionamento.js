// Parte da API
var API_PERSONAGEM = JSON.parse(localStorage.getItem("Personagens_Rpg"))

// Class

class Automation_Inputs {
    constructor(link, name) {
        this.link = `https://rpgx-d4ee3-default-rtdb.firebaseio.com/${link}/.json`
        this.name = name
    }
}

class Configuration {
    constructor(name, senha, bk, font, description) {
        this.name = name
        this.senha = senha
        this.bk = bk
        this.font = font
    }
}

// Functions
function Removendo() {
    fetch(`https://rpgx-d4ee3-default-rtdb.firebaseio.com/Adicionar/${this.id}/.json`, { method: "DELETE" }).then(res => res.text()).then(res => console.log(res))
    location.reload()
}

function Editar() {
    var Linkar = `https://rpgx-d4ee3-default-rtdb.firebaseio.com/${this.className}/${this.id}/.json`
    fetch(Linkar, {
        method: "PUT", body: JSON.stringify({
            username: "Juliano",
            data: "01/09/2004",
            Bah: "Gaucho",
            cep: "rr"
        })
    }).then(res => res.json()).then(res => console.log(res))
}

export function Creater(link, body_conteudo) {
    const Search = new Automation_Inputs(link)
    fetch(Search.link, { method: "GET" }).then(res => res.json()).then(res => {
        var Objeto = Object.keys(res)
        var Json = Object.keys(res[Objeto[0]])
        for (var i = 0; i < Objeto.length; i++) {
            var Caixa = document.createElement("div")
            var Remover = document.createElement("button")
            var Editando = document.createElement("button")
            var Image = document.createElement("div")
            Remover.id = Objeto[i]
            Remover.innerText = "Remover"
            Remover.classList = Search.link
            Remover.onclick = Removendo
            Editando.onclick = Editar
            Editando.className = "Adicionar"
            Editando.id = Objeto[i]
            Editando.innerText = "Editando"
            Caixa.innerHTML = `
                <h1>${res[Objeto[i]][Json[2]]}</h1>
                <p>${res[Objeto[i]][Json[0]]}</p>
                <h2>${res[Objeto[i]][Json[3]]}</h2>
                `
            Image.id = "Objeto_Image"
            Image.style.backgroundImage = `url('${res[Objeto[i]][Json[1]]}')`
            Caixa.append(Image, Editando, Remover)
            document.getElementById(body_conteudo).append(Caixa)
        }
    })
}


export function To_add(link, nome) {
    const Search = new Automation_Inputs(link, nome)
    return [Search.link, Search.name]
}

var Add_Array = []

export function Salvar_Configuração(name, bk, font) {
    if (localStorage.Configuration) {
        Add_Array = JSON.parse(localStorage.getItem("Configuration"))
    }

    Add_Array.push({
        "Name": name,
        "Background": bk,
        "Font": font
    })

    localStorage.setItem("Configuration", JSON.stringify(Add_Array))

}

// Rpg Jogar 

export function Rolar_Dados(Conteudos, Dados_Input) {
    var Conteudo = document.getElementById(Conteudos)
    var String_Dados = String(Dados_Input)
    var Option_Dados = ""
    var Dados = document.createElement("h2")

    if (String_Dados.indexOf("#d") !== -1) {
        Option_Dados = String_Dados.split("#d")
        for(var i = 0; i < Option_Dados[0]; i++){
            var Random_Dados = Math.floor(Math.random() * Option_Dados[1])
            Dados.innerText = `${Random_Dados} ⟵ [${Random_Dados}] 1d${Option_Dados[1]}`
        }
    } else if (String_Dados.indexOf("d") !== -1) {
        Option_Dados = String_Dados.split("d")
        var Random_Dados = Math.floor(Math.random() * Option_Dados[1])
        Dados.innerText = `${Random_Dados} ⟵ [${Random_Dados}] ${String_Dados}`
    }
    Conteudo.append(Dados)
}

// Criar um Personagem

var Daddos = []

export function Criar_Personagem(Dados, Personagem, Icon,File) {
    console.log(File);
    
    if (localStorage.Personagens_Rpg) {
        Daddos = JSON.parse(localStorage.getItem("Personagens_Rpg"))
    }

    Daddos.push({
        "Personagem": Personagem,
        "Icon": Icon,
        "Dados": Dados,
        "File":File
    })

    localStorage.setItem("Personagens_Rpg", JSON.stringify(Daddos))
}

var itens = []

function Func_Remove_Edit() {
    var func;
    if (localStorage.getItem("Personagens_Rpg") == null) {
        func = []
    } else {
        func = JSON.parse(localStorage.getItem("Personagens_Rpg"))
    }

    itens.push({
        "Arma_Nome": document.getElementById("nameid").value,
        "Imagem": document.getElementById("image").value,
        "Description": document.getElementById("description").value,
        "Dado": document.getElementById("Dadosid").value,
    })

    if (this.className == "Edit") {
        func[this.id] = ({
            "Personagem": document.getElementById("nameEdit").value,
            "Iniciativa": document.getElementById("iniciativaEdit").value,
            "Imagem": document.getElementById("ImageEdit").value,
            "Ficha_RPG": document.getElementById("fichaEdit").value,
            "Armas": {
                itens
            }
        })
    } else if (this.className == "Delete") {
        func.splice(this.id, 1)
    }
    localStorage.setItem("Personagens_Rpg", JSON.stringify(func))
}

export function Aparecer_Personagem() {
    for (var i = 0; i < API_PERSONAGEM.length; i++) {
        var Caixa = document.createElement("div")
        var Titulo = document.createElement("h1")
        var Dado = document.createElement("p")
        var Image = document.createElement("img")
        var Editar = document.createElement("button")
        var Remover = document.createElement("button")
        var Visualizar = document.createElement("button")
        Titulo.innerText = API_PERSONAGEM[i].Personagem
        Image.src = API_PERSONAGEM[i].Icon
        Dado.innerText = API_PERSONAGEM[i].Dados
        Editar.innerText = "Editar"
        Editar.id = i
        Visualizar.id = i
        Visualizar.innerText = "Visualizar"
        Remover.innerText = "Remover Conteudo"
        Remover.id = i
        Remover.className = "Delete"
        Caixa.id = "Caixa_Personagem"
        Remover.addEventListener("click", Func_Remove_Edit)

        Visualizar.addEventListener("click",function(){
            document.getElementById("Visualizador_Conteudo").style.display = "block"
                var Caixa = document.createElement("div")
                var Name = document.createElement("h1")
                var Dados = document.createElement("h4")
                var Image = document.createElement("img")
                var Ficha = document.createElement("iframe")

                Name.innerText = API_PERSONAGEM[this.id].Personagem
                Dados.innerText = API_PERSONAGEM[this.id].Dados
                Image.src =  API_PERSONAGEM[this.id].Icon
                Ficha.src = API_PERSONAGEM[this.id].File
                Caixa.append(Name,Daddos,Image,Ficha)
                document.getElementById("Visualizador_Conteudo").append(Caixa)
        })

        Editar.addEventListener("click", function () {
            location.href = `#${this.id}`
            document.getElementById("Editar_Conteudo").style.display = "block"
            document.getElementById("Editar_Conteudo").innerHTML = `
                <input type="text" placeholder="Insira o nome" id="nameEdit">
                <input type="text" placeholder="Insira a image" id="ImageEdit">
                <input type="text" placeholder="Insira a iniciativa" id="iniciativaEdit">
                <input type="file" id="fichaEdit">
                <div id="Add_button">
                        <input type="text" placeholder="Nome Item" id="nameid">
                        <input type="text" placeholder="Imagem Item" id="image">
                        <textarea id="description" placeholder="Descrição Item"></textarea>
                        <input type="text" placeholder="Dados Item" id="Dadosid">    
                </div>
            `
            var Add = document.createElement("button")
            Add.innerText = "Editar conteudo"
            Add.id = 0
            Add.className = "Edit"
            Add.addEventListener("click", Func_Remove_Edit)
            document.getElementById("Editar_Conteudo").append(Add)
        })
        Caixa.append(Titulo, Image, Dado,Visualizar, Editar, Remover)
        document.getElementById("Personagens_Body").append(Caixa)
    }
}

export function Adicionar_Personagens(){
    document.getElementById("Adicionar_Personagens").style.display = "block"
}