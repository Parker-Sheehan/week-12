//! require statement
const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {User} = require('./util/models')
const {register} = require('./controller/userController')
//! Variables
const server = express()
//! Middleware
server.use(express.json())
server.use(cors())
//! endpoints
server.post('/register', register)


//! Listen Statement
db.sync()
server.listen(4000, () => console.log('up on 4000'))