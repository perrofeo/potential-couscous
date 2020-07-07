<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Source Code Pro', monospace;
  background-color: beige;
}
h2 {
  font-size: 1.8rem;
}
.fondo-contact .nav-link {
  color: white !important;
}
.navbar span {
  font-size: 1.2rem;
  color: #ddfe19;
  background-color: rgba(0, 0, 0, 0.7);
}
.navbar span:hover {
  color: white;
}
.boton-shop {
  margin-top: 10px;
}
.boton-shop span {
  background-color: rgba(222, 253, 25, 0.9);
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
}
.navbar a:hover {
  text-decoration: none;
}
.contacto {
  width: 100%;
  padding: 100px 20px 100px;
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
  line-height: 3rem;
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
.social-nav img {
  height: 25px;
  margin: 15px 5px;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
@media (max-width: 750px) {
  h2 {
    font-size: 1.5rem;
  }
  .popover {
    display: none;
  }
}
</style>
