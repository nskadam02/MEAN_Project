const express = require('express')
const fs = require('fs')
const app = express()
const logger = require('./middlewares/logger')
const morgan = require('morgan')


// app.get('/', (req,res)=>{

//     // fs.readFile('./public/index.html','utf-8',(err,data)=>{
//     //     // if(err) throw err
//     //     // res.set(200,{'Content-Type':'text/html'})
//     //     // res.send(data)
//     //     res.se
//     // })
//     res.sendFile(__dirname + '/public/index.html');
// })

// // request for CSS file
// app.get('/css/bootstrap.min.css', (req,res)=>{

//     res.sendFile(__dirname + '/public/css/bootstrap.min.css');
// })

// ///load image 
// app.get('/images/img.jpg', (req,res)=>{

//     res.sendFile(__dirname + '/public//images/img.jpg');
// })



//------------- Middleware-serve static resources on public folder--------------------
//---next middleware --------------------
//after sending response u cant call next middleware using next()
// app.use(logger)   
  
app.use(maorgan(''))

app.use(express.static(__dirname + '/public'))
// app.use(express.static(__dirname + '/images'));

app.get('/todos', (req, res,next)=>{
const todos = [
    {id:1,title:'name'},
    {id:2,title:'name2'},
    {id:3,title:'name3'}
];
res.json(todos)
})


//any reusable request processing logic can put in middleware



















app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})