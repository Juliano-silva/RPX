var Registar_LINK = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/Register/.json"

class Register{
    constructor(name,senha){
        this.name = name
        this.senha = senha
    }
}



function Registar(){
    const RegistarLogin = new Register(document.getElementById("nome").value,document.getElementById("senha").value)    
    localStorage.setItem("Register",true)

    fetch(Registar_LINK,{
        method:"POST",
        headers:{
            "Accept":"application/json, text/plain, */*",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({User:RegistarLogin.name,PassWord:RegistarLogin.senha})
    })
    .then(res => res.json())
    .then(res => console.log(res))

}

function Login(){
    const Logar = new Register(document.getElementById("nome_Login").value,document.getElementById("senha_Login").value)
    fetch(Registar_LINK,{method:"GET"}).then(res => res.json()).then(
        res => {
            var Obj = Object.keys(res)
            for(var i = 0 ; i < Obj.length; i++){
                var Users = String(res[Obj[i]].User)
                var PassWord = res[Obj[i]].PassWord
                if(Users == Logar.name && PassWord == Logar.senha){
                    alert("BEM VINDO AO RPX")
                    localStorage.setItem("Login",true)
                    location.href = "../templates/Feed.html"
                }else{
                    alert("Nome ou Senha Errada")
                }
            }
        }
    )
}


function Chamar(){
    var Register = document.getElementById("Register")
    var Login = document.getElementById("Login")
    var Location = localStorage.getItem("Register")
    if(Location == "true"){
        Login.style.display = "block"
        Register.style.display = "none"
    }else{
        Login.style.display = "none"
        Register.style.display = "block"
    }
}
Chamar()

