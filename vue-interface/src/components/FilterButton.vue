<template>
  <router-link
    to="/courses"
    v-on:click.native="filterCourses(group.number)"
    class="btn btn-outline-primary w-100"
    :class="{ 'active' : currentFilter === group.number }"
  >{{group.name}}</router-link>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
    group: Object,
    currentFilter: Number,
    filterCoursesFunc: Function
  }
};
</script>