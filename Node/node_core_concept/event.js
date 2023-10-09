//all IO operations are asynchronous
//all are event driven
// Any object which emits events wiil be instance of EventEmitter class
var EventEmitter = require('events').EventEmitter;

//----------------------------------------------------------------
//Door
//----------------------------------------------------------------
class Door extends EventEmitter{
    open()
    {
        console.log('Door is open');
        this.emit('open',{floor:4,door:2});
    }
    close()
    {
        console.log('Door is closed');
        this.emit('close',{floor:4,door:2});
    }

}
const door = new Door()
//----------------------------------------------------------------
//Light
//----------------------------------------------------------------
door.on('open', e=>{
    console.log('light on - floor:${e.floor} - door:${e.door}');
})
door.on('close', e=>{
    console.log('light off - floor:${e.floor} - door:${e.door}');
})

setTimeout(()=>{
    door.open();
    setTimeout(()=>{
        door.close();
    },1000)
},1000)