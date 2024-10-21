<template>
  <div class="main_container">
    <h1>Políticas</h1>
    <div id="politicas_container">
      <div v-for="politica in politicas" :key="`politica.${politica}.titulo`">
        <h2>{{ politica.titulo }}</h2>
        <ul>
          <li v-for="(texto, index) in politica.textos_politicas" :key="index">
            {{ texto }}
          </li>
        </ul>
      </div>
    </div>
    <p>
      Se preferir pode baixar todas nossas políticas cliando no link:
      <a href="#">http://politicas_flexpc_empresa</a>
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const politicas = ref({
  aluguel: {},
  manutencao: {},
  privacidade: {},
  devolucao: {},
});

async function getPoliticas() {
  try {
    const req = await fetch("http://localhost:3000/politicas");
    const data = await req.json();

    politicas.value.aluguel = data.aluguel;
    politicas.value.manutencao = data.manutencao;
    politicas.value.privacidade = data.privacidade;
    politicas.value.devolucao = data.devolucao;
  } catch (error) {
    console.error("Erro ao buscar as políticas:", error);
  }
}

onMounted(() => {
  getPoliticas();
});
</script>

<style scoped>
#politicas_container {
  background-color: #222;
  border: 2px solid black;
  border-radius: 10px;
  padding: 4em;
}

#politicas_container ul {
  list-style-type: none;
}

#politicas_container li {
  padding: 8px;
}
p {
  text-indent: 0;
  margin-top: 40px;
}
a {
  color: rgb(128, 0, 0);
  transition: 0.5s;
}

a:hover {
  color: red;
}
</style>
