const { Product, Cart, Customer, Auth } = require('./index.js');

describe("Product Tests", () => {
    test('Can create instance of product class', () => {
        const carrots = new Product("Carrots", 4, "Bushel of carrots that have been freshly harvested for you");
        expect(carrots instanceof Product).toEqual(true);
    });

    test('Correctly sets values of name, price, description, and inStock', () => {
        const carrots = new Product("Carrots", 4, "Bushel of carrots that have been freshly harvested for you");
        expect(carrots.name).toEqual("Carrots");
        expect(carrots.price).toEqual(4);
        expect(carrots.description).toEqual("Bushel of carrots that have been freshly harvested for you");
        expect(carrots.inStock).toEqual(true);
    });

    test('display method returns correct string', () => {
        const carrots = new Product("Carrots", 4, "Bushel of carrots that have been freshly harvested for you");
        expect(carrots.display()).toEqual("Name: Carrots, Price: $4, Description: Bushel of carrots that have been freshly harvested for you");
    });
})

describe("Cart Tests", () => {

    test('Instance of Cart initializes with empty products array and total of 0', () => {
        const myCart = new Cart();
        expect(Array.isArray(myCart.products)).toEqual(true);
        expect(myCart.products.length).toEqual(0);
        expect(myCart.total).toEqual(0);
    });

    test('Can add products to array with addProduct', () => {
        const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
        const myCart = new Cart();
        myCart.addProduct(carrots);
        expect(myCart.products.length).toEqual(1);
        expect(myCart.total).toEqual(carrots.price);
    });

    test('Can remove products to array with removeProduct and total is updated', () => {
        const strawberries = new Product("Strawberries", 5, "The freshest fresas on the market");
        const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
        const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");
        const myCart = new Cart();
        myCart.addProduct(carrots);
        myCart.addProduct(mangos);
        myCart.addProduct(strawberries);
        myCart.removeProduct(0);
        expect(myCart.products.length).toEqual(2);
        expect(myCart.total).toEqual(8);
    });
})

describe("Customer Tests", () => {
    test('Can create Customer instance', () => {
        const francis = new Customer("Francis", "francis@gmail.com", "222 Main St");
    
        expect(francis instanceof Customer).toEqual(true);
    });

    test('Customer instance correctly sets property values', () => {
        const francis = new Customer("Francis", "francis@gmail.com", "222 Main St");
        expect(francis.name).toEqual("Francis");
        expect(francis.email).toEqual("francis@gmail.com");
        expect(francis.shippingAddress).toEqual("222 Main St");
        expect(Array.isArray(francis.orderHistory)).toEqual(true);
        expect(francis.orderHistory.length).toEqual(0);
    });

    test('addToOrderHistory Cart to orderHistory array', () => {
        const francis = new Customer("Francis", "francis@gmail.com", "222 Main St");
        const strawberries = new Product("Strawberries", 5, "The freshest fresas on the market");
        const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
        const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");
        
        const myFirstOrder = new Cart();
        myFirstOrder.addProduct(mangos);
        myFirstOrder.addProduct(carrots);
        const mySecondOrder = new Cart();
        mySecondOrder.addProduct(strawberries);
        francis.addToOrderHistory(myFirstOrder);
    
        expect(francis.orderHistory.length).toEqual(1);
        francis.addToOrderHistory(mySecondOrder);
        expect(francis.orderHistory.length).toEqual(2);
    });
})

describe("Auth Tests", () => {
    test('Can create instance of Auth', () => {
        const myAuth = new Auth();
        expect(myAuth instanceof Auth).toEqual(true);
    });

    test('Auth has empty customers array when initialized', () => {
        const myAuth = new Auth();
        expect(Array.isArray(myAuth.customers)).toEqual(true);
        expect(myAuth.customers.length).toEqual(0);
    });

    test('register creates new Customer and adds it to customers array', () => {
        const myAuth = new Auth();
        myAuth.register("Kaiya", "Kaiya@example.com", '121 Main St');
        expect(myAuth.customers[0] instanceof Customer).toEqual(true);
    });

    test('login finds correct Customer in customers array', () => {
        const myAuth = new Auth();
        myAuth.register("Kaiya", "Kaiya@example.com", '121 Main St');
        myAuth.register("Nina", "Nina@example.com", '22 Broadway St');
        const result = myAuth.login("Kaiya@example.com")
        expect(result.name).toEqual("Kaiya");
    });

    test('login returns null if Customer is not in the customers array', () => {
        const myAuth = new Auth();
        myAuth.register("Kaiya", "Kaiya@example.com", '121 Main St');
        myAuth.register("Nina", "Nina@example.com", '22 Broadway St');
        const result = myAuth.login("benny@example.com")
        expect(result).toEqual(null);
    });
})