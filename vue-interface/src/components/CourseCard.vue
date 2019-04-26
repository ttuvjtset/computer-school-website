<template>
  <div
    class="card page_courses__course_card border-secondary page_courses__course_card"
  >
    <div class="row zero_side_margin align-items-center">
      <div class="col-md-3 page_courses__course_card_image">
        <img :src="imageSrc" width="200" class="img-fluid" alt>
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
              <i class="fa fa-calendar fa-fw page_courses__course_card_info_details--separate-item"></i>
              {{course.duration}}
            </p>
            <p>
              <i class="fa fa-clock-o fa-fw page_courses__course_card_info_details--separate-item"></i>
              {{course.frequency}}
            </p>
          </div>
          <div class="col-md-6">
            <p>
              <i class="fa fa-user fa-fw page_courses__course_card_info_details--separate-item"></i>
              {{course.age}}
            </p>
            <p>
              <i class="fa fa-money fa-fw page_courses__course_card_info_details--separate-item"></i>
              {{course.price}}
            </p>
          </div>
        </div>
        <div class="row zero_side_margin page_courses__course_card_info_register_row">
          <div class="col-md-12 page_courses__course_card_info_register_row_button">
            <router-link 
            :to="{ path: '/register/'+ course.id}"
            class="btn btn-primary">Register</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    course: Object,
    imageSrc: String
  }
};
</script>
