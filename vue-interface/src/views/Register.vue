<template>
  <div class="page_register">
    <div class="row zero_side_margin">
      <div class="col-md-12 main_block">
        <h4 class="main_block__page_header">Register for the course</h4>
      </div>
    </div>

    <div class="row page_register_block zero_side_margin align-items-center">
      <div class="col-md-8 main_block">
        <div class="row page_register_block__course align-items-center">
          <div class="col-md-4 page_register_block__course--text col-lg-3">Selected Course</div>
          <div class="col-md-8 col-lg-9">
            <img
              :src="getAssetsPath(selected_course.img_src)"
              width="45"
              class="img page_register_block__course--image"
              alt
            >
            {{selected_course.title}}
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-12">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputParentFirstName">Parent Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputParentFirstName"
                    placeholder="First Name"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label
                    class="page_register_block__form--hidden_label"
                    for="inputParentLastName"
                  >&nbsp;</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputParentLastName"
                    placeholder="Last Name"
                  >
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputStudentFirstName">Student Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputStudentFirstName"
                    placeholder="First Name"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label
                    class="page_register_block__form--hidden_label"
                    for="inputStudentLastName"
                  >&nbsp;</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputStudentLastName"
                    placeholder="Last Name"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="telephone">Telephone</label>
                <input type="text" class="form-control" id="telephone" placeholder="Telephone">
              </div>

              <div class="form-group">
                <label for="telephone">E-mail</label>
                <input type="text" class="form-control" id="email" placeholder="E-mail">
              </div>

              <div class="page_register_block__form_button_row">
                <router-link
                  class="btn page_register_block__form_button_row--button btn-primary"
                  to="/thankyou"
                  role="button"
                >Register</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4 page_register_block__image main_block">
        <img
          :src="getAssetsPath('002-immersive.svg')"
          class="img-fluid page_register_block__image--smaller"
          alt
        >
      </div>
    </div>
  </div>
</template>

<script>
import coursesJson from "@/assets/courses.json";

export default {
  name: "Register",
  data() {
    return {
      courses_data: coursesJson,
      selected_course: {}
    };
  },
  components: {},
  methods: {
    getAssetsPath(filename) {
      return require("../assets/" + filename);
    },
    findExactCourse(courseNum) {
      for (let key in this.courses_data) {
        let course = this.courses_data[key];
        if (course.id === parseInt(courseNum)) {
          this.selected_course = course;
        }
      }
    }
  },
  created() {
    this.findExactCourse(this.$route.params.id);
  }
};
</script>