<script setup>
import Add from './components/templates/Add.vue';
import Home from './components/templates/Home.vue';
</script>

<template>
  <div id="Sidebar">
    <router-link to="/">Home</router-link>
    <router-link to="/Adicionar">Adicionar</router-link>
    <router-link to="/Fama">Hall da Fama</router-link>
    <router-link to="/Group">Group</router-link>
    <router-link to="/Perfil">Perfil</router-link>
    <router-link to="/Config">Config</router-link>
  </div>
<router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
