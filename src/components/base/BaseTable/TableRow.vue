<template>
  <div>
    <p>
      <span>{{ rowData.index}}</span>
      <span>{{ rowData.name }}</span>
      <span>{{ rowData.classNum }}</span>
      <span>{{ rowData.address }}</span>
    </p>
  </div>

</template>

<script>
    export default {
        data() {
          return {}
        },
      props: {
        rowData: {
          type: Object,
          default: {}
        }
      }
    }
</script>

<style>

</style>
