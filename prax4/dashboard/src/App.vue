<template>
  <div>
    <div class="nav_bar--color">
      <div class="container pr-0">
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

    <div class="container">
      <div class="row mt-3">
        <div class="col pr-0">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text mb-1">Total courses</p>
              <h5 class="card-title">5</h5>
            </div>
          </div>
        </div>
        <div class="col pr-0">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text mb-1">Total students</p>
              <h5 class="card-title">62</h5>
            </div>
          </div>
        </div>
        <div class="col pr-0">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text mb-1">New registrations</p>
              <h5 class="card-title">4</h5>
            </div>
          </div>
        </div>
        <div class="col pr-0">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text mb-1">Total teachers</p>
              <h5 class="card-title">7</h5>
            </div>
          </div>
        </div>
        <div class="col pr-0">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text mb-1">Course attendance</p>
              <h5 class="card-title">89.4%</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6 pr-0">
          <div class="card">
            <div class="card-header">Number of students attending courses (2018-2019)</div>
            <div class="card-body p-0">
              <vue-frappe
                id="courses_popularity"
                :labels="['Introduction to C# Programming', 'Mobile Development on C#', 'Web-design', 'Web-design advanced','Game developement with Unity Engine']"
                type="bar"
                :height="300"
                :valuesOverPoints="1"
                :dataSets="[
                {name: '2017', values: this.courses_popularity_2017},
                {name: '2018', values: this.courses_popularity_2018},
                {name: '2019', values: this.courses_popularity_2019}
                ]"
                :colors="['light-blue', 'blue', 'orange', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey']"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-6 pr-0">
          <div class="card">
            <div class="card-header">Academic hours per month (2019)</div>
            <div class="card-body p-0">
              <vue-frappe
                id="academic_hours"
                type="bar"
                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                :height="300"
                :colors="['red', 'blue', 'light-green', 'orange']"
                :lineOptions="{hideDots: 1, regionFill: 1}"
                :barOptions="{stacked: 1, spaceRatio: 0.6}"
                :valuesOverPoints="1"
                :dataSets="[
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
        <div class="col-md-5 mb-5 pr-0">
          <div class="card">
            <div class="card-header">Number of students and teachers (2010-2019)</div>

            <div class="card-body p-0">
              <vue-frappe
                id="students_teachers_count"
                type="line"
                :labels="['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']"
                :height="300"
                :colors="['green', 'blue']"
                :lineOptions="{regionFill: 1}"
                :valuesOverPoints="1"
                :dataSets="[
                {name: 'Students', values: this.students_count},
                {name: 'Teachers', values: this.teachers_count}
                ]"
              ></vue-frappe>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card pb-5">
            <div class="card-header">Students age</div>

            <div class="card-body p-0">
              <vue-frappe
                id="students_age"
                :labels="['8-9 y.', '10-11 y.', '12-13 y.', '14-16 y.']"
                type="pie"
                :height="250"
                :dataSets="this.students_age"
                :colors="['light-blue', 'blue', 'purple', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey']"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-0">
          <div class="card">
            <div class="card-header">Students gender</div>

            <div class="card-body">
              <vue-frappe
                id="students_gender"
                :labels="['Boys','Girls']"
                type="percentage"
                :height="250"
                :dataSets="this.students_gender"
                :colors="['light-green', 'magenta']"
                :barOptions="{height: 27}"
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
      courses_popularity_2017: [9, 6, 8, 0, 17],
      courses_popularity_2018: [7, 9, 11, 0, 20],
      courses_popularity_2019: [10, 5, 15, 11, 9],
      students_age: [
        {
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
      programming_hours_per_month: [30, 40, 35, 25, 40],
      web_design_hours_per_month: [20, 25, 17, 50, 22],
      game_development_per_month: [50, 55, 38, 65, 49]
    };
  }
};
</script>

