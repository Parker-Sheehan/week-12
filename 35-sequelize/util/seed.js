const {Product} = require('./models')

const products = [
    {
        name: 'Book',
        price: 12.99
    },
    {
        name: 'Pen',
        price: 1.99
    },
    {
        name: 'Nerf Blaster 4000',
        price: 249.99
    },
    {
        name: 'Dog',
        price: 55.95
    },
    {
        name: 'Lizard',
        price: 16.00
    },
]

const seed = async () => {
    try{
        await Product.bulkCreate(products)
    }
    catch(err){
        console.error(err)
    }
}

module.exports = seed