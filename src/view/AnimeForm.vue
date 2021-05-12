<template>
    <div  class="card">
		<div>
			<BarraNavegacao/>
			<div class="row">
				<div class="col">
					<form @submit.prevent="cadastro" class="card-body" name="form">
					
						<div class="input-group col mb-3">
							<div class="input-group-prepend ">
								<span class="input-group-text col" id="basic-addon1">Nome</span>
								</div>
								<input v-model="AnimeForm.nome" type="text" class="form-control col" placeholder="Nome do anime!"  aria-describedby="basic-addon1">
						</div>
						
						<div class="input-group col mb-3">
							<div class="input-group-prepend ">
								<span class="input-group-text col" id="basic-addon1">Imagem</span>
								</div>
								<input v-model="AnimeForm.urlImagem" type="text" class="form-control col" placeholder="Adicione uma imagem do anime!"  aria-describedby="basic-addon1">
						</div>

						<div class="form-group col-5">
							
							<div class="input-group-prepend">
								<label class="input-group-text col-8" for="inputState">Animação</label>
								<select v-model="AnimeForm.animacao" id="inputState" class="custom-select col-4">
								<option select>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
								<option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
								</select>
								</div>
						</div>

						<div class="form-group col-5">
							
							<div class="input-group-prepend">
								<label class="input-group-text col-8" for="inputState">Enredo</label>
								<select v-model="AnimeForm.enredo" id="inputState" class="custom-select col-4">
								<option select>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
								<option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
								</select>
								</div>
						</div>
						
						<div class="form-group col-5">
							
							<div class="input-group-prepend">
								<label class="input-group-text col-8" for="inputState">Personagens</label>
								<select v-model="AnimeForm.personagens" id="inputState" class="custom-select col-4">
								<option select>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
								<option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
								</select>
								</div>
						</div>

						<div class="form-group col-5">
							
							<div class="input-group-prepend">
								<label class="input-group-text col-8" for="inputState">Genero</label>
								<select v-model="AnimeForm.genero" id="inputState" class="custom-select col-7">
								<option select>Shonen</option><option>Seinen</option><option>Shoujo</option>
								</select>
								</div>
						</div>
						
						<div class="form-group col">
							<label for="descricao">Sinopse:</label>
							<textarea v-model="AnimeForm.conclusao" rows="4" cols="50" id="descricao"  class="form-control" placeholder="Adicione seu parecer final sobre o anime!"></textarea>
						</div>

						<button class="btn btn-primary ml-3">Cadastrar</button>

					</form>

				</div>
				
				<div class="col">
					<div>
						<img class="img-thumbnail"
							src="https://cdn.wallpapersafari.com/99/18/DWc1yS.png" />
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>

import BarraNavegacao from '@/components/BarraNavegacao'

export default {
	
    name: 'animeform',

	components: {
          BarraNavegacao
        },

    data: function() {

    return {

      AnimeForm: {
        nome: "",
        urlImagem: "",
        animacao: "1",
        enredo: "1",
        personagens: "1",
        conclusao: "",
		idUsuario: this.$store.state.idUsuario,
		genero: "Shonen"
      },

	  id: this.$route.params.id

    }

  },
    methods: {
        cadastro() {

		if (this.AnimeForm.id){
		this.$http
        .put('animes/listar/' + this.id, this.AnimeForm)
        .then(resposta => {
            console.log(resposta)
            this.$router.push({ name: 'home' })
            })
        .catch(erro => console.log(erro))
		}else{
      this.$http
        .post("animes/cadastrar", this.AnimeForm)
        .then(resposta => {
            console.log(resposta)
            this.$router.push({ name: 'home' })
            })
        .catch(erro => console.log(erro))
    }

	}

    },

	created(){

	if(this.id) {
      this.$http.get('animes/listar/'+ this.id)
			  .then(response => {this.AnimeForm = response.data})
            .catch(erro => console.log(erro))	
    }
  	}
	}
</script>