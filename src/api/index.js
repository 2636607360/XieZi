import axios from 'axios'
//axios是封装的promise实例



// 数据相应的拦截
axios.interceptors.response.use((res)=>{
    return res.data;
})

export let getBanner = function () {
    return axios.get('../../static/mock/llb/banner.json')
}
