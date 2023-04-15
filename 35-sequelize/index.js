//! require statement
const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {User, Cart, Product} = require('./util/models')
const {register} = require('./controller/userController')
const {addToCart} = require('./controller/cartController')
const seed = require('./util/seed')

//! Variables
const server = express()
//! Middleware
server.use(express.json())
server.use(cors())
//! Associations
User.hasMany(Cart)
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product)
//! endpoints
server.post('/register', register)
server.post('addItemToCart', addToCart)
server.get('/checkout/:userId', checkOut)


//! Listen Statement
db
    .sync()
    // .sync({force: true})
    .then(() => {
        // seed()
    })
server.listen(4000, () => console.log('up on 4000'))