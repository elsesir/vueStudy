<template>
<div id="head-menu">
  <span class="menu-item" v-for="item in items" @click="linkTo(item)" :class="{active: item.link === activeItem }">
      {{item.name}}
  </span>
</div>
</template>

<script>
    export default {
      name: 'headMenu',
      data() {
          return {
            activeItem: '/readme',
            router: this.$router,
            items: {
              readMe: {
                name: '关于',
                link:'/readme',
              },
              baseTable: {
                name: 'BaseTable组件',
                link:'/basetable',
              },
              elementTable: {
                name: 'Element 列表',
                link: '/elementTable'
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
  #head-menu {
    position: absolute;
    top: 48px;
    left: 20px;
    z-index: 99;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .menu-item {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    /*background-color: #42b983;*/
    color: #eeeeee;
    text-align: start;
    text-indent: 20px;
    font-weight: 400;
    width: 150px;

    &:nth-of-type(1) {
      left: 0;
    }
    &:nth-of-type(2) {
       left: 140px;
     }
  &:nth-of-type(3) {
     left: 280px;
   }
     &:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        outline: 1px solid transparent;
        border-radius: 10px 10px 0 0;
        background: #2CC185;
        box-shadow: inset 0 -3px 3px rgba(0,0,0,0.05);
        content: '';
        -webkit-transform: perspective(5px) rotateX(0.93deg) translateZ(-1px);
        /* transform: perspective(5px) rotateX(0.93deg) translateZ(-1px); */
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      &:hover {
       cursor: pointer;
       color: #2c3e50;
       }
  }
  .active {
    color: #2CC185;
    &:hover {
       color: #2CC185;
     }
    &:after {
        background: aliceblue;
        box-shadow: none;
      }
  }

</style>
