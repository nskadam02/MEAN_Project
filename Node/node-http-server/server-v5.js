//Not for computational operation
const http= require('http');
// const fs = require('fs');
const httpserver=http.createServer()
let reqCount=0

httpserver.on('request',(req,res)=>{
    reqCount++;
    console.log("Request count: " + reqCount  +"Io started"  )
    res.writeHead(200,{'Content-Type':'text/plain'});
   let i=100
   while(i<10000000)
   {
    console.log("Request cout: " + reqCount + "finished")
    i+=2;
   }
   res.end()
   
})

httpserver.listen(8080,()=>{
    console.log('Server is running on port 8080');
})