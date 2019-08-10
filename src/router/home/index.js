export default {
    path:"/",
    component:()=>import("components/home"),
    name:"home",
    meta:{
        tabBar:true,
        auth:false
    }
}