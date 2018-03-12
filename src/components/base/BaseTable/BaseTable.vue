<template>
<div>
  <h3>this is BaseTable component</h3>
  <div class="table-header">
    <slot name="tableHeader"></slot>
  </div>
  <div class="table-body">
    <slot name="tableRow"></slot>
  </div>
</div>

</template>

<script>
  export default {
      data() {
        return {}
      }
  }
</script>

<style>

</style>
