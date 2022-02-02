<template>
  <div
    id="biography"
    class="container bg-dark text-white px-5 py-2 general-container"
  >
    <div class="row bg-secondary rounded">
      <div class="col-12 d-flex justify-content-center align-items-center border border-1">
        <img
          src="../assets/img/biography-icon.svg"
          alt=""
          class="w-25 img-fluid p-2 bg-secondary logo"
        />
        <h1 class="text-white p-1 title" id="biography-title">Biografía</h1>
      </div>
    </div>
    <div class="row mt-4 mb-1 px-md-5">
      <div class="col-12 col-md-4 p-0 m-0 d-flex justify-content-center">
        <img
          src="../assets/img/face.jpg"
          class="w-100 img-fluid bg-white rounded border border-1"
          alt="walter-baya-face"
        />
      </div>
      <div class="col-12 col-md-8 px-md-3 px-md-5 mt-3 d-flex flex-column align-items-start">
        <h1 class="p-1 mt-1 text-white">Walter Baya</h1>
        <h2 class="p-2 m-1 text-white">Desarrollador de Software</h2>
        <p class="mt-1 p-1 text-white">
          <strong>Apasionado por la tecnología y la computación</strong>, me motiva seguir
          aprendiendo cosas nuevas y realizar proyectos poniendo a prueba dichos
          aprendizajes.
        </p>
        <ul class="list-unstyled">
          <li>
            <a href="" class="text-decoration-none"
              ><i class="fas fa-envelope"></i
              ><span class="px-2 text-light">walterbaya@yahoo.com</span></a
            >
          </li>
          <li class="my-1">
            <a href="" class="text-decoration-none"
              ><i class="fas fa-phone"></i
              ><span class="px-2 text-light">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row px-md-5">
      <hr />
      <div class="col-12 px-3">
        <h1 class="mt-1 p-1 py-md-3 text-white">Estudios Universitarios</h1>
        <ul class="list-unstyled">
          <h2 class="px-1 mx-2 py-md-2 text-white" id="university">Universidad de Buenos Aires</h2>
          <li>
            <p class="mx-1 p-1 py-md-3 px-md-2 text-white" id="degree">
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