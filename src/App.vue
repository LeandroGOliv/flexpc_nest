<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <NavBar />

    <main>
      <RouterView />
      <!-- DIMINUIR TODAS FONTS SEPA-->
    </main>

    <Footer />
  </div>
</template>

<style>
* {
  font-family: "Open Sans", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  background-color: #292929;
  flex-grow: 1;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main_container {
  margin: 70px auto;
  max-width: 900px;

  color: rgb(231, 231, 231);
}

.main_container p {
  text-indent: 25px;
  text-align: center;
}

h1 {
  font-size: 42px;
  margin-bottom: 30px;
  text-align: center;
  color: white;
}

.fonteparagrafo {
  font-size: 18px;
}
</style>
