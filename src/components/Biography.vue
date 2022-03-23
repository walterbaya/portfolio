<template>
  <div class="container mt-5 mb-5 mt-md-0">
    <div class="row rounded">
      <div
        id="biography-container"
        class="col-12 d-flex justify-content-center align-items-center my-3"
      >
        <i class="fas fa-terminal fa-2x mt-1"></i>
        <h1 class="p-2 m-1 title" id="biography-title">Biografía</h1>
      </div>
    </div>
    <div class="row mt-md-4 mb-1 p-md-5">
      <div class="col-12 col-md-6 d-flex flex-column align-items-start pt-5 pb-3 px-5">
        <h1>Walter Baya</h1>
        <h4 class="p-md-1 mt-md-2 mt-3">Software Developer</h4>
        <p class="mt-md-2 p-md-1 mt-4">
          Apasionado por la tecnología y la computación, me motiva seguir
          aprendiendo cosas nuevas y realizar proyectos poniendo a prueba dichos
          aprendizajes.
        </p>
        <ul class="list-unstyled mx-1 py-3 mt-md-1">
          <li class="rounded">
            <a
              href="mailto:walterbaya1996@gmail.com"
              class="text-decoration-none hover-white"
              ><i class="fas fa-envelope"></i
              ><span class="px-1 px-md-3">walterbaya1996@gmail.com</span></a
            >
          </li>
          <li class="my-md-3 mt-2 rounded">
            <a
              href="tel:+54 1132812848"
              class="text-decoration-none hover-white"
              ><i class="fas fa-phone"></i
              ><span class="px-1 px-md-3">(+54) 11 3281 2848</span></a
            >
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6 background-grey text-white p-5">
        <h2 class="py-md-1">Estudios Universitarios</h2>
        <ul class="list-unstyled">
          <h4 class="mt-md-4 mt-3">Universidad de Buenos Aires</h4>
          <li>
            <p id="degree">
              <br/>
              Licenciatura en Ciencias Matemáticas
              <br/>
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