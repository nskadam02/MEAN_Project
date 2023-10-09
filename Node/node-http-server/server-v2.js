// http server
const http= require('http');
const fs = require('fs');
const httpserver=http.createServer()
let reqCount=0

httpserver.on('request',(req,res)=>{
    reqCount++;
    console.log("Request count: " + reqCount    )
    // res.writeHead(200,{'Content-Type':'application/pdf'});
    res.writeHead(200,{'Content-Type':'text/plain'});
    const pdfData=fs.readFileSync("./menu.txt", 'utf8');

    res.end(pdfData);
    console.log("Request IO finished: " + reqCount)
})

httpserver.listen(8080,()=>{
    console.log('Server is running on port 8080');
})