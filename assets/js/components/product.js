Vue.component('product', {
    data: function () {
        return {
            screens:[]
              
        }
    },

    props: {
       
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        }
    },

    created() {
        let self = this;

        // Get all screens calling function in controller (Ajax call)
        axios({
            method: 'GET',
            url: '?page=home&function=getdata',
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function(response) {
            self.screens = response.data.screens;
        }).catch(function(response) {

        })
    },
    
    template:`
    
    <div class=container>
        <div class="row">
            <div class="col-md-6 col-lg-4 p-3" v-for="screen in screens">
                <a style= "color:black" href="?page=alu-click">    
                    <div class="card" style="width 25rem">
                        <img class="card-img-top" :src="'assets/images/' + screen.path" class="img-responsive" alt="services-1">
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

