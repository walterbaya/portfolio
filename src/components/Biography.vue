<template>
  <div id="biography" class="container bg-light p-0">
    <div class="row">
      <div
        class="col-12 bg-dark text-white d-flex justify-content-center align-items-center p-1 m-0"
      >
        <i class="fas fa-terminal fa-2x mx-2"></i>
        <h1 class="py-2">Biografía</h1>
      </div>
    </div>
    <div class="row mb-1 mt-0">
      <div class="col-12 d-flex flex-column bg-light justify-content-center align-items-start pb-3 p-5">
        <h1>Walter Baya</h1>
        <h4 class="p-md-1 mt-md-1 mt-1">Software Developer</h4>
        <p class="mt-md-2 p-md-1 mt-4">
          ¡Hola! soy Walter
          Me encanta el desarrollo de software y disfruto llevando las ideas a la realidad, con el objetivo de resolver problemas del mundo real.
          <br/>Desde que nací me dí cuenta del gran impacto que tiene la tecnología en nuestras vidas, facilitando procesos de nuestro día a día.
          <br/>Me gustaría ser parte de esto, mejorando y generando tecnología de gran calidad y participando activamente del proceso creativo. 
          <br/>Este es mi perfil de github: 
          <a class="link" href="https://github.com/walterbaya">https://github.com/walterbaya</a> <br/>
          Actualmente estoy realizando la carrera de Analista de Sistemas en ESBA Barrio Norte finalizando el tercer cuatrimestre. 
          <br/>Para ponerte en contacto conmigo puedes enviarme un mail o también un Whatsapp a las siguientes direcciones <br/>
        </p>
        <ul class="list-unstyled mx-1 py-3 ">
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
      <div class="col-12 border-top bg-light text-dark p-5 py-2">
        <h2 class="py-md-1">Estudios Universitarios</h2>
        <ul class="list-unstyled">
          <h4 class="mt-md-4 mt-3">Instituto de Estudios Superiores de Buenos Aires (ESBA)</h4>
          <li>
            <p id="degree">
              Analista Programador
              <br/>
              Analista de Sistemas (En Curso)
            </p>
          </li>
        </ul>
        <ul class="list-unstyled">
          <h4 class="mt-md-4 mt-3">Universidad Nacional De La Matanza</h4>
          <li>
            <p id="degree">
              Ingeniería Informática (En Curso)
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