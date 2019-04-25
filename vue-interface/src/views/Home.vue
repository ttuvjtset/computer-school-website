<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <div>
    <div class="row lead_block align-items-end">
      <div class="col">
        <div class="row lead_block__text align-items-center pt-3 pb-3 pl-3">
          <div class="col-md-8 col-lg-9">
            <h1 class="display-4 lead_block__text--big_size">
              Learn computer disciplines apart from at
              school
            </h1>
            <ul class="list-unstyled">
              <li>
                We offer for children 8-16 years:
                <ul>
                  <li>Programming languages</li>
                  <li>Web-design</li>
                  <li>Game development and Virtual Reality</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-lg-3 lead_block__button">
            <p>
              <a class="btn btn-primary" href="courses.html" role="button">Browse all courses</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- QUICK FACTS -->
    <div class="row zero_side_margin">
      <div class="col page_index">
        <div class="row zero_side_margin">
          <div class="offset-md-4 page_index__headline">
            <h2
              class="page_index__headline--big_colored_text"
            >Quick facts about our computer school:</h2>
          </div>
        </div>
        <div class="row page_index__facts_element align-items-center zero_side_margin">
          <div class="col-md-4 page_index__facts_element_image">
            <img src="../assets/003-outer-space.svg" width="190" alt="Quick Facts">
          </div>
          <div class="col-md-8 page_index__facts_element_text">
            <ul class="list-unstyled">
              <li>
                <ul>
                  <li>
                    <p>We have been established in the year 2010</p>
                  </li>
                  <li>
                    <p>Two computer classes in a newly renovated building in the center of Tallinn</p>
                  </li>
                  <li>
                    <p>Teachers with years of experience in IT and work with children</p>
                  </li>
                  <li>
                    <p>
                      We are using only the latest technologies and Hi-Tech devices including VR
                      equipment
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="row zero_side_margin">
          <div class="offset-md-4 page_index__headline">
            <h2 class="page_index__headline--big_colored_text">We have been awarded:</h2>
          </div>
        </div>
        <div class="row align-items-center page_index__facts_element zero_side_margin">
          <div class="col-md-4 page_index__facts_element_image">
            <img src="../assets/microsoft-award.png" width="190" alt="Quick Facts">
          </div>
          <div class="col-md-8 page_index__facts_element_text">
            <p>
              We are the first computer school in Tallinn which has been certified by Microsoft in 2018
              for providing the world-class programming courses in C#.
            </p>
          </div>
        </div>

        <div class="row zero_side_margin">
          <div class="col page_index__browse_all_button">
            <a class="btn btn-primary" href="courses.html" role="button">Browse all courses</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>
.lead_block {
  background-image: url("../assets/children-593313_1920.jpg");
}
</style>
