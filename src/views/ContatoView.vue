<template>
  <div class="main_container">
    <h1>Fale Conosco</h1>
    <p>
      Tem alguma dúvida ou precisa de ajuda? Estamos aqui para te atender!
      <br />
      Nosso time de suporte está disponível para responder suas perguntas e
      oferecer o suporte necessário. Para facilitar o atendimento, você pode
      entrar em contato diretamente pelo WhatsApp. <br />
      <span>Clique no botão abaixo para falar conosco:</span>
    </p>
    <div id="img_container">
      <a
        href="https://wa.me/5551999836396?text=Suporte%20ao%20cliente%20FLEXPC!"
        target="_blank"
        ><img :src="wpp" alt="whatsapp"
      /></a>
    </div>
    <p>
      Atendemos de segunda a sexta-feira, das 9h às 18h. Se preferir, você
      também pode enviar um e-mail para <span>suporte@flexpc.com</span> e
      responderemos o mais rápido possível.
    </p>
  </div>
</template>

<script setup>
const wpp = "src/assets/img/wppteste.png";
</script>

<style scoped>
img {
  max-width: 100px;
}
#img_container {
  display: flex;
  justify-content: center;
  padding: 10px;
}

span {
  color: red;
}
</style>
