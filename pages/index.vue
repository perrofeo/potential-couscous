<template>
  <div>
    <div class="container container-index">
      <div>
        <b-navbar toggleable="false" type="" variant="">
          <b-navbar-brand v-b-popover.hover="'- ¡Jau!'" title="perrofeofilms">
            <img
              class="rounded-circle"
              src="~assets/logo_perrofeofilms_amarillo.jpg"
              alt="perrofeo logo"
            />
          </b-navbar-brand>
          <b-navbar-toggle target="nav_collapse">
            <img src="~assets/PRF_WEB_hamburguesa.svg" alt="perrofeo burger" />
          </b-navbar-toggle>
          <b-collapse id="nav_collapse" is-nav class="text-right">
            <b-navbar-nav>
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
        <section
          class="home d-flex flex-column align-items-center justify-content-center"
        >
          <div class="films">
            <div class="texto-portada">
              <img src="~assets/PRF_logo150.svg" alt="perrofeofilms" />
              <h5>presenta</h5>
              <h4>Un viaje al planeta Tipishca</h4>
            </div>
            <ul>
              <li>
                <nuxt-link to="/unadegato/">
                  <b-button>
                    Uña de Gato
                  </b-button>
                </nuxt-link>
              </li>
              <li class="pt-3">
                <nuxt-link to="/tipishca/">
                  <b-button>
                    Tipishca, la tierra sin mal
                  </b-button>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </section>
      </div>
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
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}
.container-index {
  background-image: url("/portadaC.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 100%;
}
.navbar {
  width: 95vw;
}
.navbar span:hover {
  color: white;
}
.navbar a:hover {
  text-decoration: none;
}
/* .navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: black;
  border: 1px solid #ddfe19 !important;
  border-radius: 0.25rem;
  color: #ddfe19;
} */
.navbar-brand img {
  width: 50px;
}
/* a.nav-link {
  background-color: black;
} */
.bg-info {
  background-color: transparent !important;
}
.home {
  /* height: 80%; */
  padding-bottom: 10%;
}
.youtube {
  position: absolute;
  left: 15px;
  top: 120px;
  padding: 0 9px;
  z-index: 3;
}
.youtube img {
  width: 32px;
}
.email {
  position: absolute;
  top: 70px;
  left: 15px;
  padding: 10px 10px;
  z-index: 3;
}
.email img {
  width: 30px;
}
/* .films {
  position: absolute;
  left: 15px;
  top: 175px;
  padding: 0 9px;
  z-index: 3;
} */
/* .films {
  z-index: 3;
}
.films a {
  z-index: 5;
} */
.films .btn-secondary {
  color: black;
  background-color: #ddfe19;
  border-color: black;
  z-index: 2;
  font-size: 1.2rem;
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.films .btn-secondary:active,
.films .btn-secondary:focus {
  color: black;
  background-color: #ddfe19;
  border-color: black;
  z-index: 2;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);
}
.texto-portada {
  max-width: 400px;
  padding-top: 30px;
}
.texto-portada img {
  width: 100%;
}
.texto-portada h5 {
  color: white;
  padding-bottom: 40px;
}
.texto-portada h4 {
  color: #ddfe19;
  background-color: black;
  margin-bottom: 20px;
  font-size: 1.2rem;
}
.texto-portada p {
  padding: 0.7rem;
  background-color: rgba(255, 255, 255, 1);
  color: black;
}
.films ul {
  list-style: none;
  padding-left: 0;
}
.films a {
  color: black;
}
.films a:hover {
  text-decoration: none;
}
.films .btn-secondary:hover {
  background-color: black;
  color: #ddfe19;
}
.footer {
  width: 100%;
  color: rgba(255, 255, 255, 0.5);
  background-color: black;
  padding: 25px 0;
}
.brand-footer img {
  max-width: 150px;
  opacity: 0.5;
}
.footer-menu {
  padding: 20px 0;
}
.footer-menu a {
  padding: 0 15px;
}
.footer a {
  color: rgba(255, 255, 255, 0.5);
}
.social ul {
  margin-bottom: 0;
}
.social img {
  height: 25px;
  margin: 15px;
}
.copyright {
  margin: 20px 0 0;
  font-size: 0.8rem;
}

@media (max-width: 750px) {
  .youtube {
    position: absolute;
    right: 80px;
    left: 0;
    top: 20px;
    padding: 0 9px;
    text-align: right;
  }
  .email {
    position: absolute;
    right: 10px;
    left: 0;
    top: 20px;
    text-align: right;
    padding: 0px 10px;
  }
}
@media (max-width: 750px) and (orientation: landscape) {
  .films {
    bottom: 80px;
  }
}
</style>
