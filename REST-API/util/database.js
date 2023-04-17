const {Sequelize} = require('sequelize')
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL

const db = new Sequelize(
    DATABASE_URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

module.exports = db


db.sync()
// We are destructing the Sequelize func from ’sequilize’ then requiring our dot env and setting a 
// variable equal to the url we passed in there, after which we are creating the rules for our database
// Step 2