class Customer{
    constructor(name, email, shippingAddress){
        this.name = name
        this.email = email
        this.shippingAddress = shippingAddress
        this.orderHistory = []
        this.rewardPoints = 0
    }
    addToOrderHistory(cart){
        this.orderHistory.push(cart)
    }
    getRewardPoints(){
        let totalRewardsPoints = 0
        for (let i = 0; i < this.orderHistory.length; i++) {
            const cart = this.orderHistory[i];
            for (let j = 0; j < cart.products.length; j++) {
                totalRewardsPoints += cart.products[j].rewardPoints; 
            }
        }
        this.rewardPoints = totalRewardsPoints; 
        return totalRewardsPoints
    }
}


module.exports = Customer;