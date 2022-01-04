Vue.component('product', {
    data: function () {
        return {
            screen_data : screens,  
        }
    },

    props: {
       
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        }
    },
    
    template:`
    
    <div class=container>
        <div class="row">
            <div class="col-md-6 col-lg-4 p-3" v-for="screen in screen_data">
                <a style= "color:black" href="?page=alu-click">    
                    <div class="card" style="width 25rem">
                        <img class="card-img-top" :src="imagePath + screen.path" class="img-responsive" alt="services-1">
                        <div class="card-body">
                            <h5 class="card-title">{{screen.title}}</h5>
                            <p class="card-text" class="textBlock">
                                <ul v-html="screen.info">
                                    {{screen.info}}
                                </ul>
                            </p>

                        </div>
                    </div>
                </a>     
            </div>
        </div>                    
    </div>
            
                `
})
Vue.config.devtools = true
Vue.config.productionTip = false