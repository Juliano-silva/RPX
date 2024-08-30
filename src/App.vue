<template>

  <div id="Logins">
    <input type="text" id="User" placeholder="Username">
    <input type="number" id="PassWord" placeholder="PassWord">
    <button v-on:click="Entrar">Click</button>
  </div>

  <div id="Login_Register">
    <div id="Sidebar">
      <router-link to="/">Home</router-link>
      <router-link to="/Adicionar">Adicionar</router-link>
      <router-link to="/Fama">Hall da Fama</router-link>
      <router-link to="/Group">Group</router-link>
      <router-link to="/Perfil">Perfil</router-link>
      <router-link to="/Config">Configurações</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Add from './components/templates/Add.vue';
import Home from './components/templates/Home.vue';
var Link = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/Register/.json"


export default {

  mounted() {
    this.Loads()
  },
  methods: {
    Loads() {
      if(localStorage.Register){
        document.getElementById("Logins").style.display = "none"
      }else{
        document.getElementById("Login_Register").style.display = "none"
      }
    },
    Entrar() {
      var User = document.getElementById("User").value
      var PassWord = document.getElementById("PassWord").value

      localStorage.setItem("Register",JSON.stringify({
        "User":User,
        "PassWord":PassWord
      }))

      fetch(Link, {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ User:User, PassWord: PassWord })
      })
        .then(res => res.json())
        .then(res => console.log(res))
    }
  }
}

</script>