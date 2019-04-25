<template>
  <nav class="navbar navbar-expand-lg navbar-light align-items-end header">
    <router-link class="navbar-brand" to="/">
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
</template>

<script>
export default {
  name: "Header"
};
</script>