<template>
  <div class="main_container">
    <h1>Faça um orçamento</h1>
    <p class="fonteparagrafo">
      Preencha nosso formulário de orçamento para que possamos entender melhor
      suas necessidades e oferecer uma proposta personalizada para você. É
      rápido, fácil e permite que a gente forneça a melhor solução para o seu
      projeto.
    </p>
    <div class="form_container">
      <div class="form_control">
        <form @submit.prevent="handleSubmit">
          <label for="nome">Nome:</label>
          <input
            type="text"
            v-model="formData.name"
            id="nome"
            value="nome"
            placeholder="Digite seu Nome"
            required
          />
          <label for="email">E-mail:</label>
          <input
            type="email"
            v-model="formData.email"
            id="email"
            value="email"
            placeholder="Digite seu e-mail"
            required
          />
          <div class="select_group">
            <label for="juridica">Pessoa jurídica</label>
            <input
              type="radio"
              v-model="formData.pessoa"
              name="$pessoa"
              id="juridica"
              value="juridica"
              required
            />
          </div>
          <div class="select_group">
            <label for="fisica">Pessoa física</label>
            <input
              type="radio"
              v-model="formData.pessoa"
              name="$pessoa"
              id="fisica"
              value="fisica"
              required
            />
          </div>
          <label for="phone">Telefone:</label>
          <input
            type="tel"
            v-model="formData.phone"
            id="phone"
            value="phone"
            pattern="\d{11}"
            placeholder="(XX) XXXXX-XXXX"
            required
          />
          <label for="quantidade"
            >Quantidade de computadores que gostaria:</label
          >
          <input
            type="text"
            v-model="formData.quantidade"
            name="$quantidade"
            id="quantidade"
            value="quantidade"
            required
          />
          <input type="submit" value="Enviar" id="btn_submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  accessKey: "0a20357c-6e61-4925-a522-3020bb761f4e",
  name: "",
  email: "",
  pessoa: "",
  phone: "",
  quantidade: "",
});

const handleSubmit = () => {
  console.log("Form data: ", formData);

  fetch("https://api.staticforms.xyz/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accessKey: "0a20357c-6e61-4925-a522-3020bb761f4e",
      name: formData.name,
      email: formData.email,
      $pessoa: formData.pessoa,
      $phone: formData.phone,
      $quantidade: formData.quantidade,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      formData.name = "";
      formData.email = "";
      formData.pessoa = "";
      formData.phone = "";
      formData.quantidade = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>

<style scoped>
p {
  margin: auto;
  margin-bottom: 2em;
  max-width: 500px;
}

.form_container {
  background-color: #222;
  max-width: 700px;

  margin: auto;
  padding: 30px;
  padding-bottom: 12px;
  border: 2px solid black;
  border-radius: 10px;
}

.form_control {
  display: flex;
  justify-content: center;
}
.form_control form {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1em;
}

.form_control label {
  margin-bottom: 0.4em;
  font-weight: bold;
}

.form_control input {
  padding: 1em;
  margin-bottom: 0.6em;
  border-radius: 0;
  border: none;
  background-color: #7b7b7b;
  border-radius: 5px;
}

.select_group {
  display: flex;
  align-items: center;
}

.select_group label {
  margin-right: 0.4em;
  margin-bottom: 0.7em;
}

.form_control input::placeholder {
  opacity: 1;
  color: #222;
}

#btn_submit {
  background-color: rgb(128, 0, 0);
  color: white;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  font-weight: 550;
  border: 1px solid black;
}

#btn_submit:hover {
  background-color: #222;
}
</style>
