<template>
  <nav class="main-nav" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <!-- Logo con animación -->
      <router-link to="/" class="brand-logo">
        <img 
          src="../assets/img/icon.png" 
          alt="Walter Baya Logo"
          class="logo-image"
          @mouseenter="addLogoHover"
          @mouseleave="removeLogoHover"
        />
      </router-link>

      <!-- Menú principal -->
      <div class="nav-links">
        <router-link 
          v-for="link in navigationLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-item text-decoration-none"
          active-class="active"
        >
          {{ link.label }}
          <div class="link-underline"></div>
        </router-link>
      </div>

      <!-- Redes sociales con tooltips -->
      <div class="social-links">
        <a 
          v-for="social in socialLinks"
          :key="social.id"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          :aria-label="social.name"
        >
          <i :class="social.icon"></i>
          <span class="tooltip">{{ social.name }}</span>
        </a>
      </div>

      <!-- Menú móvil -->
      <button 
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <div class="menu-bar" :class="{ 'open': isMobileMenuOpen }"></div>
      </button>
    </div>

    <!-- Menú móvil desplegable -->
    <transition name="slide-down">
      <div v-show="isMobileMenuOpen" class="mobile-menu">
        <router-link 
          v-for="link in navigationLinks" 
          :key="link.path"
          :to="link.path"
          class="mobile-nav-item"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </router-link>
        <div class="mobile-social-links">
          <a 
            v-for="social in socialLinks"
            :key="social.id"
            :href="social.url"
            class="mobile-social-icon"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import "@/assets/css/navbar.css";

export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      navigationLinks: [
        { path: '/biography', label: 'Biografía' },
        { path: '/experiences', label: 'Experiencia' },
        { path: '/projects', label: 'Proyectos' },
        { path: '/certificates', label: 'Certificados' }
      ],
      socialLinks: [
        { id: 1, name: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/walterbaya' },
        { id: 2, name: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/walterbaya' },
        { id: 3, name: 'Email', icon: 'fa-regular fa-envelope', url: 'mailto:walterbaya1996@gmail.com' },
        { id: 4, name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', url: 'tel:+541128653459' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    handleResize() {
      if (window.innerWidth > 768) {
        this.isMobileMenuOpen = false
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    addLogoHover(e) {
      e.target.classList.add('logo-hover')
    },
    removeLogoHover(e) {
      e.target.classList.remove('logo-hover')
    }
  }
}
</script>