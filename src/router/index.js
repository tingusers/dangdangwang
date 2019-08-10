import Vue from "vue";
import VueRouter from "vue-router"
import buy from "./buy"
import order from "./order"
import home from "./home"
import more from "./more"
import list from "./list"
import shopping from "./shopping"
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        buy,
        order,
        home,
        more,
        list,
        shopping
    ]
})