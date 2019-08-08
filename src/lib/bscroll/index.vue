<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"pei-BScroll",
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        tap:true,
        pullDownRefresh:true,
        pullUpLoad:true
        })
    },
    methods:{
        // 下拉刷新加载数据
        handlepullingDown(callback){
            this.scroll.on("pullingDown",()=>{
                callback();
            })
        },
        // 下拉刷新家在数据完毕后通知better-scroll可以进行下一次刷新
        handlefinshPullDown(){
            this.scroll.finishPullDown();
            this.scroll.refresh()
        },
        // 上拉加载更多
        handlepullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback()
            })
        },
        handlefinshPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh()
        }
    }
}
</script>
<style>
    .wrapper{
        /* width:100%; */
        height:100%;
    }
</style>
