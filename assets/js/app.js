let app = new Vue({
    el: '#app',

    data: {
        appName: 'Horren en Raamedecoratie',
        products: [],
        buttons: [],
        cart:[],
        navbar:[],
        showHeader: true,
    },

    mounted() {
        this.$on('add-to-cart', (id) => {
            this.products.push(id)
        })
    },

    methods:{
    
    updateCart(id) {
        this.shoppingCart.push(id);

        this.$refs.cartComponent.updateShoppingCart('testje');
    },

    showCart() {
        $('.layer').fadeIn();

        $('.cart').toggle({
            direction: 'right',
        });
    },

    fadeOutShoppingCart() {
        this.$refs.cartComponent.closeShoppingCart();
    },

    landingPage() {

    }
}
})

Vue.config.devtools = true
Vue.config.productionTip = false