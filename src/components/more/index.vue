<template>
  <div class="public">
    <div class="more">
        <alley-BScroll>
      <div class="box">
        <v-touch
          class="more_m"
          v-for="(item,index) in moreList"
          :key="index"
          to="/list"
          tag="div"
          @tap="clickToList(item.promotion_id)"
        >
          <div class="more_left">
            <h2>{{item.name}}</h2>
            <div class="d">
              <img src="../../../public/img/go橙@2x.1fbf935.png" alt />
            </div>
          </div>
          <div class="more_right">
            <h2>{{item.title}}</h2>
            <h3>
              <span>活动时间：</span>
              {{item.start}}-{{item.end}}
            </h3>
            <ul>
              <li v-for="(item,index) in item.img_url" :key="index">
                <img :src="item" alt />
              </li>
            </ul>
          </div>
        </v-touch>
      </div>
      </alley-BScroll>
    </div>
  </div>
</template>

<script>
import Footer from "../../common/tabBar/index.vue";
import { shop_more_api } from "../../api/shop.js";
export default {
  name: "More",
  components: {
    Footer
  },
  async created() {
    let moreList = await shop_more_api();
    this.moreList = moreList.data;
    // console.log(this.moreList);
  },
  data() {
    return {
      moreList: []
    };
  },
  methods: {
    clickToList(id) {
      // console.log(id);
      this.$router.push({ name: "list", params: { id } });
    }
  }
};
</script>

<style>
.box {
  height: auto;
}
.public {
  height: 100%;
}
.more {
  width: 100%;
  position: absolute;
  position: relative;
  top: 0rem;
  bottom: 0.45rem;
  height: 93.5%;
  overflow-y: auto;
  background-image: url("../../../public/img/背景装饰@2x.5bbe557.png"),
    linear-gradient(#fd573e, #8d1452);
  background-size: 100% 100%;
}
.more_m {
  cursor: pointer;
  height: 1.64rem;
  width: 3.68rem;
  margin: 0.18rem auto 0;
  display: flex;
  background-image: url("../../../public/img/卡片-橙@2x.54e6a8b.png");
  background-size: 100%;
}
.more_m .more_left {
  height: 1.64rem;
  width: 0.85rem;
  margin-left: 0.08rem;
  text-align: center;
}
.more_m .more_right {
  width: 2.65rem;
  height: 1.64rem;
  text-align: center;
}
.more_m .more_left > h2 {
  font-size: 0.18rem;
  color: #fff;
  margin-top: 0.24rem;
  width: 0.55rem;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
.more_m .more_left .d {
  width: 100%;
  display: flex;
}
.more_m .more_left > .d > img {
  width: 0.62rem;
  height: 0.24rem;
  margin-top: 0.12rem;
  margin-left: 0.1rem;
}
.more_right ul li img {
  width: 0.65rem;
  height: 0.65rem;
  /* display: flex; */
}
.more_right h2 {
  margin-top: 0.22rem;
  color: #ff4d35;
  font-weight: 400;
  font-size: 0.14rem;
  text-align: center;
}
.more_right h3 {
  margin-top: 0.1rem;
  color: #ff4e35;
  font-size: 0.12rem;
}
.more_right ul {
  display: flex;
  margin-top: 0.14rem;
  justify-content: space-around;
}
</style>

