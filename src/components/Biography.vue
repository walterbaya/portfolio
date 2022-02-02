<template>
  <div
    id="biography"
    class="container px-5 py-2 general-container background-seablue"
  >
    <div class="row  rounded">
      <div id="biography-container" class="col-12 d-flex justify-content-center align-items-center background-bluegrey color-pink mb-3">
        <h1 class="p-1 title" id="biography-title">Biografía</h1>
      </div>
    </div>
    <div class="row mt-5 mb-1 px-md-5">
      <div class="col-12 col-md-4 p-0 m-0 d-flex justify-content-center">
        <img
          src="../assets/img/face.jpg"
          class="w-100 img-fluid rounded border border-1"
          alt="walter-baya-face"
        />
      </div>
      <div class="col-12 col-md-8 px-md-3 px-md-5 mt-3 d-flex flex-column align-items-start">
        <h1 class="text-white px-2">Walter Baya</h1>
        <h2 class="text-white px-3 my-2 text-decoration-underline">Desarrollador de Software</h2>
        <p class="text-white px-3 mt-2">
          <strong>Apasionado por la tecnología y la computación</strong>, me motiva seguir
          aprendiendo cosas nuevas y realizar proyectos poniendo a prueba dichos
          aprendizajes.
        </p>
        <ul class="list-unstyled">
          <li>
            <a href="" class="text-decoration-none text-white"
              ><i class="fas fa-envelope"></i
              ><span class="px-2">walterbaya@yahoo.com</span></a
            >
          </li>
          <li class="my-1">
            <a href="" class="text-decoration-none text-white"
              ><i class="fas fa-phone"></i
              ><span class="px-2">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row px-md-5">
      <hr />
      <div class="col-12 px-3">
        <h1 class="mt-1 p-1 py-md-1 text-white">Estudios Universitarios</h1>
        <ul class="list-unstyled">
          <h2 class="px-1 mx-2 py-md-1 text-white" id="university">Universidad de Buenos Aires</h2>
          <li>
            <p class="mx-1 p-1 py-md-1 px-md-2 text-white" id="degree">
              Licenciatura en Ciencias de la Computación
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