<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light align-items-end header">
        <router-link class="navbar-brand" to="/">
        <!-- <a class="navbar-brand" href="index.html"> -->
          <div class="row align-items-center">
            <div class="col-4">
              <img src="@/assets/logo.svg" class="d-inline-block align-top" alt>
            </div>
            <div class="col-2 header__logo">
              <div class="header__logo--top_row">THE SCHOOL OF</div>
              <div class="header__logo--bottom_row">COMPUTER SCIENCE</div>
            </div>
          </div>
          </router-link>
        <!-- </a> -->

        <button
          class="navbar-toggler align-items-center"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav header__menu ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/courses">Courses</router-link>
              <!-- <a class="nav-link" href="courses.html">Courses</a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Our team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <router-view/>

      <!-- FOOTER -->
      <div class="row footer zero_side_margin">
        <div class="col-sm-12 col-md-7 col-lg-8">
          <p class="footer__copyright">© The School of Computer Science 2019</p>
          <div>
            <p class="footer__links">
              <a href="index.html">Main page</a>
            </p>
            <p class="footer__links">
              <a href="courses.html">Courses</a>
            </p>
            <p class="footer__links">
              <a href="#">Our team</a>
            </p>
            <p class="footer__links">
              <a href="#">Contact</a>
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-5 col-lg-4 footer__eu_funds">
          <p class="footer__eu_funds_header">We are supported by:</p>
          <img
            width="250"
            alt="European Funds"
            class="footer__eu_funds_logo"
            src="@/assets/eu-dev-fund.png"
          >
        </div>
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
  </div>
</template>

<style>

</style>
