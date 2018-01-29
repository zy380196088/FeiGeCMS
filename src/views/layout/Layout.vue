<template>
  <div>
    <!-- <topHeader v-bind:menuData="menuData"></topHeader> -->
    <transition name="fade" mode="out-in">
      <router-view class="container" :key="key"></router-view>
    </transition>
    <!-- <bottomFooter></bottomFooter> -->
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    name: 'AppMian',
    components:{
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>