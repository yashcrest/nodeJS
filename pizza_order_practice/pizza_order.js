const EventEmitter = require('events');

class PizzaOrder extends EventEmitter{
    constructor() {
        super();
        this.orderNumber = 0
    }

    order(size, flavour){
        this.orderNumber++;
        this.emit('order' , size, flavour);
    }
 
    displayOrderNumber(){
        console.log(`Current Order number: ${this.orderNumber}`);
    }
}

module.exports = PizzaOrder;