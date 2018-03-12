<template>
<div id="side-menu">
  <img class="icon" src="../assets/logo.png">
  <div class="item" v-for="item in items" @click="linkTo(item)" :class="{active: item.link === activeItem }" >
    <div class="itemName">
      {{item.name}}
    </div>
  </div>

</div>
</template>

<script>
    export default {
      name: 'SideMenu',
      data(){
        return {
          activeItem: '/readme',
          router: this.$router,
          items: {
            readMe: {
              name: '关于',
              link:'/readme',
              logo: null,
            },
            baseTable: {
              name: 'BaseTable组件',
              link:'/basetable',
              logo: null,
            }
          }
        }
      },
      methods: {
        linkTo(item) {
          const link = item.link;
          this.$router.push(link);
          this.activeItem = link;
        }
      }
    }
</script>

<style lang="scss" type="text/css" scoped>

  #side-menu {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #2c3e50;
  }
  .icon {
    width: 50px;
    height: 50px;
  }
  .item {
    background-color: #42b983;
    padding: 10px;
    margin-bottom: 1px;
  }
  .item:hover {
    background-color: aliceblue;
  }
  .active {
    background-color: aliceblue;
  }


</style>
