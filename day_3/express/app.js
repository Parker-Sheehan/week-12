const express = require('express')

const app = express()

app.use('/store',(req,res,next) => {
    console.log('home')
    res.send("<h1>Hello from store</h1>");

})

app.use('/',(req,res,next) => {
    console.log('home')
    res.send("<h1>Hello from home</h1>");

})

app.listen(3000)