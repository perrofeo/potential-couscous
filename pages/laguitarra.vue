<template>
  <div>
    <div class="fondo fondo-guitarra">
      <b-navbar toggleable="false" type="" variant="">
        <b-navbar-brand v-b-popover.hover="'- Inicio'">
          <nuxt-link to="/">
            <img
              class="rounded-circle"
              src="~assets/logo_perrofeofilms_amarillo.jpg"
              alt="perrofeo logo"
            />
          </nuxt-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse">
          <img src="~assets/PRF_WEB_hamburguesa.svg" alt="perrofeo burger" />
        </b-navbar-toggle>
        <b-collapse id="nav_collapse" is-nav class="text-right">
          <b-navbar-nav>
            <nuxt-link to="/">
              <span>Inicio</span>
            </nuxt-link>
            <nuxt-link to="/tipishca/">
              <span>Tipishca: La Serie</span>
            </nuxt-link>
            <nuxt-link to="/unadegato/">
              <span>Uña de Gato</span>
            </nuxt-link>
            <nuxt-link to="/nosotros/">
              <span>Sobre nosotros</span>
            </nuxt-link>
            <a
              href="https://teespring.com/stores/perrofeofilms-shop"
              class="boton-shop"
              target="_blank"
              rel="noopener"
            >
              <span>Shop</span>
            </a>
            <social-nav />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="portada-laguitarra">
        <div class="fondo-color">
          <h1 class="title">
            La Guitarra de Hitler
          </h1>
        </div>
      </div>
    </div>
    <div class="info text-center">
      <h2>"Hazlo Tú Mismo" amazónico</h2>
      <p class="info-text">
        Desde el corazón de la selva peruana, Hitler Lomas Canaquiri nos enseña
        como construir una guitarra al estilo tropical.<br />Un film hecho a
        machetazos.
      </p>
    </div>
    <div class="video-laguitarra">
      <b-embed
        type="iframe"
        aspect="4by3"
        src="https://www.youtube.com/embed/-P2IrEynxj4?rel=0&cc_load_policy=1"
        frameborder="0"
        allow="accelerometer"
        encrypted-media
        gyroscope
        picture-in-picture
        allowfullscreen
        title="La Guitarra de Hitler"
      />
    </div>
    <div class="credits text-center">
      <p><strong>Protagonista</strong><br />Hitler Lomas Canaquiri</p>
      <p>
        <strong>Guión, dirección, cámara, montaje y producción</strong
        ><br />Igor Rekarte
      </p>
      <p class="info-text">
        Filmado en San Martín del Tipishca (Perú),<br />
        con la ayuda de sus fantásticos habitantes y Casa Lupuna.
      </p>
    </div>
    <div class="totipishca">
      <nuxt-link to="/tipishca/">👈🏼_Tipishca</nuxt-link>
    </div>
    <div class="contacto text-center">
      <p>
        Echa un vistazo a
        <a
          href="https://www.youtube.com/channel/UCWAH8FrQMgxKZYxWPRynrKw"
          target="_blank"
          rel="noopener"
        >
          nuestro canal de YouTube</a
        >
        y si te interesa lo que hacemos,
        <a
          href="https://www.youtube.com/channel/UCWAH8FrQMgxKZYxWPRynrKw?sub_confirmation=1"
          target="_blank"
          rel="noopener"
          >suscríbete</a
        >.
      </p>
    </div>
    <div class="footer text-center">
      <div class="brand-footer">
        <nuxt-link to="/">
          <img src="~assets/PRF_logo150.svg" alt="perrofeofilms" />
        </nuxt-link>
      </div>
      <div class="footer-menu">
        <nuxt-link to="/tipishca/">Tipishca</nuxt-link>
        <nuxt-link to="/unadegato/"> Uña de Gato</nuxt-link>
        <nuxt-link to="/nosotros/">Nosotros</nuxt-link>
        <a
          href="https://teespring.com/stores/perrofeofilms-shop"
          target="_blank"
          rel="noopener"
        >
          <span>Shop</span>
        </a>
      </div>
      <div class="social">
        <a
          href="https://www.youtube.com/channel/UCWAH8FrQMgxKZYxWPRynrKw"
          target="_blank"
          rel="noopener"
          ><img src="~assets/YOUTUBE_logo-footer.svg" title="YouTube"
        /></a>
        <a
          href="https://www.instagram.com/perrofeofilms/"
          target="_blank"
          rel="noopener"
          ><img src="~assets/INSTAGRAM_logo-footer.svg" title="Instagram"
        /></a>
        <a
          href="https://teespring.com/stores/perrofeofilms-shop"
          target="_blank"
          rel="noopener"
          ><img src="~assets/TEESPRING_logo-footer.svg" title="Shop"
        /></a>
        <a
          href="https://www.patreon.com/perrofeofilms"
          target="_blank"
          rel="noopener"
          ><img src="~assets/PATREON_logo-footer.svg" title="Patreon"
        /></a>
        <a href="mailto:perrofeofilms@gmail.com"
          ><img src="~assets/EMAIL_logo-footer.svg" title="Email"
        /></a>
      </div>
      <p class="copyright">perrofeofilms © {{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>
<script>
import SocialNav from "@/components/SocialNav";

export default {
  components: {
    SocialNav
  },
  data() {
    return {
      title: "La Guitarra de Hitler"
    };
  },
  head() {
    return {
      title: "perrofeofilms - " + this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "DIY amazónico - Cómo construir una guitarra al estilo amázonico."
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "DIY amazónico - Cómo construir una guitarra al estilo amázonico."
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.perrofeofilms.com/La-Guitarra-PORTADA1.jpg"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.perrofeofilms.com/laguitarra/"
        }
      ]
    };
  }
};
</script>

<style>
.fondo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-blend-mode: darken;
  height: auto;
}
.fondo-guitarra {
  background-image: url("/poster10.png");
}
.fondo-color {
  padding: 60px 30px 0;
  height: 60vh;
}
.bg-info {
  background-color: transparent !important;
}
.navbar {
  width: 95vw;
  margin: auto;
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
.portada-laguitarra {
  margin: 0;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Source Code Pro", monospace;
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
.video-laguitarra {
  max-width: 720px;
  text-align: center;
  margin: auto;
}
.credits {
  padding: 20px;
  max-width: 720px;
  margin: auto;
}
.totipishca {
  padding: 20px;
  max-width: 720px;
  margin: auto;
}
.totipishca a {
  color: black;
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
