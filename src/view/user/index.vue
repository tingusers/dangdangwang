<template>
  <div>
    user
    <button @click="handlerBtn">修改数据</button>
    美元转换：<input type="text" v-model="my" @input="changeMy">
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'user',
  data () {
    return {
      my:''
    }
  },
  methods: {
    // 页面中事件修改store中的数据
    ...mapMutations(['uptUserName', 'getMy']),
    handlerBtn () {
      this.uptUserName('需传递的参数')
    },
    changeMy (val) {
      console.log(val.target.value)
      // this.my = val.target.value
      this.getMy(val.target.value)
    }
  },
  components: {

  }
}
</script>

<style>

</style>