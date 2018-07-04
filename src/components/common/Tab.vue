<template>
  <div class="tab-wrap">
    <ul class="tab-link" v-for = "item in tabData" :key = "item.index">
      <li @click ="tabsSwitch(index)" v-bind:class="{active:item.isOn}">{{item.name}}</li>
    </ul>
    <div class="tab-content"></div>
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    data() {
      return {
        tabOption: {
          openSearch: true,
          openSelecte: true,
        },
        tabData: [{
            index: 0,
            name: '部门管理',
            isOn: true
          }, {
            index: 1,
            name: '网评员管理',
            isOn: false
          },
          {
            index: 2,
            name: '网评员管理',
            isOn: false
          }
        ]

      }
    },
    props: {},
    methods: {
      tabSwitch(tabIndex) {
        //Tab切换

      }
    }

  }

</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  $font-size=14px;
  $activeColor=$green;
  $font-color=#666;
  $border-color=#f1f1f1;
  ol,
  ul,
  li {
    list-style: none;
  }

</style>
