<template>
  <div
    id="biography"
    class="container bg-white text-dark px-5 py-2 general-container"
  >
    <div class="row bg-light rounded">
      <div class="col-12 d-flex justify-content-center align-items-center border border-1">
        <img
          src="../assets/img/biography-icon.svg"
          alt=""
          class="w-25 img-fluid p-2 bg-dark logo"
        />
        <h1 class="text-dark p-1 title" id="biography-title">Biografía</h1>
      </div>
    </div>
    <div class="row mt-4 mb-1">
      <div class="col-12 col-md-4 p-0 m-0 d-flex justify-content-center">
        <img
          src="../assets/img/face.jpg"
          class="w-100 img-fluid px-3px-md-5 bg-white border border-1"
          alt="walter-baya-face"
        />
      </div>
      <div class="col-12 col-md-8 px-md-3 px-md-5 mt-3 d-flex flex-column justify-content-center">
        <h1 class="p-2 mt-1">Walter Baya</h1>
        <h2 class="mx-2 p-2 mt-1">Desarrollador de Software</h2>
        <p class="p-2 mt-1 ">
          <strong>Apasionado por la tecnología y la computación</strong>, me motiva seguir
          aprendiendo cosas nuevas y realizar proyectos poniendo a prueba dichos
          aprendizajes.
        </p>
        <ul class="list-unstyled  mx-0">
          <li>
            <a href="" class="text-decoration-none"
              ><i class="fas fa-envelope"></i
              ><span class="px-2">walterbaya@yahoo.com</span></a
            >
          </li>
          <li class="my-1">
            <a href="" class="text-decoration-none"
              ><i class="fas fa-phone"></i
              ><span class="px-2">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <hr />
      <div class="col-12 px-3">
        <h1 class="mt-1 p-2">Estudios Universitarios</h1>
        <ul class="list-unstyled">
          <h2 class="px-1 mx-2" id="university">Universidad de Buenos Aires</h2>
          <li>
            <p class="mx-1 p-1" id="degree">
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