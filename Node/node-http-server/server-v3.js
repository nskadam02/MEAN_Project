// http server
const http= require('http');
const fs = require('fs');
const httpserver=http.createServer()
let reqCount=0

httpserver.on('request',(req,res)=>{
    reqCount++;
    console.log("Request count: " + reqCount  +"Io started"  )
    // res.writeHead(200,{'Content-Type':'application/pdf'});
    res.writeHead(200,{'Content-Type':'text/plain'});
    fs.readFile("./menu.txt", 'utf8',(err, data)=>{
        if (err) throw err;
        // console.log(data);
        res.end(data);
        console.log("Request count " + reqCount+" IO finished")
    });
    
})

httpserver.listen(8080,()=>{
    console.log('Server is running on port 8080');
})