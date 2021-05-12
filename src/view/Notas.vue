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

                                <h4 class="mb-4">Faça sua avaliação</h4>

                                <form @submit.prevent="enviar">
                                    <div class="input-group-prepend mb-2">
                                        <label class="input-group-text col-3" for="inputState"><h6>Animação</h6></label>
                                        <select  v-model="notas.animacao"  id="inputState" class="custom-select col-2" >
                                            <option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                                            <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
                                        </select>
                                    </div>
                                    <div class="input-group-prepend mb-2">
                                        <label class="input-group-text col-3" for="inputState"><h6>Enredo</h6></label>
                                        <select  v-model="notas.enredo"  id="inputState" class="form-control col-2">
                                            <option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                                            <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
                                        </select>
                                    </div>
                                    <div class="input-group-prepend">
                                        <label class="input-group-text col-3" for="inputState"><h6>Personagens</h6></label>
                                        <select v-model="notas.personagens"  id="inputState" class="form-control col-2">
                                            <option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                                            <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
                                        </select>
                                    </div>
                                    <button class="btn btn-primary  mt-3">Avaliar</button>
                                </form>

                            </div>
                            <div class="col-12 col-sm-6">
                                <div>
                                    <img class="img-thumbnail" :src="anime.urlImagem"/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
       
       
    </div>
</template>

<script>
import BarraNavegacao from '@/components/BarraNavegacao'

export default {
    name: 'notas',
    components: {
          BarraNavegacao
         
          
        },
    created(){     
        this.$http.get('animes/listar/'+ this.$route.params.id2)
                .then(response => {this.anime = response.data})
                .catch(erro => console.log(erro)) 

                this.$http.get('atributos/' + this.$route.params.id2)
            .then(response => this.media = response.data)
            .catch(erro => console.log(erro))
        
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
        notas: {
            animacao: "1",
            enredo: "1",
            personagens: "1"
        },
        media: "",
        
        }
  }  ,
  methods: {
      enviar(){
        this.$http
        .post("atributos/" + this.$store.state.idUsuario + "/" + this.anime.id , this.notas)
        .then(resposta => {
            console.log(resposta)
            this.$router.push({ name: 'home' })
            })
        .catch(erro => console.log(erro))
      }

  }  
}
   
</script>