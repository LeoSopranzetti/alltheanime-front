<template>
    <div class="nav-font">
       <BarraNavegacaoLogado v-if="usuarioEstaLogado"/>
       <BarraNavegacaoDeslogado v-else/>
    </div>


</template>

<script>
import BarraNavegacaoLogado from './BarraNavegacaoLogado'
import BarraNavegacaoDeslogado from './BarraNavegacaoDeslogado'

export default {

    components: {
        BarraNavegacaoLogado,
        BarraNavegacaoDeslogado
    },


    
         computed: {
          usuarioEstaLogado(){
    	        if(localStorage.getItem("vuex") == null){
                    return false
                } else{
                return true
                }
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