<template>
	<div class="card ">
				<div class="card-header alert-dark" style="background-color: #d2cfcf"><h4>{{anime.nome}}</h4></div>
				
				<div class="card-body">
					<div class="row">
						<div class="col-12 col-sm-6  mb-3">
							<h4 class="mb-4">Suas notas</h4>
							<dl class="row">		
							<dt class="col-sm-3">Animação:</dt> <dd class="col-sm-9 fontTexto">{{anime.animacao}}</dd>				
							<dt class="col-sm-3">Enredo:</dt> <dd class="col-sm-9 fontTexto"> {{anime.enredo}}</dd>						
							<dt class="col-sm-3">Personagens: </dt> <dd class="col-sm-9 fontTexto">{{anime.personagens}}</dd>
							<dt class="col-sm-3">Sinopse: </dt> <dd class="col-sm-9 fontTexto">{{anime.conclusao}}</dd>
							<dt class="col-sm-3">Genero: </dt> <dd class="col-sm-9 fontTexto">{{anime.genero}}</dd>	
							<dt class="col-sm-3">Autor: </dt> <dd class="col-sm-9 fontTexto">{{anime.autor}}</dd>
							</dl>
                            <button  @click.prevent="altera()" class="btn btn-info">Alterar</button>
                            <button  @click.prevent="deletar()" class="btn btn-danger">Deletar</button>
                            
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
    props: ['anime', 'index', 'animes'],
    methods: {
        deletar(){
           this.$http
        .delete("animes/" + this.anime.id)
        .then(resposta => {
            console.log(resposta)
            console.log(this.index)
            this.animes.splice(this.index, 1);
            })
        .catch(erro => console.log(erro)) 
        },
        altera(){
            this.$router.push({ name: 'altera', params: {id: this.anime.id} }) 
        }
}
}
</script>