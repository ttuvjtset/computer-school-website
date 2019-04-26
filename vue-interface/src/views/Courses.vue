<template>
  <div>
    <div class="row zero_side_margin">
      <div class="col-md-12 main_block">
        <h4 class="main_block__page_header">Computer courses</h4>
      </div>
    </div>

    <div class="row zero_side_margin">
      <div class="col-lg-12 main_block">
        <div class="btn-group page_courses__courses_groups d-flex" role="group">
          <FilterButton
            v-for="group in groups"
            :key="group.id"
            :filterCourses="filter_courses"
            :currentFilter="current_filter"
            :groupName="group.name"
            :groupNumber="group.number"
          />
        </div>
      </div>
    </div>

    <div class="row zero_side_margin">
      <div class="col-md-12 main_block">
        <!-- <a class="btn btn-primary" @click="test_function" role="button">Test</a> -->

        <div
          class="card page_courses__course_card border-secondary page_courses__course_card"
          :key="course.id"
          v-for="course in courses_to_view"
        >
          <div class="row zero_side_margin align-items-center">
            <div class="col-md-3 page_courses__course_card_image">
              <img :src="getAssetsPath(course.img_src)" width="200" class="img-fluid" alt>
            </div>
            <div class="col-md-9 page_courses__course_card_info">
              <div class="row zero_side_margin">
                <div class="col-md-12">
                  <h4 class="card-title page_courses__course_card_info_title">{{course.title}}</h4>
                  <p class="card-text">{{course.description}}</p>
                </div>
              </div>
              <div class="row zero_side_margin page_courses__course_card_info_details">
                <div class="col-md-6">
                  <p>
                    <i
                      class="fa fa-calendar fa-fw page_courses__course_card_info_details--separate-item"
                    ></i>
                    {{course.duration}}
                  </p>
                  <p>
                    <i
                      class="fa fa-clock-o fa-fw page_courses__course_card_info_details--separate-item"
                    ></i>
                    {{course.frequency}}
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    <i
                      class="fa fa-user fa-fw page_courses__course_card_info_details--separate-item"
                    ></i>
                    {{course.age}}
                  </p>
                  <p>
                    <i
                      class="fa fa-money fa-fw page_courses__course_card_info_details--separate-item"
                    ></i>
                    {{course.price}}
                  </p>
                </div>
              </div>
              <div class="row zero_side_margin page_courses__course_card_info_register_row">
                <div class="col-md-12 page_courses__course_card_info_register_row_button">
                  <a href="register.html" class="btn btn-primary">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row zero_side_margin page_courses__course_card_contact_us">
          <div class="col page_index__browse_all_button">
            <h5
              class="page_courses__course_card_contact_us--question"
            >Do you have any open question?</h5>
            <a class="btn btn-primary" href="courses.html" role="button">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coursesJson from "../assets/courses.json";
import groupsJson from "../assets/groups.json";
import FilterButton from "@/components/FilterButton.vue";

export default {
  name: "Courses",
  data() {
    return {
      courses_data: coursesJson,
      groups: groupsJson,
      courses_to_view: [],
      current_filter: 0
    };
  },
  components: {
    FilterButton
  },
  methods: {
    getAssetsPath(filename) {
      return require("../assets/" + filename);
    },
    filter_courses(groupNum) {
      this.current_filter = groupNum;
      if (groupNum === 0) {
        this.courses_to_view = this.courses_data;
      } else {
        let filtered_list = [];
        for (let key in this.courses_data) {
          let course = this.courses_data[key];
          if (course.group === groupNum) {
            filtered_list.push(course);
          }
        }
        this.courses_to_view = filtered_list;
      }
    }
  },
  mounted() {
    this.courses_to_view = this.courses_data;
  }
};
</script>
