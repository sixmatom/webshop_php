Vue.component('buttonstyle', {
    
        
    
    data: function () {
        return {
            colors: [],
            
        }
         
    },
    
    props: {
        
    },
    
    methods: {
            

        
            calcTextColor(hexcolor){
            hexcolor = hexcolor.replace("#", "");
            var r = parseInt(hexcolor.substr(0,2),16);
            var g = parseInt(hexcolor.substr(2,2),16);
            var b = parseInt(hexcolor.substr(4,2),16);
            var yiq = ((r*299)+(g*587)+(b*114))/1000;
            return (yiq >= 128) ? 'black' : 'white';
        },
          
            addToCart(color) {
                
    
                this.$root.$emit('add-to-cart', color);
            },
        },
        
    
        created() {
            let self = this;
    
            // Get all colors calling function in controller (Ajax call)
            axios({
                method: 'GET',
                url: '?page=alu-click&function=getcolordata',
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function(response) {
                self.colors = response.data.colors;
            }).catch(function(response) {
    
            })
        },
        
        
    
    
    template:`
    <div class="btn-group">    
        <div v-for="color in colors">
            <button :style="{'background-color': color.bGC, 'color': calcTextColor(color.bGC)}" @click="addToCart()" > {{color.name}} 
            </button>
        </div>
    </div>`, 
      
})
