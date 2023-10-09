console.log("client side")
const todob=document.getElementById("todobutton");
todob.addEventListener("click",(e)=>{
    fetch("http://localhost:3000/todos/")
    .then(response=>response.json())


})
