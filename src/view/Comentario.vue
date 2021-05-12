<template>
    <div>
        <BarraNavegacao/>
        <div class="card ">
                    <div class="card-header alert-dark" style="background-color: #d2cfcf"><h4>{{anime.nome}}</h4></div>
                    
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-sm-6  mb-3">
                            
                             	<dl class="row">	
							<dt class="col-sm-3">Sinopse: </dt> <dd class="col-sm-9 fontTexto">{{anime.conclusao}}</dd>							
							<dt class="col-sm-3">Nota Media:</dt> <dd class="col-sm-9 fontTexto">{{this.media}}</dd>							
							</dl>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div>
                                    <img class="img-thumbnail" :src="anime.urlImagem"/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        <div class="card mt-4">
            <form  @submit.prevent="enviarFormulario" class=" mt-3 mb-3 mr-3 ml-3 col">
                <div class="row">
                    <div class="col-6">
						<div>
							<img class="img-thumbnail"
								src="https://www.revinate.com/wp-content/uploads/pos_reviews_ugfj8h-1140x408.png" />
						</div>
					</div>
                <div class="col-5">
                    <div class="form-group ">
                        <h4 class="mb-3 mt-3 ">Envie seu comentário sobre o anime</h4>
                        <textarea v-model="comentarioDto.valor" class="form-control" id="comentario" rows="3"></textarea>
                    </div>
                    <div class="">
                         <button type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                </div>

                <div v-if="this.suc == 'true'" class="mt-3 alert alert-success alert-dismissible col-6">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Sucesso!</strong> Comentário computado com sucesso.
                </div>

                
                </div>
            </form>
        </div>

        <div class="containner">

            <h4  class="mt-4 mb-4 ml-4">Comentários</h4>
        
            <Comentarios v-for="comentario in comentarios" :key="comentario.id" :nome="comentario.nome" :comentario="comentario"/>
            

        </div>  
    </div>
</template>

<script>
import BarraNavegacao from '@/components/BarraNavegacao'
import Comentarios from '@/components/Comentarios'
export default {
    name: 'comentario',
    components: {
          BarraNavegacao,
          Comentarios
        },
    created(){

        if(this.id) {
        this.$http.get('animes/listar/'+ this.id)
                .then(response => {this.anime = response.data})
                .catch(erro => console.log(erro)) 
                
                this.$http.get('atributos/' + this.id)
            .then(response => this.media = response.data)
            .catch(erro => console.log(erro))
        }
  	},
    data: function() {
        return {
        comentarios: [],
        anime: {
            nome: "",
            urlImagem: "",
            animacao: "",
            enredo: "",
            personagens: "",
            conclusao: "",
            idUsuario: this.$store.state.idUsuario
        },
        comentarioDto: {
            valor: ""
        },
        id: this.$route.params.id,
        suc: "",
        media: ""
        
        }
  },
    methods: {
        enviarFormulario() {
        this.$http
            .post("comentarios/" + this.$store.state.idUsuario + "/" + this.$route.params.id, this.comentarioDto)
            .then(resposta => {
                console.log(resposta)   
                this.suc = 'true'     
                })
            .catch(erro => console.log(erro))
                this.$http.get("comentarios/" + this.$store.state.idUsuario + "/" + this.$route.params.id, this.comentarioDto)
                    .then(response => this.comentarios = response.data)
                    .catch(erro => console.log(erro))
        this.$router.push({ name: 'home'})
        }
        
    },
    mounted () {
        this.$http.get("comentarios/" + this.$store.state.idUsuario + "/" + this.$route.params.id, this.comentarioDto)
            .then(response =>{ this.comentarios = response.data })
            .catch(erro => console.log(erro))
            
            
        
    
    
    } 
    
}
   
</script>