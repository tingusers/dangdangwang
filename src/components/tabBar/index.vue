<template>
    <div class="foot">
        <router-link
        :to='item.path'
        tag='div'
        :class="activeinfo===index ?'footcent active':'footcent'" v-for="(item,index) in msg" :key="index"
        @click="handlerfooter(index)">
            <span :class="item.icon"></span>
            <div>{{item.name}}</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"Footer",
    data(){
        return{
            msg:[
                {name:"首页",icon:"iconfont icon-shouye",path:'/home'},
                {name:"分类",icon:"iconfont icon-fenlei",path:'/order'},
                {name:"值得买",icon:"iconfont icon-Bag",path:'/buy'},
                {name:"购物车",icon:"iconfont icon-gouwuche",path:'/gwc'},
                {name:"我的当当",icon:"iconfont icon-weibiaoti2fuzhi12",path:'/mine'}

            ],
            activeinfo:0,
        }
    },
    methods:{
        handlerfooter(index){
                this.activeinfo=index;
        }
    }
}
</script>

<style>
    .foot{
        width: 100%;
        position: absolute;
        bottom:0;
        height: 0.45rem;
        border-top:1px solid #ccc;
        display: flex;
        justify-content: space-around;
    }
    .footcent{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:0.12rem;
    }
    .footcent>span{
        font-size:0.22rem
    }
    .router-link-active{
        color:#ff0030
    }
</style>
