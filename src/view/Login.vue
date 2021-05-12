<template>
<div>
    <BarraNavegacao/>
    <div class="card-body">
		<h3 class="col">Login:</h3>
		<form @submit.prevent="efetuarLogin" class="col-12">
			<div class="input-group mt-3 mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                </div>
			    <input  type="email" class="form-control" placeholder="email@email.com" aria-label="Username" aria-describedby="basic-addon1" v-model="UsuarioForm.email">
			</div>
				<div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Senha</span>
                    </div>
				    <input type="password" class="form-control" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1" v-model="UsuarioForm.senha">
				</div>
				<button  class="btn btn-primary">Login</button>
		</form>
	</div>		
</div>			
</template>

<script>
import BarraNavegacao from '@/components/BarraNavegacao'
export default {
    name: 'login',
    
    components: {
          BarraNavegacao
        },
    
    data(){
        return{
            UsuarioForm:{}
        }
    },
    methods: {
        efetuarLogin() { 
        this.$store.dispatch('efetuarLogin', this.UsuarioForm)
            .then (() => {this.$router.push({name: 'home'}), window.location.reload()});      
    }
    }
}
</script>