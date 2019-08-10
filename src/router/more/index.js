export default {
    path:"/more/",
    component:()=>import("components/more"),
    name:"more",
    meta:{
        tabBar:true,
        auth:false
    },
    props:true
}