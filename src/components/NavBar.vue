<template>
  <div id="nav">
    <RouterLink to="/" id="logo_url">
      <img :src="logo" alt="logo flexpc" id="logo" />
    </RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/orcamento">Contrate-nos</RouterLink>
    <RouterLink to="/sobre">Sobre</RouterLink>
    <RouterLink to="/politicas">Políticas</RouterLink>
    <RouterLink to="/contato">Contato</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
const logo = "/img/logo.png";
</script>

<style scoped>
#nav {
  background-color: #222;
  border-bottom: 2px solid #181818;
  padding: 27px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo_url {
  margin: auto;
  margin-left: 0;
}

#logo {
  height: 40px;
  width: 170px;
}

#nav a {
  color: rgb(128, 0, 0);
  text-decoration: none;
  margin: 10px;
  transition: 0.5s;
}

#nav a:hover {
  color: red;
}
</style>
