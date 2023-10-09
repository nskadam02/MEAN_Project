// filesystem
const fs = require('node:fs');
const menudata = fs.readFileSync("./menu.txt",{encoding:"utf-8"}); //blocking IO
const menudata2 = fs.readFileSync("./menu-2.txt",{encoding:"utf-8"}); //blocking IO
console.log(menudata2);

console.log(menudata);
console.log("else");
