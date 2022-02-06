<template>
  <div
    id="biography"
    class="container py-2 general-container background-dark text-white px-2"
  >
    <div class="row rounded">
      <div id="biography-container" class="col-12 d-flex justify-content-center align-items-center mb-3">
        <i class="fas fa-terminal fa-3x"></i>
        <h1 class="p-2 mt-1 title" id="biography-title">Biografía</h1>
      </div>
    </div>
    <div class="row mt-4 mt-md-2 mb-1 px-md-5 px-4">
      <div class="col-12 col-md-12 px-md-5 mt-md-0  d-flex flex-column align-items-start border border-1">
        <h1 class="px-md-2 pt-md-0 p-0 mt-4">Walter Baya</h1>
        <h2 class="px-md-3 pt-1 px-1 mt-md-2">Desarrollador de Software</h2>
        <p class="px-md-3 p-1 pt-2">
          <strong>> Apasionado por la tecnología y la computación</strong>, me <br>> motiva seguir
          aprendiendo cosas nuevas y realizar <br>> proyectos poniendo a prueba dichos
          aprendizajes.
        </p>
        <ul class="list-unstyled py-md-2 mx-md-3 p-3  bg-white rounded">
          <li class="rounded">
            <a href="" class="text-decoration-none hover-grey color-black"
              ><i class="fas fa-envelope"></i
              ><span class="px-1 px-md-2">walterbaya@yahoo.com</span></a
            >
          </li>
          <li class="my-md-1 mt-2 rounded">
            <a href="" class="text-decoration-none hover-grey color-black"
              ><i class="fas fa-phone"></i
              ><span class="px-1 px-md-2">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row p-md-5 px-4">
      <div class="col-12 px-md-5 mx-md-1 color-pink border border-1">
        <h1 class="py-md-1 py-2">Estudios Universitarios</h1>
        <ul class="list-unstyled">
          <h2 class="py-1 mx-md-2 mx-1 py-md-1" id="university">Universidad de Buenos Aires</h2>
          <li>
            <p class="mx-2" id="degree">
              > Licenciatura en Ciencias de la Computación
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