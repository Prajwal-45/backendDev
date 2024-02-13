require('dotenv').config()
const express = require('express')
const app = express()
const port = (process.env.PORT);


app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/twitter',(req,res)=>{
res.send('Your on twitter directory')
})

app.get('/login',(req,res)=>{
    res.send('Login Page')
})

app.get('/pajju',(req,res)=>{
        res.send('Pajju ka page')
})

app.listen(port,()=>{
    console.log(`runing the code on ${port}`)
})