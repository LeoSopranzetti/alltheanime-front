import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home.vue'
import Login from '@/view/Login.vue'
import AnimeForm from '@/view/AnimeForm.vue'
import Cadastro from '@/view/Cadastro.vue'
import HomeUser from '@/view/HomeUser.vue'
import Comentario from '@/view/Comentario.vue'
import Notas from '@/view/Notas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
      meta: { 
        publica:  true
    }

  },

  {
    path: '/animeform',
    name: 'animeform',
    component: AnimeForm,
},
{
  path: '/comentarios/:id2/:id1',
  name: 'comentario',
  component: Comentario,
},
{
  path: '/:id1/:id2',
  name: 'notas',
  component: Notas,
},

{
  path: '/user',
  name: 'user',
  component: HomeUser,
},
{
  path: '/cadastro',
  name: 'cadastro',
  component: Cadastro,
  meta: { 
    publica:  true
}

},
{
  path: '/cadastro/:id',
  name: 'altera',
  component: AnimeForm,
  meta: { 
    publica:  true
}

},

  {
    path: '/login',
    name: 'login',
    component: Login
},

    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { 
        publica:  true
    }

  }
  ]
})
