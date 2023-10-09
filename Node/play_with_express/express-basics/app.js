const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser') 
// const logger = require('./middlewares/logger')
// const morgan = require('morgan')



//------------- Middleware-serve static resources on public folder--------------------
//---next middleware --------------------
//after sending response u cant call next middleware using next()

// app.use(logger)   
const todos = [
    {id:1,title:'name',type:'home'},
    {id:2,title:'name2',type:'work'},
    {id:3,title:'name3',type:'work'},
];

// app.use(maorgan(''))

app.use(express.static(__dirname + '/public'))

app.get('/todos', (req, res,next)=>{
const type = req.query.type;
res.json(todos.filter(todo => todo.type === type))
})
app.get('/todos/:id', (req, res,next)=>{
    const todo =todos.find(todo=>todo.id === parseInt(req.params.id)) 
    if (todo) res.json(todo)
    else res.status(404).send('Todo not found')
    })


//any reusable request processing logic can put in middleware

// Quer parameters  -request.query.limit
// ppath parameters - request.params.name



















app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})