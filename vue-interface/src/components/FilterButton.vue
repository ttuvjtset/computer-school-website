<template>
  <router-link
    to="/courses"
    v-on:click.native="filterCourses(groupNumber)"
    class="btn btn-outline-primary w-100"
    :class="{ 'active' : currentFilter === groupNumber }"
  >{{groupName}}</router-link>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
    groupName: String,
    groupNumber: Number,
    currentFilter: Number,
    filterCourses: Function
  }
};
</script>