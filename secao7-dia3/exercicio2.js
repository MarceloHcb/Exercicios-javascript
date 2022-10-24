const receptor = 'Rafael Andrade'
const order = {
    name: 2,
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};
const verifyOrder = (order) => {    
   if (typeof(order.name) !== "string"){
    throw new Error ("digite o nome !")
   }
}

const customerInfo = (order) => {
    try {
        verifyOrder(order)
         return `Olá ${order["order"].delivery.deliveryPerson} a entrega para ${order.name}, Telefone ${order.phoneNumber}.R. ${order["address"].street} Nº: ${order.address.number} AP: ${order.address.apartment}  `
    }catch (er){
        return er.message
    }
    finally {
        console.log("tudo ok");
    }

};

console.log(customerInfo(order));

const orderModifier = (order) => {

    const newName = order.name = "Luiz Silva"
    const newPrice = order["payment"].total = 50
    const pizzas = Object.keys(order.order.pizza)
    const drinks = order.order.drinks.coke.type
    console.log(`Olá ${newName} o  total do seu pedido de ${pizzas} e ${drinks} é R$ ${newPrice},00. `);
};

orderModifier(order);
console.log(customerInfo(order));