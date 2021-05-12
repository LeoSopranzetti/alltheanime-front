<template>               
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="">
                            <h5 class="ml-3">{{comentario.nome}}</h5>
                            <p class="ml-3 mt-3">
                                {{comentario.valor}}
                            </p>
                        </div>
                        
                    </div>
                    
                </div>                                
</template>

<script>
    export default {
    props: ['comentario'],

    mounted(){
        
    }
}

</script>

<style scoped>

</style>