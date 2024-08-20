function Main(){
    var Rota = document.getElementById("Src")
    var Sidebar = document.getElementById("Sidebar")
    var Login = localStorage.getItem("Login")
    if(Login == "true"){
        Rota.src = "./assets/templates/Feed.html"
        Sidebar.style.display = "block"
    }else{
        Rota.src = "./assets/templates/Register.html"
        Sidebar.style.display = "none"
    }
}
Main()