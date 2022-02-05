<template>
  <div
    id="biography"
    class="container px-5 py-2 general-container background-seablue"
  >
    <div class="row rounded">
      <div id="biography-container" class="col-12 d-flex justify-content-center align-items-center background-bluegrey color-greyblue mb-3">
        <i class="far fa-user-circle fa-2x mt-2 mx-2"></i>
        <h1 class="p-2 mt-3 title color-greyblue" id="biography-title">Biografía</h1>
      </div>
    </div>
    <div class="row mt-4 mt-md-5 mb-1 px-md-5" id="first-row">
      <div class="col-12 col-md-4 p-0 m-0 d-flex justify-content-center">
        <img
          src="../assets/img/face.jpg"
          class="w-100 img-fluid"
          alt="walter-baya-face"
        />
      </div>
      <div class="col-12 col-md-8 px-md-5 mt-md-0  d-flex flex-column align-items-start">
        <h1 class="color-greyblue px-md-2 pt-md-0 p-0 mt-4">Walter Baya</h1>
        <h2 class="text-black px-md-3 pt-1 text-decoration-underline px-1 mt-md-2">Desarrollador de Software</h2>
        <p class="text-black px-md-3 px-1 pt-2">
          <strong>Apasionado por la tecnología y la computación</strong>, me motiva seguir
          aprendiendo cosas nuevas y realizar proyectos poniendo a prueba dichos
          aprendizajes.
        </p>
        <ul class="list-unstyled py-0 py-md-2 px-1">
          <li>
            <a href="" class="text-decoration-none text-dark py-3"
              ><i class="fas fa-envelope"></i
              ><span class="px-1 px-md-2">walterbaya@yahoo.com</span></a
            >
          </li>
          <li class="my-md-1">
            <a href="" class="text-decoration-none text-dark py-3"
              ><i class="fas fa-phone"></i
              ><span class="px-1 px-md-2">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row px-md-5">
      <hr />
      <div class="col-12 px-3">
        <h1 class=" p-md-3 p-0 py-md-1 color-greyblue py-2">Estudios Universitarios</h1>
        <ul class="list-unstyled">
          <h2 class="py-1 mx-md-3  mx-1 py-md-1 text-dark text-decoration-underline" id="university">Universidad de Buenos Aires</h2>
          <li>
            <p class="mx-md-3  mx-1 py-md-1 text-dark" id="degree">
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