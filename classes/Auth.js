const Customer = require("./Customer")

class Auth{
    constructor(){
        this.customers = []
    }
    register(name, email, shippingAddress){
        const newCustomer = new Customer(name, email, shippingAddress)
        return this.customers.push(newCustomer)
    }
    login(email){
        for(let i = 0; i< this.customers.length; i++){
            if(email.toLowerCase() === this.customers[i].email.toLowerCase() ){
                return this.customers[i]
            }
        }
    return null;
    }
}

module.exports = Auth