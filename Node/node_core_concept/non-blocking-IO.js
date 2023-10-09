const fs = require('fs');
// const callback=function(err,data){
//     if(err) throw err;
//     console.log(data);
// }
// fs.readFile("./menu.txt","utf-8",callback);
// fs.readFile("./menu-2.txt","utf-8",callback) //non-blocking IO
// console.log("else");

async function readMenu1andMenu2()
{
let menu1 = await fs.readFile("./menu.txt","utf-8",callback);
let menu2=await fs.readFile("./menu-2.txt","utf-8",callback) //non-blocking IO
console.log(menu1)
console.log(menu2)
}
readMenu1andMenu2()
console.log("else");
