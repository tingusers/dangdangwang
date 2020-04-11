<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.tabBar"/>
    <div>回滚后修改文件</div>
    <div>变更内容</div>
    <div>变更dev内容</div>
    <p>修改文件与其他分支合并</p>
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
