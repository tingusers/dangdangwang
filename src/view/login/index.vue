<template>
  <div>
login
<div>这个是登录页面</div>
请输入密码：<input type="text" name="" id="" v-model="num">
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      userName: '' // 用户名
    }
  },
  methods: {

  },
  components: {
    // 获取store中的数据
  },
  created () {
  }
}
</script>

<style>

</style>