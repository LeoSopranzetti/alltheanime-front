<template>
    <div >
        <div v-if="usuarioEstaLogado">
            <div>
            <div class="text-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fb/All_the_Anime_logo.png"
                    class="img-200-200" alt="Responsive image">
            </div>
            <div class="d-flex justify-content-end">
                <button @click.prevent="efetuarLogout"  type="button" class="btn btn-danger">Logout</button>
            </div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light "
                    style="background-color: #b5b5b5;">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="collapse navbar-collapse d-flex justify-content-between">
                        <div class="navbar-nav ">
                            <a :active='$route.name =="home"' class="nav-link  mr-3 row nav-font active" @click.prevent="home" href >Home <span class="sr-only">(current)</span></a>
                            <a :active='$route.name =="animeform"' class="nav-link row nav-font" @click.prevent="animeForm"  href >Novo Anime <span class="sr-only">(current)</span></a>
                            <a :active='$route.name =="user"' class="nav-link  ml-3 row nav-font " @click.prevent="homeUser" href >Seus Animes <span class="sr-only">(current)</span></a>
                        </div>

                        <div class="form-inline my-2 my-lg-0">
                                    <input class="form-control sm-2" type="search" v-on:input="filtro = $event.target.value" placeholder="Filtrar por nome" aria-label="Search">                                    
                            </div>
                        </div>                    
                    </div>
                </nav>
            </div>
        </div>

     </div>

        <div v-else>

             <div>
                <div class="text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fb/All_the_Anime_logo.png"
                        class="img-200-200" alt="Responsive image">
                </div>
                <div class="d-flex justify-content-end">
                    <button @click.prevent="efetuarCadastro" type="button"  class="btn btn-info margin-right">Registrar</button>
                    <button @click.prevent="efetuarLogin" type="button"  class="btn btn-success">Login</button>
                </div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light "
                        style="background-color: #b5b5b5;">
                        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                            <div class="navbar-nav ">
                                <a :active='$route.name =="home"' @click.prevent="home"  class="nav-link  mr-3 row nav-font active " href >Home <span class="sr-only">(current)</span></a>
                            </div>
                            <div class="form-inline my-2 my-lg-0">
                                    <input class="form-control sm-2" type="search" v-on:input="filtro = $event.target.value" placeholder="Filtrar por nome" aria-label="Search">
                                    
                                    
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>

        </div>


        <Anime v-for="anime in AnimesComFiltro" :key="anime.id" :anime="anime" :filtro="filtro"/>
        
    </div>					
	
</template>

<script>

import Anime from '@/components/Anime.vue'
import BarraNavegacao from '@/components/BarraNavegacao.vue'

export default {
    name: 'home',
    components: {
        Anime,
        BarraNavegacao
    },
    data() {
        return {
            animes: [],
            filtro: ''
        }
    },
   computed: {
        AnimesComFiltro(){
            if(this.filtro){
               let exp = new RegExp(this.filtro.trim(), 'i');
               return this.animes.filter(anime => exp.test(anime.nome));
            } else{
               return this.animes;
           }
        },
        usuarioEstaLogado(){
    	        if(localStorage.getItem("vuex") == null){
                    return false
                } else{
                return true
                }
        }
    },
    mounted () {
        this.$http.get('animes/listar')
            .then(response => this.animes = response.data)
            .catch(erro => console.log(erro))
    
    },

    methods: {
         efetuarLogout() {
                localStorage.removeItem('vuex');
                this.$router.push({ name: 'login'})
                window.location.reload()
            },
            animeForm() {
                
                this.$router.push({ name: 'animeform'})
                
            },
            homeUser() {
                
                this.$router.push({ name: 'user'})
                
            },
             home() {
                
                this.$router.push({ name: 'home'})
                
            },
             efetuarLogin() {
            this.$router.push({ name: 'login'}) 
        },
            efetuarCadastro() {
                    this.$router.push({ name: 'cadastro'}) 
                }
    }

}
   

</script>


<style scoped>
.nav-font {
	font-family: 'Rubik', sans-serif;
	font-size: 1.5rem;
	color: #000000;
}
</style>