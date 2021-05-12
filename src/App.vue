<template>
<div>
  <div id="app" class="container">
    
    <router-view/>
  </div>
  </div>
</template>

<script>
import BarraNavegacao from '@/components/BarraNavegacao'
    export default {
        components: {
          BarraNavegacao
        }
    }
</script>

<style>
.bg {
background: rgb(137,241,133);
background: linear-gradient(176deg, rgba(137,241,133,1) 11%, rgba(127,255,184,1) 30%, rgba(11,68,41,1) 91%);
}
</style>
