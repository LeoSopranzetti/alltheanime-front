<template>
     <div>
        <div class="text-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/All_the_Anime_logo.png"
                class="img-200-200" alt="Responsive image">
        </div>
        <div class="d-flex justify-content-end">
		    <button @click.prevent="efetuarLogout"  type="button" class="btn btn-danger">Logout</button>
		</div>
		<div>
			<nav class="navbar navbar-expand-lg navbar-light "
				style="background-color: #b5b5b5;">
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav ">
						<a :active='$route.name =="home"' class="nav-link  mr-3 row nav-font " @click.prevent="home" href >Home <span class="sr-only">(current)</span></a>
						<a :active='$route.name =="animeform"' class="nav-link row nav-font" @click.prevent="animeForm"  href >Novo Anime <span class="sr-only">(current)</span></a>
						<a :active='$route.name =="user"' class="nav-link  ml-3 row nav-font " @click.prevent="homeUser" href >Seus Animes <span class="sr-only">(current)</span></a>
					</div>
					
				</div>
			</nav>
		</div>
    </div>
</template>

<script>
export default {
    
     methods: {
         efetuarLogout() {
                localStorage.removeItem('vuex');
                this.$router.push({ name: 'login'})
                window.location.reload()
            },
            animeForm() {
                
                this.$router.push({ name: 'animeform'})
                
            },
            homeUser() {
                
                this.$router.push({ name: 'user'})
                
            },
             home() {
                
                this.$router.push({ name: 'home'})
                
            }
    }
}

</script>