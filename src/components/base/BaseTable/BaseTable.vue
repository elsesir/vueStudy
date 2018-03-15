<template>
<div>
  <h3>this is BaseTable component</h3>
  <div class="table-header">
    <slot name="tableHeader"></slot>
  </div>
  <div class="table-body">
    <slot name="tableBody"></slot>
  </div>
</div>

</template>

<script>
  export default {
      data() {
        return {}
      },
    props: {
      tableData: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style>

</style>
