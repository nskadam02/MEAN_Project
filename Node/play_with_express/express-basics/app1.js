const express = require('express')
const app = express()
app.get('/', (req,res)=>{
    res.send('Hello World')
    //use send for plain text or hypetext
})

app.get('/products', (req,res)=>{
    let product={
        id:1,
        name:'<NAME>',
        price:100
    }
    res.json(product)
})

app.get('/req1', (req,res)=>{
    res.redirect('/hello')
})
app.get('/hello', (req,res)=>{
    res.send('Hello World')
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})