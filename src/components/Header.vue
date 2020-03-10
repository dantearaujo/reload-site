<template>
    <div id="header">
        <header class="header container">
            <div class="logo">
                <router-link to="/"><img src="@/assets/logo.png" alt="Logo"></router-link>
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

#header {
    width: 100vw;
    height: 80px;
    background-color:#dadada;
}

header {
    position: relative;
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.logo {

}

.logo img {
    height:50px;
    margin:15px;
    filter: grayscale(100%);
}

.menu {
    height: 80px;
    margin-right:20px;
    line-height: 80px;
}

.menu nav {

}

.menu nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu nav ul li {
    display: inline;
}

.menu nav ul li a {
    color: #666;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 16px;
    border-radius: 5px;
    transition: all 300ms;
    margin-left:10px;
}

.menu nav ul li a:hover, .menu nav ul li a.router-link-exact-active {
    background: #666;
    color:#dadada;
    text-decoration:none;
    transition: all 200ms;
}

</style>