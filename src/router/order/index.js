export default {
    path:"/order",
    component:()=>import("components/order"),
    name:"order",
    meta:{
        tabBar:true,
        auth:false
    }
}