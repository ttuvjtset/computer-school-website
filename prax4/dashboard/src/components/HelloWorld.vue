<template>
  <div class="hello">
    <vue-frappe
      id="students_teachers_count"
      title="Students and teachers count 2010-2019"
      type="line"
      :labels="['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']"
      :height="400"
      :colors="['green', 'blue']"
      :lineOptions="{regionFill: 1}"
      :dataSets="[
        {name: 'Students', values: this.students_count},
        {name: 'Teachers', values: this.teachers_count}
      ]"
    ></vue-frappe>

    <vue-frappe
      id="courses_popularity"
      :labels="[
                'Introduction to C Programming', 
                'Mobile Development on C',
                'Web-design', 
                'Web Design - Advanced',
                'Game developement with Unity Engine'
            ]"
      title="Courses popularity"
      type="bar"
      :height="300"
      :dataSets="this.courses_popularity"
      :colors="['light-blue', 'blue', 'violet', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey']"
    ></vue-frappe>

    <vue-frappe
      id="students_age"
      :labels="[
                '8-9 years', 
                '10-11 years',
                '12-13 years', 
                '14-15 years',
                '16 years'
            ]"
      title="Students Age"
      type="pie"
      :height="300"
      :dataSets="this.students_age"
      :colors="['light-blue', 'blue', 'purple', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey']"
    ></vue-frappe>

    <vue-frappe
      id="students_gender"
      :labels="[
                'Boys', 
                'Girls'
            ]"
      title="Students Gender"
      type="percentage"
      :height="200"
      :dataSets="this.students_gender"
      :colors="['light-green', 'magenta']"
    ></vue-frappe>

    <vue-frappe
      id="my-chart-id"
      title="Acedemic Hours per Month (2019)"
      type="line"
      :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
      :height="400"
      :colors="['red','blue', 'purple','orange']"
      :lineOptions="{hideDots: 1,regionFill: 1}"
      :dataSets="[
        {name: 'All', values: this.course_hours_per_month},
        {name: 'Programming', values: this.programming_hours_per_month},
        {name: 'Web-design', values: this.web_design_hours_per_month},
        {name: 'Game development', values: this.game_development_per_month}
      ]"
    ></vue-frappe>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
          values: [13, 10, 19, 11, 9]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
