const PizzaOrder = require('./pizza_order');
const Drinks = require('./drinks');

const pizzaOrder = new PizzaOrder();
const drinks = new Drinks();

pizzaOrder.on('order', (size, flavour) => {
    console.log(`Order received! Baking a ${size} ${flavour} pizza`);
    drinks.serveDrink('small');
});

pizzaOrder.order('large', 'Prawn');
pizzaOrder.displayOrderNumber();