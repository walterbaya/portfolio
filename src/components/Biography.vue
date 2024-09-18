<template>
<div id="biography" class="pt-0">
    <div class="row">
        <div class="col-12 text-dark  d-flex justify-content-start align-items-center m-0">
        </div>
    </div>
    <div class="row mb-1 mt-0">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center pb-3 p-5">
            <div class="text-dark-blue w-100 text-center">
                <h1>Walter Baya</h1>
                <h4 class="p-md-1 mt-md-1 mt-1">Software Developer</h4>
            </div>
            <p class="mt-md-2 p-md-1 mt-4 text-center">
                ¡Hola! soy Walter Me apasiona el desarrollo de software y disfruto llevando las ideas a la realidad, con el objetivo de resolver problemas del mundo real.
                Actualmente estoy realizando la carrera de Analista de Sistemas en ESBA Barrio Norte finalizando el tercer cuatrimestre.
            </p>
            <ul class="list-unstyled mx-1 py-3 ">
                <li class="rounded">
                    <a href="mailto:walterbaya1996@gmail.com" class="text-decoration-none hover-white d-none d-md-block"><i class="fas fa-envelope"></i><span class="px-1 px-md-3">walterbaya1996@gmail.com</span></a>
                </li>
                <li class="my-md-3 mt-2 rounded d-md-block d-none">
                    <a href="tel:+54 1128653459" class="text-decoration-none hover-white"><i class="fas fa-phone"></i><span class="px-1 px-md-3">(+54) 11 2865 3459</span></a>
                </li>
            </ul>
        </div>
        <div class="col-12 border-top text-dark p-5 py-2">
            <div>
                <img class="w-100" src="../assets/img/university.jpg" />
            </div>
            <div class="pb-5 text-center">
                <h5 class="py-md-1 h5 bg-blue text-dark-blue rounded">Estudios Universitarios</h5>
                <ul class="list-unstyled">
                    <h5 class="mt-5 border-bottom pb-2">ESBA Barrio Norte</h5>
                    <li>
                        <p>
                            Analista Programador
                            <br />
                            Analista de Sistemas (En Curso)
                        </p>
                    </li>
                </ul>
                <ul class="list-unstyled">
                    <h5 class="mt-5 border-bottom pb-2">Universidad de Buenos Aires</h5>
                    <li>
                        <p>
                            Licenciatura en Ciencias Matemáticas (En Curso)
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "Biography",
};
</script>
