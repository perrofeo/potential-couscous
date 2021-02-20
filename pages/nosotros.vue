<template>
  <div>
    <div class="fondo fondo-nosotros">
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
        <div class="fondo-color"></div>
      </div>
    </div>
    <div class="info text-center">
      <h2>Sobre nosotros</h2>
      <p class="info-text">
        Perrofeofilms es un laboratorio audiovisual que mezcla el documental con
        la ficción, con el objetivo de lograr algo que no es ni verdad ni
        mentira, sino todo lo contrario.
      </p>
      <img src="~assets/tropical_job.jpg" /><br /><br />
      <p class="info-text">
        Existen otros mundos, los que no existimos somos nosotros.
      </p>
      <p>
        Pero tenemos email:
        <a href="mailto:perrofeofilms@gmail.com">perrofeofilms@gmail.com</a>
      </p>
      <br />
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
      <p class="copyright">perrofeofilms © 2020</p>
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
      title: "Sobre nosotros"
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
            "Laboratorio audiovisual que mezcla el documental con la ficción."
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.perrofeofilms.com/nosotros/"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Laboratorio audiovisual que mezcla el documental con la ficción."
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.perrofeofilms.com/portadaNocheRec.jpg"
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
.fondo-color {
  padding: 60px 30px 0;
  height: 60vh;
}
.fondo-nosotros {
  background-image: url("/portadaNoche.jpg");
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
.info {
  padding: 40px 20px 20px;
  max-width: 500px;
  margin: auto;
  width: 100%;
}
.info a {
  color: #000;
  text-decoration: underline;
}
.info h2 {
  width: fit-content;
  margin: auto;
  color: rgba(222, 253, 25, 1);
  background-color: black;
  margin-bottom: 10px;
}
.info img {
  max-width: 100%;
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
