<template>
  <div>
    <div class="nav_bar--color">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light pl-0 pr-0">
          <div class="navbar-brand" href="#">
            <i class="fa fa-line-chart"></i>
            Computer School Dashboard
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link nav_bar__btn--hand_cursor"
                  href="http://dijkstra.cs.ttu.ee/~vjtset/kasutajaliidesed/prax3/"
                >
                  Log out
                  <i class="fa fa-sign-out"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-3">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text">Total courses</p>
              <h5 class="card-title">5</h5>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text">Total students</p>
              <h5 class="card-title">62</h5>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text">New registrations</p>
              <h5 class="card-title">4</h5>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text">Total teachers</p>
              <h5 class="card-title">7</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Courses popularity</div>
            <div class="card-body p-0">
              <vue-frappe
                id="courses_popularity"
                :labels="[
                'Introduction to C# Programming', 
                'Mobile Development on C#',
                'Web-design', 
                'Web Design - Advanced',
                'Game developement with Unity Engine'
            ]"
                type="bar"
                :height="300"
                :dataSets="this.courses_popularity"
                :colors="['light-blue', 'blue', 'violet', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey']"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Academic hours per month (2019)</div>
            <div class="card-body p-0">
              <vue-frappe
                id="academic_hours"
                type="line"
                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                :height="300"
                :colors="['red','blue', 'purple','orange']"
                :lineOptions="{hideDots: 1,regionFill: 1}"
                :dataSets="[
        {name: 'All', values: this.course_hours_per_month},
        {name: 'Programming', values: this.programming_hours_per_month},
        {name: 'Web-design', values: this.web_design_hours_per_month},
        {name: 'Game develop.', values: this.game_development_per_month}
      ]"
              ></vue-frappe>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6 mb-5">
          <div class="card">
                        <div class="card-header">Number of students and teachers 2010-2019</div>

            <div class="card-body p-0">
              <vue-frappe
                id="students_teachers_count"
                title="Students and teachers count 2010-2019"
                type="line"
                :labels="['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']"
                :height="330"
                :colors="['green', 'blue']"
                :lineOptions="{regionFill: 1}"
                :dataSets="[
        {name: 'Students', values: this.students_count},
        {name: 'Teachers', values: this.teachers_count}
      ]"
              ></vue-frappe>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card pb-5">
                        <div class="card-header">Students Age</div>

            <div class="card-body">
              <vue-frappe
                id="students_age"
                :labels="[
                '8-9 years', 
                '10-11 years',
                '12-13 years', 
                '14-16 years'
            ]"
                type="pie"
                :height="250"
                :dataSets="this.students_age"
                :colors="['light-blue', 'blue', 'purple', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey']"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
                        <div class="card-header">Students Gender</div>

            <div class="card-body">
              <vue-frappe
                id="students_gender"
                :labels="[
                'Boys', 
                'Girls'
            ]"
                type="percentage"
                :height="200"
                :dataSets="this.students_gender"
                :colors="['light-green', 'magenta']"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      courses_popularity: [
        {
          values: [10, 5, 15, 11, 9]
        }
      ],
      students_age: [
        {
          name: "Some Data",
          chartType: "pie",
          values: [14, 13, 21, 13]
        }
      ],
      students_gender: [
        {
          values: [43, 19]
        }
      ],
      students_count: [15, 20, 25, 30, 40, 50, 65, 62, 55, 70],
      teachers_count: [1, 2, 3, 3, 4, 4, 5, 4, 5, 7],
      course_hours_per_month: [100, 120, 90, 140, 111],
      programming_hours_per_month: [30, 40, 35, 25, 40],
      web_design_hours_per_month: [20, 25, 17, 50, 22],
      game_development_per_month: [50, 55, 38, 65, 49]
    };
  }
};
</script>

