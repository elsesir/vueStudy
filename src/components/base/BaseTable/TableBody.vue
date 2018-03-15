<template>
<div>
  <div>tableBody</div>
  <!--<table-row v-for="row in tableData" :rowData="row">-->
  <!--</table-row>-->
  <!--<slot name="table-row"></slot>-->
</div>
</template>

<script>
  import TableRow from "./TableRow";
    export default {
      components: {
        TableRow
      },
      data() {
        return {}
      },
      props: {
        tableData: {
          type: Array,
          default: [],
        }
      },
      methods: {

      }
    }
</script>

<style>

</style>
