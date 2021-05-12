<template>
	<div class="card ">
				<div @click.prevent="comentario()" class="card-header alert-dark cursor" style="background-color: #d2cfcf"><h4>{{anime.nome}}</h4></div>
				
				<div class="card-body">
					<div class="row">
						<div class="col-12 col-sm-6  mb-3">
						
							<dl class="row">	
							<dt class="col-sm-3">Sinopse: </dt> <dd class="col-sm-9 fontTexto">{{anime.conclusao}}</dd>	
							<dt class="col-sm-3">Genero: </dt> <dd class="col-sm-9 fontTexto">{{anime.genero}}</dd>	
							<dt class="col-sm-3">Nota Media:</dt> <dd class="col-sm-9 fontTexto">{{this.media}}</dd>
													
							<dt class="col-sm-3">Add por: </dt> <dd class="col-sm-9 fontTexto">{{anime.autor}}</dd>
							</dl>
							<button  @click.prevent="comentario()" class="btn btn-primary">Comentários</button>
							<button  @click.prevent="notas()" class="btn btn-info">Avalie</button>
						</div>
						<div class="col-12 col-sm-6">
							<div>
								<img class="img-thumbnail" :src="anime.urlImagem"/>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>

<script>
export default {
    props: ['anime'],
	methods: {
	comentario(){
		if(this.$store.state.idUsuario){
            this.$router.push({ name: 'comentario', params: {id: this.anime.id, id2: this.$store.state.idUsuario} }) 
		}else {
			 this.$router.push({ name: 'login'})
		}
	},
	notas(){
		if(this.$store.state.idUsuario){
            this.$router.push({ name: 'notas', params: {id: this.$store.state.idUsuario , id2: this.anime.id} }) 
		}else {
			 this.$router.push({ name: 'login'})
		}
	}
},
mounted () {
        this.$http.get('atributos/' + this.anime.id)
            .then(response => this.media = response.data)
            .catch(erro => console.log(erro))
    
    },
	 data() {
        return {
			media: ''
        }
    }
}
</script>

<style>
.cursor {cursor:pointer;}
</style>