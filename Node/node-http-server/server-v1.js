// http server
const http= require('http');
const httpserver=http.createServer()

httpserver.on('request',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');
})

httpserver.listen(8080,()=>{
    console.log('Server is running on port 8080');
})