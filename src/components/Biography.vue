<template>
  <div
    id="biography"
    class="container px-5 py-2 general-container background-seablue"
  >
    <div class="row rounded">
      <div
        id="biography-container"
        class="
          col-12
          d-flex
          justify-content-center
          align-items-center
          background-bluegrey
          color-greyblue
          mb-3
        "
      >
        <i class="far fa-user-circle fa-3x mt-2 mx-2"></i>
        <h1 class="p-2 mt-3 title color-greyblue">
          Biografía
        </h1>
      </div>
    </div>
    <div class="row mt-4 mt-md-3 mb-1 px-md-5">
      <div class="col-12 col-md-4 p-0 m-0 d-flex justify-content-center">
        <img

          src="../assets/img/face.jpg"
          class="w-100 img-fluid rounded mt-md-5"
          alt="walter-baya-face"
        />
      </div>
      <div
        class="
          col-12 col-md-8
          px-md-3 px-md-5
          mt-md-4
          mt-0
          d-flex
          flex-column
          align-items-start
        "
      >
        <h1 class="color-greyblue px-md-1 pt-md-0 p-0 py-1">Walter Baya</h1>
        <h4 class="text-black px-md-1  pb-3 mt-md-0 text-decoration-underline">
          Desarrollador de Software
        </h4>
        <p class="text-black px-md-1 px-1 mt-2">
          <strong>Apasionado por la tecnología y la computación</strong>, me
          motiva seguir aprendiendo cosas nuevas y realizar proyectos poniendo a
          prueba dichos aprendizajes.
        </p>
        <ul class="list-unstyled px-2">
          <li>
            <a href="" class="text-decoration-none text-dark py-3"
              ><i class="fas fa-envelope"></i
              ><span class="px-2">walterbaya@yahoo.com</span></a
            >
          </li>
          <li class="my-1">
            <a href="" class="text-decoration-none text-dark py-3"
              ><i class="fas fa-phone"></i
              ><span class="px-2">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row px-md-5">
      <hr />
      <div class="col-12">
        <h1 class="p-0 py-md-1 color-greyblue py-2">
          Estudios Universitarios
        </h1>
        <ul class="list-unstyled">
          <h4
            class="
              px-md-0
              mx-md-1
              py-md-1
              px-1
              text-dark text-decoration-underline
            "
            id="university"
          >
            Universidad de Buenos Aires
          </h4>
          <li>
            <p class="px-md-0 px-2 mx-md-2 text-dark" id="degree">
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