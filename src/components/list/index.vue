<template>
<div class="box1">
<alley-BScroll ref='alleyscroll'>
<div class="public">
<!-- 顶部 -->
    <div class="list">
        <ul>
            <li>
                 <img src="../../../public/img/touch-icon-iphone.png" alt="">
            </li>
            <li>
               <h3>下载当当购物App</h3>
            </li>
            <li>
                <h4>在App中打开本页</h4>
            </li>
        </ul>
    </div>
<!-- 搜索框 -->
    <div class="search">
        <router-link to='/more'>
            <img src="../../../public/img/back.png" alt="">
        </router-link>
        <input type="text" name="" id="" value="搜索促销商品" v-model='searchVal'>
    </div>
    <!-- 活动时间 -->
    <div class="act">
        <p>买3件7折</p>
        <div class="aci">
            <img src="../../../public/img/clock2.png" alt="">
            <span>活动时间：2019.08.01 00:01-2019.08.05 23:59</span>
        </div>
    </div>
    <div class="select">
        <ul class="select_1">
            <li>默认</li>
            <li>销售</li>
            <li>价格</li>
            <li>人气</li>
            <li>好评</li>
            <li>最新</li>
            <li>最新</li>
        </ul>
        <ul class='select_2'>
            <li>分类</li>
            <li>品牌</li>
            <li>当当自营</li>
            <li>仅看有货</li>
            <li>筛选</li>
        </ul>
    </div>
    <!-- 详情 -->
    <div class="item">
        <v-touch class='items' v-for='(item,index) in listList' :key='index' @tap='clickToShopping(item.id,item.image_url,item.abstract)' tag='div'>
            <img :src="item.image_url" alt="">
            <ul>
                <li>
                    <p class="name">{{item.name}}</p>
                    <p class="author">{{item.authorname}}</p>
                    <span>当当自营</span>
                    <i class="i1">￥{{item.price}}</i>
                    <del>{{item.original_price}}</del>
                    <i class="i2">{{item.discount/10}}折</i>
                    <i class="i3">电子书版￥{{item.ebook_dd_price}}</i>
                    <em>100.0%好评({{item.total_review_count}}人)</em>
                </li>
            </ul>
        </v-touch>
        <div>
            <a-back-top />
    <strong style="color: rgba(64, 64, 64, 0.6)"></strong>
        </div>
    </div>
</div>
</alley-BScroll>
</div>
</template>
<script>
import {shop_list_api,shop_search_api} from '../../api/shop.js';
import {mapState} from 'vuex';
export default {
    name:'List',
    props: ['id'],
    data(){
        return{
            listList:[],
            searchVal:'',
            // searchList:[]
        }
    },
    computed: {
        ...mapState({
            collection_promo_id:state=>state.collection_promo_id
        })
    },
    async created(){
        // if(!sessionStorage.getItem('listList')){
            let listList=await shop_list_api(this.id);
            this.listList=listList.products;
            // console.log(this.listList)
            // sessionStorage.setItem('listList',JSON.stringify(listList.products));
        // }
    },
    watch: {
         async searchVal(newVal,oldVal){
            console.log(newVal);
            let listList=await shop_search_api(this.collection_promo_id,newVal);
            this.listList = listList?listList.products:[]
        }
    },
    methods:{
        clickToShopping(id,img,abstract){
            this.$router.push({name:'shopping',params:{id,img,abstract}})
        }
    },
    mounted () {
        //下拉刷新
       this.$refs.alleyscroll.handlepullingDown(async()=>{
        let n=parseInt(Math.random()*8);
        let arr=[6283262,6284872,6284932,6286429,6286405,6282341,6282960,6282665]
        let listList=await shop_list_api(arr[n]);
        this.listList=listList.products;
        sessionStorage.setItem('listList',JSON.stringify(listList.products));
        //下拉数据更新通知better-scroll
        this.$refs.alleyscroll.handlefinishPullDown();
       });
       //上拉加载更多
       this.$refs.alleyscroll.handlepullingUp(async()=>{
            let n=parseInt(Math.random()*8);
            let arr=[6283262,6284872,6284932,6286429,6286405,6282341,6282960,6282665]
            let listList=await shop_list_api(arr[n]);
            this.listList=[...this.listList,...listList.products];//数据拼接
            sessionStorage.setItem('listList',JSON.stringify(listList.products));
            //下拉数据更新通知better-scroll
            this.$refs.alleyscroll.handlefinishPullUp();
       })
    }
}
</script>

<style>
    .box1{
        height:100%;
    }
    .list{
        width:100%;
        height:0.74rem;
        background:black;
        /* position:relative; */
        display: flex;
    }
    .list>ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content:space-around;
        align-items: center;
    }
    .list>ul>li>img{
        width:0.4rem;
        height:0.4rem;
    }
    .list>ul>li>h3{
        color:#fff;
        text-align: center;
        line-height:0.34rem;
        width:1.38rem;
        height:0.34rem;
        font-size:0.14rem;
        border:1px solid white;
        background-color:transparent;
        border-radius:0.02rem;
    }
    .list>ul>li>h4{
        background-color: white;
        text-align: center;
        line-height:0.34rem;
        width:1.38rem;
        height:0.34rem;
        font-size:0.14rem;
        border-radius:0.02rem;
    }
    .search{
        height:0.54rem;
        width:100%;
        display: flex;
        align-items: center;
    }
    .search>img{
        height:0.2rem;
        padding-left:0.08rem;
    }
    .search>input{
        height:0.4rem;
        line-height:0.4rem;
        width:80%;
        border-radius:0.4rem;
        background:url('../../../public/img/magnifier.png') #eee 0.25rem center no-repeat;
        background-size:0.14rem;
        padding:0 0.6rem;
        color: #4d5159;
        margin-left:0.35rem;
        border: 0 none;
    }
    .act{
        height:0.55rem;
        width:100%;
        background:url('../../../public/img/promotion_bg.png') no-repeat;;
        background-size: 100% 100%;
        color: #fff;
        padding: 0.05rem 0.2rem;
    }
    .act .aci{
        margin-top:0.05rem;
        font-size:0.1rem;
    }
    .act .aci>img{
        width:0.1rem;
        height:0.1rem;
        margin-right:0.05rem;
        margin-top:0.05rem;
    }
    .select{
        height:0.88rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .select>.select_1{
        display: flex;
        width:100%;
        height:0.43rem;
        justify-content:space-around;
    }
    .select>.select_1>li{
        height:0.43rem;
        display: flex;
        width:0.53rem;
        align-items:center;
        justify-content: center;
        color: #555a65;
    }
    .select>.select_1>li:nth-child(6){
        border-right:1px solid #ccc;
    }
    .select>.select_2{
        border-top:1px solid #dcdcdc;
        border-bottom:1px solid #dcdcdc;
        display: flex;
        width:100%;
        height:0.4rem;
        align-items:center;
        justify-content:space-around;
    }
    .select>.select_2>li{
        width:0.67rem;
        height:0.25rem;
        text-align: center;
        line-height:0.25rem;
        border:1px solid #ccc;
        border-radius:0.025rem;
        background:#dcdcdc;
    }

    /* 详情 */
    .item{
        width:100%;
        position:relative;
        top:0rem;
        bottom:0rem;
        background: pink;
        overflow-y:auto;
    }
    .items{
        height:1.75rem;
        width:100%;
        background:#fff;
        padding:0.11rem 0.12rem 0.11rem 0;
        border-bottom: 1px solid #e4e4e4;
        display: flex;
    }
    .items>img{
        height:1.2rem;
        width:1.2rem;
    }
    .items>ul{
        height:100%;
        width:2.34rem;
        display: flex;
        background:url('../../../public/img/cart.png') no-repeat;
        background-size:0.25rem 0.25rem;
        background-position:2.05rem 1.24rem;
    }
    .items>ul>li> .name{
        width:100%;
        height:0.38rem;
        text-overflow:ellipsis;
        color:#232323;
        font-size:0.14rem;
        display: flex;
        overflow: hidden;
    }
    .items>ul>li> .author{
        color:#999;
        width:100%;
        height:0.16rem;
        font-size:0.12rem;
        display: flex;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top:0.05rem;
    }
    .items>ul>li>span{
        height:0.18rem;
        width:0.54rem;
        display: block;
        font-size:0.12rem;
        color:#f2303c;
        border:1px solid #f2303c;
        border-radius:0.02rem;
        margin:0.1rem 0 0.1rem 0.05rem;
    }
    .items>ul>li> .i1{
        height:0.16rem;
        display:inline-block;
        color: #ff463c;
        font-size:0.18rem;
        line-height:0.16rem;
    }
    .items>ul>li>del{
        color: #a1a1a1;
        font-size:0.14rem;
        padding-left:0.15rem;
    }
    .items>ul>li> .i2{
        color:#a1a1a1;
        font-size:0.14rem;
        display:inline-block;
        padding-left:0.1rem;
        padding-right:0.05rem;
    }
    .items>ul>li> .i3{
        height:0.12rem;
        line-height: 0.12rem;
        width:100%;
        display:inline-block;
        font-size: 0.12rem;
        background: url('../../../public/img/ebook_lable.png') 0.05rem center no-repeat;
        background-size:0.09rem;
        /* margin-top:0.08rem; */
        padding-left:0.2rem;
        color: #ff6d34;
    }
    .items>ul>li>em{
        height:0.16rem;
        width:100%;
        display: block;
        font-size:0.12rem;
        color: #999;
    }
</style>


