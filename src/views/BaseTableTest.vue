<template>
<div class="page">
  <h3>BaseTable</h3>
  <base-table>
    <table-header slot="tableHeader"></table-header>
    <table-body slot="tableBody"></table-body>
  </base-table>
</div>

</template>

<script>
  import BaseTable from '../components/base/BaseTable/BaseTable';
  import TableHeader from '../components/base/BaseTable/TableHeader';
  import TableBody from '../components/base/BaseTable/TableBody';
    export default {
      name: 'BaseTableTest',
      data() {
        return {}
      },
      components: {
        BaseTable,
        TableHeader,
        TableBody
      }
    }
</script>

<style lang="scss" type="text/css" scoped>
</style>
