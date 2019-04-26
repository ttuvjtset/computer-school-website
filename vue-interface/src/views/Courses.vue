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
            :group="group"
            :filterCoursesFunc="filter_courses"
            :currentFilter="current_filter"
          />
        </div>
      </div>
    </div>

    <div class="row zero_side_margin">
      <div class="col-md-12 main_block">
        <!-- <a class="btn btn-primary" @click="test_function" role="button">Test</a> -->

        <CourseCard
          :key="course.id"
          v-for="course in courses_to_view"
          :course="course"
          :imageSrc="getAssetsPath(course.img_src)"
        />

        <div class="row zero_side_margin page_courses__course_card_contact_us">
          <div class="col page_index__browse_all_button">
            <h5
              class="page_courses__course_card_contact_us--question"
            >Do you have any open question?</h5>
            <a class="btn btn-primary" href="#" role="button">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterButton from "@/components/FilterButton.vue";
import CourseCard from "@/components/CourseCard.vue";

export default {
  name: "Courses",
  data() {
    return {
      courses_data: {},
      groups: {},
      courses_to_view: [],
      current_filter: 0
    };
  },
  components: {
    FilterButton,
    CourseCard
  },
  methods: {
    getAssetsPath(filename) {
      if (typeof filename !== "undefined") {
        return require("../assets/" + filename);
      }
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
    },
    fetchCourses() {
      fetch(process.env.VUE_APP_ROOT_API + "courses.json")
        .then(reponse => {
          return reponse.json();
        })
        .then(data => {
          this.courses_to_view = data;
          this.courses_data = data;
        });
    },
    fetchGroups() {
      fetch(process.env.VUE_APP_ROOT_API + "groups.json")
        .then(reponse => {
          return reponse.json();
        })
        .then(data => {
          this.groups = data;
        });
    }
  },
  mounted() {
    this.fetchCourses();
    this.fetchGroups();
  }
};
</script>
