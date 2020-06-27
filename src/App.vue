<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.tabBar"/>
    <p>123</p>
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
