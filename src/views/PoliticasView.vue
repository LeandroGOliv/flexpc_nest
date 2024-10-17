<template>
  <div class="main_container">
    <h1>POLITICAS</h1>
    <h2></h2>
    <ul>
      <li></li>
    </ul>
    <h2></h2>
    <ul>
      <li></li>
    </ul>
    <p>Se preferir pode baixar todas nossas políticas cliando no link:</p>
    <a href="#">http://politicas_flexpc_empresa</a>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

async function getPoliticas() {
  const req = await fetch("http://localhost:3000/politicas");
  const data = await req.json();

  console.log(data);
}

onMounted(() => {
  getPoliticas();
});
</script>

<style scoped></style>
