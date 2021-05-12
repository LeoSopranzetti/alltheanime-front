<template>
<div>
     <BarraNavegacao/>
    <div class="card-body">

        <h3 class="col">Cadastro:</h3>

        <form @submit.prevent="enviarFormulario" class="col-12">

            <div class="input-group mt-3 mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Nome</span>
                </div>
                <input v-model="usuarioCad.nome" type="text" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1" required>
            </div>

            <div class="input-group mt-3 mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Cidade</span>
                </div>
                <input  v-model="usuarioCad.cidade" type="text" class="form-control" placeholder="Cidade" aria-label="Username" aria-describedby="basic-addon1" required>
            </div>

            <div class="input-group mt-3 mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Email</span>
                </div>
                <input  v-model="usuarioCad.email" type="email" class="form-control" placeholder="email@email.com" aria-label="Username" aria-describedby="basic-addon1" required>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Senha</span>
                </div>
                <input  v-model="usuarioCad.senha" type="password" class="form-control" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1" required>
            </div>

            <button class="btn btn-primary">Cadastrar</button>

        </form>
    </div>
  </div>
   
</template>

<script>
import BarraNavegacao from '@/components/BarraNavegacao'

export default {
    name: 'cadastro',

    components: {
          BarraNavegacao
        },

    data: function() {

    return {

      usuarioCad: {
        nome: "",
        senha: "",
        cidade: "",
        email: ""
      }
      
    }
  },

  methods: {
    enviarFormulario() {
      this.$http
        .post("usuario/cadastro", this.usuarioCad)
        .then(resposta => {
            console.log(resposta)
            this.$router.push({ name: 'login' })
            })
        .catch(erro => console.log(erro))
    }
  }
}
</script>