<template>
<div class="page">
  <h3>Element Table</h3>
  <template>
    <el-table :data="tableData2" :row-class-name="tableRowClassName"
              border
              max-height="400"
              style="width: 100%">
      <el-table-column fixed type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="100"></el-table-column>
      <el-table-column prop="classNum" label="班级" width="100"></el-table-column>
      <el-table-column prop="address" label="地址" width="250"></el-table-column>
    </el-table>
  </template>
</div>
</template>

<script>
    export default {
        name: 'ElementTable',
      methods: {
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        }
      },
        data() {
            return {
              tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                age: '12',
                classNum: '0611班'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                age: '12',
                classNum: '0611班'
              }]
            }
        },
      computed: {
        tableData2: function() {
          let tableData = [];
          for (let i=0;i<300;i++) {
            tableData.push({
              date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                age: '12',
                classNum: '0611班'
            });
          }
          return tableData;
        },
      }



    }
</script>

<style lang="scss" type="text/css">
  .el-table .warning-row {
    background: lightcoral;
  }

  .el-table .success-row {
    background: lightgreen;
  }
</style>
