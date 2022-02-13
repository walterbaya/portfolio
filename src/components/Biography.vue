<template>
  <div
    id="biography"
    class="container py-2 general-container background-dark text-white"
  >
    <div class="row rounded">
      <div id="biography-container" class="col-12 d-flex justify-content-center align-items-center my-3">
        <i class="fas fa-terminal fa-2x mt-1"></i>
        <h1 class="p-2 m-1 title" id="biography-title">Biografía</h1>
      </div>
    </div>
    <div class="row mt-4 mt-md-2 mb-1 px-md-5 px-4">
      <div class="col-12 col-md-12 px-md-5 mt-md-0  d-flex flex-column align-items-start">
        <h1 class="px-md-2 pt-md-0 p-0 mt-4">Walter Baya</h1>
        <h5 class="px-md-3 px-1 mt-md-1">Software Developer</h5>
        <p class="px-md-3 p-1 pt-2">
          <strong>> Apasionado por la tecnología y la computación</strong>, me <br>> motiva seguir
          aprendiendo cosas nuevas y realizar <br>> proyectos poniendo a prueba dichos
          aprendizajes.
        </p>
        <ul class="list-unstyled mx-2 py-3 py-md-2 mx-md-1">
          <li class="rounded">
            <a href="mailto:walterbaya@yahoo.com" class="text-decoration-none hover-white"
              ><i class="fas fa-envelope"></i
              ><span class="px-1 px-md-3">walterbaya@yahoo.com</span></a
            >
          </li>
          <li class="my-md-1 mt-2 rounded">
            <a href="tel:+54 1132812848" class="text-decoration-none hover-white"
              ><i class="fas fa-phone"></i
              ><span class="px-1 px-md-3">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row px-md-5 px-4">
      <div class="col-12 px-md-5 mx-md-2 color-pink">
        <h1 class="mx-1 py-md-1 py-1">Estudios Universitarios</h1>
        <ul class="list-unstyled mx-1">
          <h5 class="mx-md-2 mx-1">Universidad de Buenos Aires</h5>
          <li>
            <p class="mx-1" id="degree">
              > Analista Universitario en Computación (último Año - en Curso)
              <br/>
              > Licenciatura en Ciencias de la Computación (4to Año - en Curso)
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Biography",
};
</script>