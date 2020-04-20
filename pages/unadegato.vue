<template>
  <div>
    <div class="fondo fondo-gato">
      <b-navbar toggleable="false" type="" variant="">
        <b-navbar-brand v-b-popover.hover="'- Inicio'">
          <nuxt-link
            to="/"
          >
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
              to="/tipishca/"
            >
              <span>Tipishca: La Serie</span>
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
      <div class="portada-unadegato">
        <div class="fondo-color">
          <h1 class="title">
            Uña de Gato
          </h1>
        </div>
      </div>
    </div>
    <div class="info text-center">
      <h2>Un viaje al planeta Tipishca</h2>
      <p>Reiter cabalga por los ríos amazónicos en busca de un remedio llamado <strong>Uña de Gato</strong>.</p>
      <p>A lomos de su canoa, nos adentraremos en lo más profundo y solitario de una selva llena de espejos.</p>
    </div>
    <div class="video-unadegato">
      <b-embed
        type="iframe"
        aspect="4by3"
        src="https://www.youtube.com/embed/_Qm0IkEgACU?rel=0&cc_load_policy=1"
        frameborder="0"
        allow="accelerometer"
        encrypted-media
        gyroscope
        picture-in-picture
        allowfullscreen
        title="Uña de Gato"
      />
    </div>
    <div class="credits text-center">
      <p><strong>Protagonistas</strong><br>Reiter Mendoza Ayambo, Hitler Lomas Canaquiri y Exon Jair Lomas Silvano.</p>
      <p><strong>Canción final</strong><br><a href="https://youtu.be/6fi2KnQCxDo" target="_blank" rel="noopener">"Aspiración" por Avelino Lancha Manihuari</a></p>
      <p><strong>Guión</strong><br>Reiter Mendoza Ayambo<br>Igor Rekarte</p>
      <p><strong>Dirección, cámara, montaje y producción</strong><br>Igor Rekarte</p>
      <p>Filmado en 2009 en la Reserva Nacional Pacaya-Samiria (Perú),<br>
        con la ayuda de sus fantásticos habitantes y Casa Lupuna.</p>
      <p><a
           href="https://www.sprachenatelier-berlin.de/de/topic/451.veranstaltungen-im-sprachenatelier.html?id=112"
           target="_blank"
           rel="noopener"
          >
            Estreno en Berlín el 5 de noviembre del 2010.
          </a>
      </p>
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
      title: 'Uña de Gato'
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
          content:
            'Jair y su pandilla salen en busca del tesoro: los huevos de carachama, un pez prehistórico con cara de pocos amigos. Un día lleno de aventuras les espera.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Jair y su pandilla salen en busca del tesoro: los huevos de carachama, un pez prehistórico con cara de pocos amigos. Un día lleno de aventuras les espera.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://www.perrofeofilms.com/HuevosDeCarachama_portada1.jpg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.perrofeofilms.com/unadegato/'
        }
      ]
    }
  }
}
</script>

<style>
.fondo {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  background-blend-mode: darken;
  height: auto;
}
.fondo-color {
  padding: 60px 30px 0;
  height: 60vh;
}
.fondo-gato {
  background-image: url('~assets/unadegatoWeb.jpg');
  background-position: bottom;
}
.navbar {
  width: 95vw;
  margin: auto;
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
.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
  color: white;
  text-decoration: underline;
}
.portada-unadegato {
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
.video-unadegato {
  max-width: 720px;
  text-align: center;
  margin: auto;
}
.credits {
  padding: 20px;
  max-width: 720px;
  margin: auto;
}
.credits a {
  text-decoration: underline;
  color: #212529;
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
.brand-footer img {
  max-width: 150px;
  opacity: 0.5;
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
