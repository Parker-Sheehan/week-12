//Imports
const express = require('express')
const cors = require('cors')
const { appendFile } = require('fs')

//Variables
const server = express()

//middleware
server.use(express.json())
server.use(cors())

//endpoints
server.get('/info', async(req,res) => {
    res.status(200).send("Heyy")
})

//listen
server.listen(4000, () => console.log("Up on 4000"))