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
        <div v-for="kpi in kpis" :key="kpi.id" class="col pr-0">
          <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
            <div class="card-body pt-2 pb-0 pl-0 pr-0">
              <p class="card-text mb-1">{{kpi.name}}</p>
              <h5 class="card-title">{{kpi.value}}</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6 pr-0">
          <div class="card">
            <div class="card-header">this.courses_popularity_title</div>
            <div class="card-body p-0">
              <vue-frappe
                id="courses_popularity"
                :labels="this.courses_popularity_labels"
                type="bar"
                :height="300"
                :valuesOverPoints="1"
                :dataSets="this.courses_popularity"
                :colors="this.courses_popularity_colors"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-6 pr-0">
          <div class="card">
            <div class="card-header">this.programing_hours_title</div>
            <div class="card-body p-0">
              <vue-frappe
                id="academic_hours"
                type="bar"
                :labels="this.programming_hours_labels"
                :height="300"
                :colors="this.programming_hours_colors"
                :lineOptions="{hideDots: 1, regionFill: 1}"
                :barOptions="{stacked: 1, spaceRatio: 0.6}"
                :valuesOverPoints="1"
                :dataSets="this.programming_hours"
              ></vue-frappe>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-5 mb-5 pr-0">
          <div class="card">
            <div class="card-header">this.number_of_people_title</div>

            <div class="card-body p-0">
              <vue-frappe
                id="students_teachers_count"
                type="line"
                :labels="this.number_of_people_labels"
                :height="300"
                :colors="this.number_of_people_colors"
                :lineOptions="{regionFill: 1}"
                :valuesOverPoints="1"
                :dataSets="this.number_of_people"
              ></vue-frappe>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card pb-5">
            <div class="card-header">this.students_age_title</div>
            <div class="card-body p-0">
              <vue-frappe
                id="students_age"
                :labels="this.students_age_labels"
                type="pie"
                :height="250"
                :dataSets="this.students_age"
                :colors="this.students_age_colors"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-0">
          <div class="card">
            <div class="card-header">this.students_gender_title</div>
            <div class="card-body">
              <vue-frappe
                id="students_gender"
                :labels="this.students_gender_labels"
                type="percentage"
                :height="250"
                :dataSets="this.students_gender"
                :colors="this.students_gender_colors"
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
      kpis: [
        {
          id: 0,
          name: "Total courses",
          value: "5"
        },
        {
          id: 1,
          name: "Total students",
          value: "62"
        },
        {
          id: 2,
          name: "New registrations",
          value: "4"
        },
        {
          id: 3,
          name: "Total teachers",
          value: "7"
        },
        {
          id: 4,
          name: "Course attendance",
          value: "89.4%"
        }
      ],
      courses_popularity_title:
        "Number of students attending courses (2018-2019)",
      courses_popularity: [
        { name: "2017", values: [9, 6, 8, 0, 17] },
        { name: "2018", values: [7, 9, 11, 0, 20] },
        { name: "2019", values: [10, 5, 15, 11, 9] }
      ],
      courses_popularity_labels: [
        "Introduction to C# Programming",
        "Mobile Development on C#",
        "Web-design",
        "Web-design advanced",
        "Game developement with Unity Engine"
      ],
      courses_popularity_colors: ["light-blue", "blue", "orange"],

      programing_hours_title: "Academic hours per month (2019)",
      programming_hours: [
        { name: "Programming", values: [30, 40, 35, 25, 40] },
        { name: "Web-design", values: [20, 25, 17, 50, 22] },
        { name: "Game develop.", values: [50, 55, 38, 65, 49] }
      ],
      programming_hours_labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      programming_hours_colors: ["red", "blue", "light-green"],

      number_of_people_title: "Number of students and teachers (2010-2019)",
      number_of_people_labels: [
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019"
      ],
      number_of_people_colors: ["green", "blue"],
      number_of_people: [
        { name: "Students", values: [15, 20, 25, 30, 40, 50, 65, 62, 55, 70] },
        { name: "Teachers", values: [1, 2, 3, 3, 4, 4, 5, 4, 5, 7] }
      ],

      students_age_title: "Students age",
      students_age_labels: ["8-9 y.", "10-11 y.", "12-13 y.", "14-16 y."],
      students_age_colors: ["light-blue", "blue", "purple", "red", "orange"],
      students_age: [
        {
          values: [14, 13, 21, 13]
        }
      ],

      students_gender_title: "Students gender",
      students_gender_labels: ["Boys", "Girls"],
      students_gender_colors: ["light-green", "magenta"],

      students_gender: [
        {
          values: [43, 19]
        }
      ]
    };
  }
};
</script>

