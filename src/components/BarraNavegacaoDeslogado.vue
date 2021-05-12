<template>
    
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
                            <button class="btn btn-info my-2 my-sm-0" type="submit">Procurar</button>
                            
                    </div>
					
				</div>
			</nav>
		</div>
    </div>

</template>

<script>
export default {
    props:['filtro'],
     methods: {
         efetuarLogin() {
            this.$router.push({ name: 'login'}) 
        },
	efetuarCadastro() {
            this.$router.push({ name: 'cadastro'}) 
        },
        home() {
                
                this.$router.push({ name: 'home'})
                
            }
    },
    data: function() {
        return {
        
        }
    }
    }

   
	
	

</script>