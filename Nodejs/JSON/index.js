const fs = require('fs');
const objData = {
    name: "mayur sharma",
    address: "Bihar",
    mobile: 7808186121,
    email: "mayur@mayur.com"
};

// convert in json
const jsonData = JSON.stringify(objData);

// convert json in object 
const myobj = JSON.parse(jsonData);

console.log(jsonData);
console.log(myobj);

fs.writeFileSync("./jsondata.json", jsonData);
console.log("Json File created ");

let data1 = fs.readFileSync("./jsondata.json");
let objdata2 = JSON.parse(data1);


console.log("Name: " + objdata2.name);
console.log("Email: " + objdata2.email);


