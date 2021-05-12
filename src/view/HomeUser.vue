<template>
    <div >
        <BarraNavegacao/>
        <AnimeUser v-for="(anime, index) in animes" :key="anime.id" :anime="anime" :index="index" :animes="animes"/>
    </div>					
	
</template>

<script>

import Anime from '@/components/Anime.vue'
import AnimeUser from '@/components/AnimeUser.vue'
import BarraNavegacao from '@/components/BarraNavegacao'


export default {
    name: 'user',
    components: {
        Anime,
        AnimeUser,
        BarraNavegacao
    },
    data() {
        return {
            animes: [],
            UsuarioForm: {
                idUsuario: this.$store.state.idUsuario
            }
        }
    },
    mounted () {
        this.idUsuario = this.$store.state.idUsuario
        this.$http.post('animes/listar', this.UsuarioForm)
            .then(response => this.animes = response.data)
            .catch(erro => console.log(erro))
    
    }
   
}
</script>


<style scoped>

</style>