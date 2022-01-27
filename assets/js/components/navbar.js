Vue.component("tom-nav-bar",{
    data: function () {
        return {
            
        }
    },

    props: {

    },
    

    methods:{
        
            addToCart(id) {
                this.$root.$emit('add-to-cart', id)
            }
        

    },

    template:`
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid ">
        <a class="navbar-brand" href="?page=home">Horren en raamdecoratie </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="?page=home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Raamdecoratie</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="?page=horren">Horren</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Prijzen</a>
                </li>
                
                <li class="nav-item">
                <a class="nav-link" href="?page=register">register</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="?page=login">login</a>
                </li>

            </ul>
            
        </div>
    </div>
    <button class="btn btn-sm btn-outline-secondary" type="button">basket</button>
</nav>
    
                `
})
