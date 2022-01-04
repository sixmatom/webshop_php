Vue.component('buttonstyle', {
    data: function () {
        return {
            color_data: colors,
        }
         
    },

    props: {
        
        
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        },
        calcTextColor(hexcolor){
            hexcolor = hexcolor.replace("#", "");
            var r = parseInt(hexcolor.substr(0,2),16);
            var g = parseInt(hexcolor.substr(2,2),16);
            var b = parseInt(hexcolor.substr(4,2),16);
            var yiq = ((r*299)+(g*587)+(b*114))/1000;
            return (yiq >= 128) ? 'black' : 'white';
        
          
        },
       
        
        },
    
    
    template:`
    <div class="btn-group">    
        <div v-for="color in color_data">
            <button :style="{'background-color': color.bGC, 'color': calcTextColor(color.bGC)}" @click="addToCart(color.id)" > {{color.name}} 
            </button>
        </div>
    </div>   
    ` 
    
})
Vue.config.devtools = true
Vue.config.productionTip = false