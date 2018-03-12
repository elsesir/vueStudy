<template>
  <div id="app">
      <head-menu></head-menu>
      <router-view></router-view>
  </div>
</template>

<script>
  import SideMenu from './views/SideMenu';
  import HeadMenu from './views/HeadMenu';
export default {
  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  components: {
    SideMenu,
    HeadMenu
  },
  methods: {
    finish() {
      // 等待2秒后进入readme
      setTimeout(function() {
        this.loading = false;
      }, 2000);

    }
  }

}
</script>

<style lang="scss" type="text/css">
  @import "assets/sass/common.scss";
  body {
    margin: 0;
    border-radius: 5px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 85px;
  background-color: $green1;
  height: 500px;
}
</style>
