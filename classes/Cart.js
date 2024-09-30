const Product = require("./Product");

class Cart{
    constructor(total){
        this.products = [];
        this.total = 0;
    }
    addProduct(product){
        this.products.push(product);
        this.total += product.price
    }
    removeProduct(i){
        if (i >= 0 && i < this.products.length) {
            const product = this.products[i];
            this.total -= product.price;
        this.products.splice(i,1)
    }
}
}


module.exports = Cart;