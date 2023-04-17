const {DataTypes} = require('sequelize')
const db = require('./database')

module.exports = {
    Post: db.define('post', {
        postId: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        content: DataTypes.STRING,
        creator: {
            type: DataTypes.STRING,
            defaultValue: 'Parker'
        }
    })
}

