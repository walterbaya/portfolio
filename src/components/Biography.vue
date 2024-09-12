<template>
  <div class="container mt-md-4 mt-5">
    <div class="row">
      <div
        class="col-12 d-flex justify-content-center align-items-center p-1"
      >
        <i class="fas fa-terminal fa-2x mx-3"></i>
        <h1>Biografía</h1>
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
              href="tel:+54 1128653459"
              class="text-decoration-none hover-white"
              ><i class="fas fa-phone"></i
              ><span class="px-1 px-md-3">(+54) 11 2865 3459</span></a
            >
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6 bg-light text-success p-5">
        <h2 class="py-md-1">Estudios Universitarios</h2>
        <ul class="list-unstyled">
          <h4 class="mt-md-4 mt-3">Instituto de Estudios Superiores de Buenos Aires (ESBA)</h4>
          <li>
            <p id="degree">
              <br/>
              Analista Programador
              <br/>
              Analista de Sistemas (En Curso)
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