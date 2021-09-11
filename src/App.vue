<template>
  <div id="app">
    <router-view></router-view>
    <!-- <TabBar v-if="$route.meta.tabBar"/>
    <p>123</p>
    <label for="">abc</label> -->
    <label for="">{{num}}---{{rmb}}</label>
  </div>
</template>
<script>
import TabBar from 'common/tabBar';
import { mapState, mapGetters } from 'vuex';
export default {
  name:'App',
  components: {
    TabBar
    },
  data () {
    return{
    }
  },
  computed: {
    // 获取store中的数据
    ...mapState(['num', 'my']),
    ...mapGetters(['rmb'])
  }
  }

</script>

<style lang="scss">

</style>
