// Events Module
// Node.js has a built-in  module called Events
// where we can create , fire , and listen for your own Events

//

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("callPolice", () => {
    console.log("Calling to police");
});

event.on("callPolice", () => {
    console.log("Police is coming");
});

event.on("callPolice", () => {
    console.log("Police is arrived");
});

event.on("callPolice", () => {
    console.log("Mafia arrested ");
});

event.emit("callPolice");

event.on("checkPage", (sc, info) => {
    console.log(`Page Status Code is " ${sc} "  and Page Info is " ${info} "`);
});


event.emit("checkPage", 200, "ok");