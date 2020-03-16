<template>
    <div class="text-left">
        <section id="section1" class="text-center mb-5">
            <div class="jumbotron align-middle">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </section>
        <section id="section2" class="logos mb-3 text-center container">
            <img src="@/assets/logo-google.png" alt="Logo">
            <img src="@/assets/logo-twitter.png" alt="Logo">
            <img src="@/assets/logo-instagram.png" alt="Logo">
            <img src="@/assets/logo-facebook.png" alt="Logo">
            <img src="@/assets/logo-linkeding.png" alt="Logo">
        </section>
        <section id="section3" class="mb-3 text-center container">
            <h2>Lorem Ipsum Dolot Sit Amet</h2>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae quam accusantium.</h4>
            <img src="https://via.placeholder.com/800x400.png" alt="">
        </section>
        <section id="section4" class="container">
            <div class="row mb-4">
                <div class="col-4">
                    <h3>Lorem Ipsum Dolor</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elits eos sequi. Orem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae quam accusantium.</p>
                    <div class="media">
                        <img src="https://via.placeholder.com/80.png" class="mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">Dante Araujo</h5>
                            Cras sit amet nibh libero. <br/>Agência Método
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <img src="https://via.placeholder.com/600x300.png" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <img src="https://via.placeholder.com/600x300.png" alt="">
                </div>
                <div class="col-4">
                    <h3>Lorem Ipsum Dolor</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elits eos sequi. Orem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae quam accusantium.</p>
                    <div class="media">
                        <img src="https://via.placeholder.com/80.png" class="mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">Dante Araujo</h5>
                            Cras sit amet nibh libero. <br/>Agência Método
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section5" class="mb-3 text-center container">
            <h2>Lorem Ipsum Dolot Sit Amet</h2>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae quam accusantium.</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OrxmtDw4pVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="section6" class="mb-3 container">
            <div class="row">
                <div class="col">
                    <img src="https://via.placeholder.com/80.png" class="mr-3" alt="">
                    <h3 class="mt-0">Heading</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elits eos sequi. Orem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae quam accusantium.</p>
                </div>
                <div class="col">
                    <img src="https://via.placeholder.com/80.png" class="mr-3" alt="">
                    <h3 class="mt-0">Heading</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elits eos sequi. Orem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae quam accusantium.</p>
                </div>
                <div class="col">
                    <img src="https://via.placeholder.com/80.png" class="mr-3" alt="">
                    <h3 class="mt-0">Heading</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elits eos sequi. Orem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae quam accusantium.</p>
                </div>
            </div>
        </section>
        <section id="section7" class="container">
            <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style scoped>
    .logos img {
        width:20%;
        box-sizing: border-box;
        padding: 0 20px;
    }

    .row img {
        max-width: 100%;
    }

.jumbotron {
    background: url("../assets/hero.jpg") no-repeat center center;
    color: #fff;
    display: table-cell;
    height:600px;
    width:100vw;
}


</style>