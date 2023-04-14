// create the model for the table when imported into index table is created Step 3

const {DataTypes} = require('sequelize')
const db = require('./database')

module.exports = {
    User: db.define('user', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        username: DataTypes.STRING({length: 20}),
        password: DataTypes.STRING
    })
}