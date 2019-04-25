<template>
  <div class="row footer zero_side_margin">
    <div class="col-sm-12 col-md-7 col-lg-8">
      <p class="footer__copyright">© The School of Computer Science 2019</p>
      <div>
        <p class="footer__links">
          <router-link to="/">Main page</router-link>
        </p>
        <p class="footer__links">
          <router-link to="/courses">Courses</router-link>
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
</template>

<script>
export default {
  name: "Footer"
};
</script>