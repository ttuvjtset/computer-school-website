<template>
  <div class="card mx-auto text-center bg-light" style="max-width: 14rem;">
    <div class="card-body pt-2 pb-0 pl-0 pr-0">
      <p class="card-text mb-1">{{this.kpi.name}}</p>
      <h5 class="card-title">{{this.kpi.value}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "KPICard",

  props: {
    kpi: Object
  }
};
</script>