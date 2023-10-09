//streaming data
//readable , writable,duplex,
// http server
const http= require('http');
const fs = require('fs');
const httpserver=http.createServer()
let reqCount=0

httpserver.on('request',(req,res)=>{
    reqCount++;
    console.log("Request count: " + reqCount  +"Io started"  )
    res.writeHead(200,{'Content-Type':'text/plain'});
    const fileStream = fs.createReadStream("./menu.txt"); //EventEmitter
    fileStream.pipe(res)
    // fileStream.on('data',chunk=>{
    //     res.write(chunk);
    // });
    // fileStream.on('end',()=>{
    //     res.end();
        
    // });
   
})

httpserver.listen(8080,()=>{
    console.log('Server is running on port 8080');
})