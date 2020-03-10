<template>
  <div id="footer">
    <footer class="footer">
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

footer {
  position:relative;
  width:100vw;
  height:50px;
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

</style>