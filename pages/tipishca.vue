<template>
  <div>
    <div class="fondo">
      <b-navbar toggleable="false" type="" variant="">
        <b-navbar-brand v-b-popover.hover="'- Inicio'">
          <nuxt-link to="/">
            <img
              class="rounded-circle"
              src="~assets/logo_perrofeofilms_amarillo.jpg"
              alt="perrofeo logo"
            >
          </nuxt-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse">
          <img src="~assets/PRF_WEB_hamburguesa.svg" alt="perrofeo burger">
        </b-navbar-toggle>
        <b-collapse id="nav_collapse" is-nav class="text-right">
          <b-navbar-nav>
            <nuxt-link
              to="/"
            >
              <span>Inicio</span>
            </nuxt-link>
            <nuxt-link
              to="/laguitarra/"
            >
              <span>La Guitarra de Hitler</span>
            </nuxt-link>
            <nuxt-link
              to="/cushuri/"
            >
              <span>Cushuri</span>
            </nuxt-link>
            <nuxt-link
              to="/carachama/"
            >
              <span>Huevos de Carachama</span>
            </nuxt-link>
            <nuxt-link
              to="/unadegato/"
            >
              <span>Uña de Gato</span>
            </nuxt-link>
            <nuxt-link
              to="/nosotros/"
            >
              <span>Sobre nosotros</span>
            </nuxt-link>
            <a href="https://teespring.com/stores/perrofeofilms-shop" class="boton-shop" target="_blank" rel="noopener">
              <span>Shop</span>
            </a>
            <social-nav />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="portada-laguitarra">
        <div class="fondo-color">
          <h1 class="title">
            Tipishca - La Tierra sin Mal
          </h1>
        </div>
      </div>
    </div>
    <div class="info text-center">
      <h2>Historias desde el Amazonas</h2>
      <p>Filmada en el corazón del Amazonas peruano, "Tipishca: La tierra sin mal" es una serie que transita entre la realidad y la ficción y que cuenta historias de un mundo que está cambiando para siempre.</p>
    </div>
    <div class="portadas-tipishca">
      <div>
        <b-card
          title=""
          img-src="~assets/La-Guitarra-PORTADA1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Episodio 1 - La Guitarra de Hitler
          </b-card-text>

          <nuxt-link to="/laguitarra/"><b-button variant="primary">+ info</b-button></nuxt-link>
        </b-card>
      </div>
      <div>
        <b-card
          title=""
          img-src="~assets/Cushuri_portada1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Episodio 2 - Cushuri
          </b-card-text>

          <nuxt-link to="/cushuri/"><b-button variant="primary">+ info</b-button></nuxt-link>
        </b-card>
      </div>
      <div>
        <b-card
          title=""
          img-src="~assets/HuevosDeCarachama_portada1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Episodio 3 - Huevos de Carachama
          </b-card-text>

          <nuxt-link to="/carachama/"><b-button variant="primary">+ info</b-button></nuxt-link>
        </b-card>
      </div>
    </div>
    <div class="contacto text-center">
      <div class="boton-suscribirse">
        <div
          class="g-ytsubscribe"
          data-channel="perrofeofilms"
          data-layout="default"
          data-count="hidden"
        />
      </div>
      <p>
        Echa un vistazo a
        <a
          href="https://www.youtube.com/channel/UCWAH8FrQMgxKZYxWPRynrKw"
          target="_blank"
          rel="noopener"
        > nuestro canal de YouTube</a> y si te interesa lo que hacemos,
        <a
          href="https://www.youtube.com/channel/UCWAH8FrQMgxKZYxWPRynrKw?sub_confirmation=1"
          target="_blank"
          rel="noopener"
        >suscríbete</a>.
      </p>
    </div>
    <div class="footer text-center">
      <div class="brand-footer">
        <nuxt-link to="/">
          <img src="~assets/PRF_logo150.svg" alt="perrofeofilms">
        </nuxt-link>
      </div>
      <div class="footer-menu">
        <nuxt-link to="/tipishca/">Tipishca</nuxt-link>
        <nuxt-link to="/unadegato/">
          Uña de Gato</nuxt-link>
        <nuxt-link to="/nosotros/">Nosotros</nuxt-link>
        <a href="https://teespring.com/stores/perrofeofilms-shop" target="_blank" rel="noopener">
          <span>Shop</span>
        </a>
      </div>
      <div class="social">
        <a href="https://www.youtube.com/channel/UCWAH8FrQMgxKZYxWPRynrKw" target="_blank" rel="noopener"><img src="~assets/YOUTUBE_logo-footer.svg" title="YouTube"></a>
        <a href="https://www.instagram.com/perrofeofilms/" target="_blank" rel="noopener"><img src="~assets/INSTAGRAM_logo-footer.svg" title="Instagram"></a>
        <a href="https://teespring.com/stores/perrofeofilms-shop" target="_blank" rel="noopener"><img src="~assets/TEESPRING_logo-footer.svg" title="Shop"></a>
        <a href="https://www.patreon.com/perrofeofilms" target="_blank" rel="noopener"><img src="~assets/PATREON_logo-footer.svg" title="Patreon"></a>
        <a href="mailto:perrofeofilms@gmail.com"><img src="~assets/EMAIL_logo-footer.svg" title="Email"></a>
      </div>
      <p class="copyright">perrofeofilms © 2020</p>
    </div>
  </div>
</template>

<script>
import SocialNav from '@/components/SocialNav'

export default {
  components: {
    SocialNav
  },
  data () {
    return {
      title: 'Tipishca: La Tierra sin Mal'
    }
  },
  head () {
    return {
      title: 'perrofeofilms - ' + this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Historias desde el Amazonas'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Historias desde el Amazonas'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.perrofeofilms.com/Tipishca-PORTADA1.jpg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.perrofeofilms.com/tipishca/'
        }
      ]
    }
  }
}
</script>
<style scoped>
.fondo {
  background-image: url('~assets/atardecer_tipishca.jpg');
}
.navbar {
  width: 95vw;
  margin: auto;
}
</style>

<style>
.fondo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-blend-mode: darken;
  height: auto;
}
.fondo-color {
  padding: 60px 30px 0;
  height: 60vh;
}
.bg-info {
  background-color: transparent !important;
}
.navbar-brand img {
  width: 50px;
}
.fondo-contact .nav-link {
  color: white !important;
}
.portada-laguitarra {
  margin: 0;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Source Code Pro', monospace;
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
  padding-top: 0px;
  opacity: 0.5;
}

.subtitle {
  font-weight: bold;
  font-size: 20px;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.portadas-tipishca {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card .btn-primary {
  color: black;
  background-color: #ddfe19;
  border-color: black;
  z-index: 2;
}
.card .btn-primary:hover {
  background-color: black;
  color: #ddfe19;
}
.video-tipishca {
  max-width: 720px;
  text-align: center;
  margin: auto;
}
.video-tipishca h2 {
  padding: 50px 0 0;
}
.list-tipishca {
  list-style: none;
  padding: 50px 0;
}
.list-tipishca li {
  padding-bottom: 20px;
}
.list-tipishca a {
  color: #212529;
  text-decoration: underline;
}
.info {
  padding: 40px 20px 20px;
  max-width: 500px;
  margin: auto;
  width: 100%;
}
.info h2 {
  width: fit-content;
  margin: auto;
  color: rgba(222, 253, 25, 1);
  background-color: black;
  margin-bottom: 10px;
}
.contacto {
  width: 100%;
  padding: 40px 20px 30px;
}
.contacto img {
  width: 110px;
  padding: 20px 0;
}
.contacto .boton-suscribirse {
  padding-bottom: 20px;
}
.contacto a {
  color: #212529;
  text-decoration-color: #212529;
  background-color: #defd19;
}
.contacto a:hover {
  text-decoration: underline;
  color: #212529;
  text-decoration-color: #212529;
  background-color: #defd19;
}
.brand-footer img {
  max-width: 150px;
  opacity: 0.5;
}
.info-home {
  color: #212529;
}
.info-home:hover {
  text-decoration: #212529;
}
@media (max-width: 750px) {
  .title {
    font-size: 40px;
  }
  .subtitle {
    font-size: 16px;
  }
}
@media (max-width: 336px) {
  .title {
    font-size: 34px;
  }
  .subtitle {
    font-size: 16px;
  }
}
</style>
