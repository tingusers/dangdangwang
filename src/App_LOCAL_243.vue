<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.tabBar"/>
    <div>回滚后修改文件</div>
  </div>
</template>
<script>
import TabBar from 'common/tabBar';
export default {
  name:'App',
  components: {
    TabBar
    }
  }

</script>

<style lang="scss">

</style>
