<template>
  <div class="page_register">
    <div v-if="no_course_found" class="row zero_side_margin">
      <div class="col-md-12 main_block main_block__error">
        <div class="alert alert-warning" role="alert">
          No such course found. Please find a suitable course on the
          <router-link to="/courses" class="alert-link">courses page</router-link>.
        </div>
      </div>
    </div>

    <template v-if="!no_course_found">
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
              <form @submit.prevent="formSubmit">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputParentFirstName">Parent Name</label>
                    <input
                      v-validate="'required|alpha|min:2'"
                      :class="{ 'is-invalid': submit_clicked && errors.has('inputParentFirstName') }"
                      name="inputParentFirstName"
                      data-vv-as="Parent First Name"
                      type="text"
                      class="form-control"
                      id="inputParentFirstName"
                      placeholder="First Name"
                    >
                    <div
                      v-if="submit_clicked && errors.has('inputParentFirstName')"
                      class="text-danger page_register_block__form--error_message"
                    >{{ errors.first('inputParentFirstName') }}</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      class="page_register_block__form--hidden_label"
                      for="inputParentLastName"
                    >&nbsp;</label>
                    <input
                      v-validate="'required|alpha|min:2'"
                      :class="{ 'is-invalid': submit_clicked && errors.has('inputParentLastName') }"
                      name="inputParentLastName"
                      data-vv-as="Parent Last Name"
                      type="text"
                      class="form-control"
                      id="inputParentLastName"
                      placeholder="Last Name"
                    >
                    <div
                      v-if="submit_clicked && errors.has('inputParentLastName')"
                      class="text-danger page_register_block__form--error_message"
                    >{{ errors.first('inputParentLastName') }}</div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputStudentFirstName">Student Name</label>
                    <input
                      v-validate="'required|alpha|min:2'"
                      :class="{ 'is-invalid': submit_clicked && errors.has('inputStudentFirstName') }"
                      name="inputStudentFirstName"
                      data-vv-as="Student First Name"
                      type="text"
                      class="form-control"
                      id="inputStudentFirstName"
                      placeholder="First Name"
                    >
                    <div
                      v-if="submit_clicked && errors.has('inputStudentFirstName')"
                      class="text-danger page_register_block__form--error_message"
                    >{{ errors.first('inputStudentFirstName') }}</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      class="page_register_block__form--hidden_label"
                      for="inputStudentLastName"
                    >&nbsp;</label>
                    <input
                      v-validate="'required|alpha|min:2'"
                      :class="{ 'is-invalid': submit_clicked && errors.has('inputStudentLastName') }"
                      name="inputStudentLastName"
                      data-vv-as="Student Last Name"
                      type="text"
                      class="form-control"
                      id="inputStudentLastName"
                      placeholder="Last Name"
                    >
                    <div
                      v-if="submit_clicked && errors.has('inputStudentLastName')"
                      class="text-danger page_register_block__form--error_message"
                    >{{ errors.first('inputStudentLastName') }}</div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="telephone">Telephone</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="validationTooltipUsernamePrepend">+372</span>
                    </div>
                    <input
                      v-validate="'required|numeric|min:5'"
                      :class="{ 'is-invalid': submit_clicked && errors.has('telephone') }"
                      name="telephone"
                      data-vv-as="Telephone"
                      type="text"
                      class="form-control"
                      id="telephone"
                      placeholder="Telephone"
                    >
                  </div>
                  <div
                    v-if="submit_clicked && errors.has('telephone')"
                    class="text-danger page_register_block__form--error_message"
                  >{{ errors.first('telephone') }}</div>
                </div>

                <div class="form-group">
                  <label for="telephone">E-mail</label>
                  <input
                    v-validate="'required|email'"
                    :class="{ 'is-invalid': submit_clicked && errors.has('email') }"
                    name="email"
                    data-vv-as="E-mail"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="E-mail"
                  >
                  <div
                    v-if="submit_clicked && errors.has('email')"
                    class="page_register_block__form--error_message text-danger"
                  >{{ errors.first('email') }}</div>
                </div>

                <div class="page_register_block__form_button_row">
                  <button
                    class="btn page_register_block__form_button_row--button btn-primary"
                  >Register</button>
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
    </template>
  </div>
</template>

<script>
import Router from "@/router";

export default {
  name: "Register",
  data() {
    return {
      courses_data: {},
      selected_course: {},
      no_course_found: true,
      submit_clicked: false
    };
  },
  components: {},
  methods: {
    getAssetsPath(filename) {
      if (typeof filename !== "undefined") {
        return require("../assets/" + filename);
      }
    },
    findExactCourse(courseNum) {
      for (let key in this.courses_data) {
        let course = this.courses_data[key];
        if (course.id === parseInt(courseNum)) {
          this.selected_course = course;
          this.no_course_found = false;
          break;
        } else {
          this.no_course_found = true;
        }
      }
    },
    formSubmit() {
      this.submit_clicked = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$router.push("/thankyou");
        }
      });
    },
    fetchCourses() {
      fetch(process.env.VUE_APP_ROOT_API + "courses.json")
        .then(reponse => {
          return reponse.json();
        })
        .then(data => {
          this.courses_data = data;
          this.findExactCourse(this.$route.params.id);
        });
    }
  },
  created() {
    this.fetchCourses();
  }
};
</script>

<style scope>
.main_block__error {
  padding-bottom: 400px;
}
.page_register_block__form--error_message {
  font-size: 13px;
  margin-top: 3px;
}
</style>