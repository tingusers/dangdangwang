export default {
    path:"/buy",
    component:()=>import("components/buy"),
    name:"buy",
    meta:{
        tabBar:true,
        auth:false
    }
}