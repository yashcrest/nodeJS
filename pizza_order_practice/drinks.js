class Drinks {
    serveDrink(size){
        if(size === 'large'){
            console.log('Pizza with Large drink')
        }
        if(size === 'medium'){
            console.log('Pizza with Medium drink')
        }
        if(size === 'small'){
            console.log('Pizza with Small drink')
        }
    }
}

module.exports = Drinks;