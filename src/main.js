//默认初始化样式
import "normalize.css";

//导入与Vue相关得第三方包
import Vue from 'vue';
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//启动路由插件
Vue.use(VueRouter);
Vue.use(ElementUI);

//导入自己写的东西
import App from './component/App.vue';

//导入路由配置
import routerConfig from './router/index.js';


//3 导入axios，因为他不是vue插件，使用起来不方便，所以我们手动把它加到原型中，方便使用
import axios from 'axios';
axios.defaults.baseURL = 'http://157.122.54.189:9095'
//配置hi后，以后所有的请求就会自动使用这个域名
Vue.prototype.$http = axios;

//导入api配置对象，为了使用方便更加方便，把他也加到原型里面
import api from './js/api-config.js';
Vue.prototype.$api = api;
// console.log(Vue.prototype.$api);
//把跟组件渲染到指定视图
new Vue({
    el: "#app",
    render: function(createElement){
        return createElement(App);
    },
    // 创建路由
    router: new VueRouter(routerConfig)

});