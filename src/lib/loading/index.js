import Loading from './index.vue'
import Vue from "vue"
export default ()=>{
    // extend用来创建、注册一个组件的   生成的组件可以在页面任何位置进行使用
    let LoadingComponent=Vue.extend(Loading);
    let vm=new LoadingComponent({

        // 创建以个挂载点
        el:document.createElement("div"),
        data:{
            flag:false
        },
        methods:{
            handlemount(){
                // 挂载
                this.flag = true;
                // document.body.appendChild(vm.$mount().$el)
            },
            handlerDestory(){
                // 卸载
                this.flag = false;
                // document.body.removeChild(vm.$mount().$el)
            }
        }
    })
    document.body.appendChild(vm.$mount().$el)
    return vm
}