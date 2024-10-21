<template>
  <div class="main_container">
    <h1>Porque alugar computadores?</h1>
    <p class="fonteparagrafo">
      Alugar computadores pode ser vantajoso tanto para uso pessoal quanto para
      empresas, oferecendo diversos benefícios práticos e financeiros. Aqui
      estão algumas das principais vantagens:
    </p>
    <div class="text_container">
      <div>
        <h2>Para Empresas</h2>
        <ul>
          <li>
            Redução de custos iniciais: Alugar computadores elimina a
            necessidade de grandes investimentos iniciais em hardware. Isso é
            particularmente útil para startups ou empresas com capital limitado.
          </li>
          <li>
            Tecnologia sempre atualizada: As empresas podem facilmente atualizar
            seus equipamentos alugados para acompanhar as novas tecnologias,
            evitando a obsolescência de hardware.
          </li>
          <li>
            Manutenção incluída: Geralmente, contratos de aluguel incluem
            manutenção e suporte técnico, reduzindo os custos de TI e
            minimizando o tempo de inatividade.
          </li>
          <li>
            Flexibilidade: Empresas podem ajustar rapidamente o número de
            máquinas alugadas conforme as suas necessidades, ideal para projetos
            temporários ou equipes em crescimento.
          </li>
        </ul>
      </div>

      <div>
        <h2>Para Uso Pessoal</h2>
        <ul>
          <li>
            Baixo custo inicial: Alugar permite que pessoas usem computadores
            sem precisar de grandes investimentos, tornando mais acessível a
            obtenção de dispositivos modernos.
          </li>
          <li>
            Acesso à tecnologia de ponta: Usuários podem trocar seus
            dispositivos regularmente por modelos mais recentes, sem se
            preocupar com a revenda ou depreciação.
          </li>
          <li>
            Soluções temporárias: Para quem precisa de um computador por curto
            prazo, como viagens ou projetos específicos, o aluguel é uma solução
            conveniente e econômica.
          </li>
          <li>
            Manutenção e suporte incluídos: Se ocorrer algum problema com o
            dispositivo, a empresa de aluguel cuida da manutenção ou troca do
            equipamento, sem custo adicional para o usuário.
          </li>
        </ul>
      </div>
    </div>
    <div class="cards_container">
      <div class="card">
        <div class="images" id="tec">
          <div class="overlay">
            <h3>Falhas/Erros</h3>
            <p>
              Em caso de problemas técnicos com o equipamento, após contato com
              nossa equipe caso o problema persista fornecemos um técnico para
              dar suporte ao cliente.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="images" id="quebra">
          <div class="overlay">
            <h3>Quebras</h3>
            <p>
              Em caso de quebras, caso se aplique em nossas políticas nós
              fazemos a substituição do aparelho.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="centro">
      <LinkButton to="/orcamento" text="Faça um orçamento" />
    </div>
  </div>
</template>

<script setup>
import LinkButton from "@/components/LinkButton.vue";
</script>

<style scoped>
.card {
  display: inline-block;
  padding: 15px;
  margin: 20px;
}

.cards_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
}

.images {
  height: 220px;
  width: 220px;
  margin-bottom: 10px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
}

.overlay {
  height: 100%;
  width: 100%;
  background: linear-gradient(transparent, #272727ee 40%);
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  font-size: 12px;
  transition: opacity 0.5s;
  opacity: 0;
}

.overlay h3 {
  font-weight: 500;
  margin-bottom: 7px;
  font-size: 30px;
  letter-spacing: 2px;
}

.images:hover .overlay {
  opacity: 1;
}

#tec {
  background-image: url("src/assets/img/tecnico-pc-final.jpg");
}
#quebra {
  background-image: url("src/assets/img/novo-pc-final.jpg");
}

#centro {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text_container {
  display: flex;
  flex-wrap: column wrap;
}

.text_container h2 {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 30px;
  color: white;

  text-align: center;
}

.text_container li {
  list-style-type: circle;
  padding: 5px;
  margin: 14px;
  font-size: 17px;
}
</style>
