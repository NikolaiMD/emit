const EventEmitter = require('events')
const calendar = new EventEmitter()

calendar.on('Sunday', ()=>{
  console.log("Yey!! Sunday arrived!!!")
})

calendar.on('Friday', ()=>{
  console.log("Yey!! Weekend is HERE!!!")
})

let sun = () =>{
    calendar.emit("Sunday")

}
let fri = () =>{
    calendar.emit("Friday")
}
setTimeout(sun, 2000);
setTimeout(fri, 1000);

