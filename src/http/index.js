import axios from 'axios'
import provedor from '@/provedor'

const http = axios.create({
    baseURL: 'https://alltheanime.herokuapp.com/',
    headers: {
        'Accept': 'application/json', 
        'Content': 'application/json'
    }
});

http.interceptors.request.use(function(config){
    
    var token = JSON.parse(localStorage.getItem('vuex'));
    if (token){
        config.headers.Authorization = `Bearer ${token.token}`
    }
    return config
}, function(erro){
    return Promise.reject(erro)
})

export default http;