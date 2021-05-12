import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'


Vue.use(Vuex)

const estado = {
    token: null,
    idUsuario: ''
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, idUsuario }){
        state.idUsuario = idUsuario;
        state.token = token;
    },
    DESLOGAR_USUARIO(state){
        state.token = null
        state.idUsuario = ''
    }
}

const actions = {
    efetuarLogin ({ commit }, UsuarioForm) {
        return new Promise( (resolve, reject) => {
            http.post('auth', UsuarioForm)
            .then(response => {
                commit('DEFINIR_USUARIO_LOGADO', {
                    token: response.data.token,
                    idUsuario: response.data.idUsuario
                })
                resolve(response.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }
}

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: estado,
    mutations, 
    actions
})