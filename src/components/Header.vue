<template>
    <div id="header">
        <header class="header">
            <div class="logo">
                <img src="https://agenciametodo.com/wp-content/uploads/2017/05/logometodoazul.png" alt="Logo">
            </div>
            <div class="menu">
                <nav>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/sobre">Sobre</router-link></li>
                        <li><router-link to="/contato">Contato</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
header {
    width: 100vw;
    height: 80px;
    background-color:#dadada;
    position: absolute;

}

.logo {

}

.menu {

}
</style>