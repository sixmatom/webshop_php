let app = new Vue({
    el: '#app',

    data: {
        appName: 'Horren en Raamedecoratie',      
    },

    mounted() {
        // Add a 'listner'
        this.$on('add-to-cart', (color) => {
            this.addToCart(color)
        });
    },

    methods: {
        /**
         * Adds a new color to the cart or changes the amount of an 
         *  existing color in the cart
         * 
         * @param color (object)
         * @returns void
         */
        addToCart(color) {
            // Check if localStorage key 'cart' is allready initialized
            // if not, then create localStorage entry and add first color
            // Finaly update the cart in the shopping-cart component
            if (window.localStorage.getItem('cart') === null) {
                this.$refs.shoppingCart.cart = this.initCart(color);
                window.localStorage.setItem('cart', JSON.stringify(this.$refs.shoppingCart.cart));

                return;
            }

            // Update cart
            this.updateCart(color);
        },

        /**
         * Initialize a new shopping cart
         * 
         * @param color (object)
         * @returns void
         */
        initCart(color) {
            return {
                totalItems: 1,
                totalPrice: parseFloat(color.price),
                items: [
                    this.addNewcolorToCart(color),
                ]
            }
        },

        /**
         * Update the entire shopping cart and calculate totals
         * 
         * @param color (object)
         */
        updateCart(color) {
            // Get and parse the cart from localStorage
            let cart = JSON.parse(window.localStorage.getItem('cart'));
            let itemIndex = false;

            // Check if the color to add to the cart allready exist in the cart
            cart.items.forEach(function(item, index) {
                if (item.id === color.id) {
                    itemIndex = index; // color found in cart
                }
            });

            // If color was found in the cart
            //  itemIndex is the index in the array of the colors in the cart
            //  and then update the ammount and totalPrice of this color
            if (itemIndex !== false) {
                cart.items[itemIndex].amount++;
                cart.items[itemIndex].totalPrice = cart.items[itemIndex].amount * cart.items[itemIndex].price;
            } else {
                // color not found, so add it to the cart
                cart.items.push(this.addNewcolorToCart(color));
            }

            // Finaly update the 'super totals': total colors in cart
            //  and totalPrice of all the colors in the cart
            let totals = this.updateTotals(cart);

            // Update the cart
            cart.totalItems = totals.totalItems;
            cart.totalPrice = totals.totalPrice;

            // Update the cart in the shopping-cart component
            this.$refs.shoppingCart.cart = cart;

            // And finaly update localStorage
            window.localStorage.setItem('cart', JSON.stringify(cart));
        },

        /**
         * Create a new color object
         * 
         * @param color (object)
         * @return altered object
         */
        addNewcolorToCart(color) {
            let price = parseFloat(color.price);

            return {
                id: color.id,
                name: color.name,
                image: color.image,
                price: price,
                amount: 1,
                totalPrice: price
            }
        },

        /**
         * 
         * @param cart (object)
         * @returns total amount of colors and totalPrice of all colors
         */
        updateTotals(cart) {
            let totalItems = 0;
            let totalPrice = 0;

            cart.items.forEach(item => {
                totalItems += item.amount;
                totalPrice += (item.amount * item.price);
            });

            return {
                totalItems: totalItems,
                totalPrice: totalPrice,
            }
        },

        removeItemFromCart(cart) {

        },

        closeShoppingCart() {
            $('.layer').fadeOut(); 
            $('.cart').fadeOut();
        },
    }
})

Vue.config.devtools = true
Vue.config.colorionTip = false