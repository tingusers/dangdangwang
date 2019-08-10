export default {
    path:"/shopping/:id/:img",
    component:()=>import("components/shopping"),
    name:"shopping",
    meta:{
        tabBar:false,
        auth:false
    },
    props:true//路由解耦
}