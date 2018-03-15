<template>
<div class="page">
  <h3>BaseTable</h3>
  <base-table>
    <table-header slot="tableHeader"></table-header>
    <table-body slot="tableBody" :tableData="tableData">
    </table-body>
  </base-table>
</div>

</template>

<script>
  import BaseTable from '../components/base/BaseTable/BaseTable';
  import TableHeader from '../components/base/BaseTable/TableHeader';
  import TableBody from '../components/base/BaseTable/TableBody';
  import TABLEBASE from '../components/base/BaseTable/tableClass';

    export default {
      name: 'BaseTableTest',
      data() {
        return {
        }
      },
      components: {
        BaseTable,
        TableHeader,
        TableBody
      },
      computed: {
        tableData: function() {
          let data = [];
          for(let i=0;i<10;i++) {
            data.push({
              index: i,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              age: '12',
              classNum: '0611班'
            });
          }
          return data;
        }
      },
      created() {
        let table = new TABLEBASE('登记表',1);
        console.log(table);
      }
    }
</script>

<style lang="scss" type="text/css" scoped>
</style>
