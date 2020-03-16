<template>
  <div id="footer">
    <footer class="footer container pt-4">
      <div class="row text-left">
        <div class="col">
          <router-link to="/"><img src="@/assets/logo.png" alt="Logo"></router-link>
        </div>
        <div class="col">
          <h4>Informações</h4>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Ipsum Lorem</li>
            <li>Dolor Sit Amet</li>
            <li>Política de Privacidade</li>
            <li>Termos e Condições</li>
          </ul>
        </div>
        <div class="col">
          <h4>Informações</h4>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Ipsum Lorem</li>
            <li>Dolor Sit Amet</li>
            <li>Política de Privacidade</li>
            <li>Termos e Condições</li>
          </ul>
        </div>
        <div class="col">
          <h4>Informações</h4>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Ipsum Lorem</li>
            <li>Dolor Sit Amet</li>
            <li>Política de Privacidade</li>
            <li>Termos e Condições</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright 2020 - Reload - Todos os Direitos Reservados</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

#footer {
  width:100vw;
  background-color:#dadada;
  line-height: 50px;
}

.copyright {
  position:relative;
  display:flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.copyright p {
  margin:0px;
}

.footer img {
    height:50px;
    margin:15px;
    filter: grayscale(100%);
}

</style>