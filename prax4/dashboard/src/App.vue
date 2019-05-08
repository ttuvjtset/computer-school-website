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
          <KPICard :kpi="kpi"/>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6 pr-0">
          <div class="card">
            <div class="card-header">{{this.dashboard.courses_popularity_title}}</div>
            <div class="card-body p-0">
              <vue-frappe
                v-if="loaded"
                id="courses_popularity"
                :labels="this.dashboard.courses_popularity_labels"
                type="bar"
                :height="300"
                :valuesOverPoints="true"
                :dataSets="this.dashboard.courses_popularity"
                :colors="this.dashboard.courses_popularity_colors"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-6 pr-0">
          <div class="card">
            <div class="card-header">{{this.dashboard.programing_hours_title}}</div>
            <div class="card-body p-0">
              <vue-frappe
                v-if="loaded"
                id="academic_hours"
                type="bar"
                :labels="this.dashboard.programming_hours_labels"
                :height="300"
                :colors="this.dashboard.programming_hours_colors"
                :lineOptions="{hideDots: 1, regionFill: 1}"
                :barOptions="{stacked: 1, spaceRatio: 0.6}"
                :valuesOverPoints="true"
                :dataSets="this.dashboard.programming_hours"
              ></vue-frappe>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-5 mb-5 pr-0">
          <div class="card">
            <div class="card-header">{{this.dashboard.number_of_people_title}}</div>
            <div class="card-body p-0">
              <vue-frappe
                v-if="loaded"
                id="students_teachers_count"
                type="line"
                :labels="this.dashboard.number_of_people_labels"
                :height="300"
                :colors="this.dashboard.number_of_people_colors"
                :lineOptions="{regionFill: 1}"
                :valuesOverPoints="true"
                :dataSets="this.dashboard.number_of_people"
              ></vue-frappe>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card pb-5">
            <div class="card-header">{{this.dashboard.students_age_title}}</div>
            <div class="card-body p-0">
              <vue-frappe
                v-if="loaded"
                id="students_age"
                :labels="this.dashboard.students_age_labels"
                type="pie"
                :height="250"
                :dataSets="this.dashboard.students_age"
                :colors="this.dashboard.students_age_colors"
              ></vue-frappe>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-0">
          <div class="card">
            <div class="card-header">{{this.dashboard.students_gender_title}}</div>
            <div class="card-body">
              <vue-frappe
                v-if="loaded"
                id="students_gender"
                :labels="this.dashboard.students_gender_labels"
                type="percentage"
                :height="250"
                :dataSets="this.dashboard.students_gender"
                :colors="this.dashboard.students_gender_colors"
                :barOptions="{height: 27}"
              ></vue-frappe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KPICard from "./components/KPICard.vue";

export default {
  name: "app",
  components: {
    KPICard
  },
  data() {
    return {
      dashboard: {},
      kpis: [],
      loaded: false
    };
  },
  methods: {
    fetchDashboard() {
      fetch(process.env.VUE_APP_ROOT_API + "dashboard.json")
        .then(reponse => {
          return reponse.json();
        })
        .then(data => {
          this.dashboard = data;
          this.loaded = true;
        });
    },
    fetchKPIs() {
      fetch(process.env.VUE_APP_ROOT_API + "kpis.json")
        .then(reponse => {
          return reponse.json();
        })
        .then(data => {
          this.kpis = data;
        });
    }
  },
  mounted() {
    this.fetchDashboard();
    this.fetchKPIs();
  }
};
</script>