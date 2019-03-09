// process.on("exit", code => {
//     console.log(code);
//     // setTimeout(()=>{
//     //     console.log("Waiting...")
//     // }, 3000);
// })

// process.exit(1);

// process.on("SIGINT", ()=>{
//     console.log("GOT SIGINT : ");
// })

// setTimeout(()=>{
//     process.exit(0);
// }, 3000);

// process.stdin.on("readable", ()=>{})

// process.stdout.write("")


const events = require("events");
var EventEmitter = events.EventEmitter;

var emitter = new EventEmitter();

// emitter
// - trigger the event : emit()
// - Handle the event : on()
// - "newListener"
// - "removeListener"
// - "setMaxListerners()"

emitter.on("removeListener", (eventName, handlerFunc) => {
    console.log("REMOVE_LISTENER", eventName, handlerFunc.name);
})

emitter.on("newListener", (eventName, funcName) => {
    console.log("NEW_LISTENER", eventName, funcName.name);
})

emitter.setMaxListeners(25);

function handler() {
    console.log("Handler");
}

for (var i = 0; i < 20; i++) {
    emitter.on("foo", handler);
}

emitter.on("foo", (msg) => {
    console.log("Foo Event happened with " + msg);
    emitter.removeListener("foo", handler);
})


// emitter.on("bar", handler);

emitter.emit("foo", "Some Message");
emitter.emit("foo", "New Message");
    // emitter.emit("bar");

