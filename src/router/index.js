import Vue from 'vue'
import Router from 'vue-router'
import llbgoumai from '../components/Goumai'
import llbgoufenlei from '../public/Goufenlie'
import llbsou from '../public/Sousuo'
import llbxinpin from '../components/Xinpin'
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/llbgoumai',component:llbgoumai},
    {path:'/llbgoufenlei',component:llbgoufenlei},
    {path:'/llbsou',component:llbsou},
    {path:'/llbxinpin',component:llbxinpin}
  ]
})
