import Vue from 'vue'
import Router from 'vue-router'
import llbgoumai from '../components/llb/Goumai'
import llbgoufenlei from '../public/llb/Goufenlie'
import llbsou from '../public/llb/Sousuo'
import llbxinpin from '../components/llb/Xinpin'
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/llbgoumai',component:llbgoumai},
    {path:'/llbgoufenlei',component:llbgoufenlei},
    {path:'/llbsou',component:llbsou},
    {path:'/llbxinpin',component:llbxinpin}
  ]
})
