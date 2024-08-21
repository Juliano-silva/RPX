var Registar_LINK = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/Register/.json"

class Register{
    constructor(name){
        this.name = name
    }
}



function Registar(){
    const RegistarLogin = new Register(document.getElementById("nome").value)    
    localStorage.setItem("Register",true)
    location.reload()
    fetch(Registar_LINK,{
        method:"POST",
        headers:{
            "Accept":"application/json, text/plain, */*",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({User:RegistarLogin.name})
    })
    .then(res => res.json())
    .then(res => console.log(res))

}

function Login(){
    const Logar = new Register(document.getElementById("nome_Login").value)
    fetch(Registar_LINK,{method:"GET"}).then(res => res.json()).then(
        res => {
            var Obj = Object.keys(res)
            for(var i = 0 ; i < Obj.length; i++){
                var Users = String(res[Obj[i]].User)
                if(Users == Logar.name ){
                    localStorage.setItem("Login",true)
                    location.href = "../templates/Feed.html"
                    location.reload()
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

