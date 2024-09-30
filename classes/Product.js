class Product{
    constructor(name, price, description, rewardPoints){
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true
        this.rewardPoints = rewardPoints
    }
    display(){
       return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`
    }
}

module.exports = Product