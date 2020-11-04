//  What is nodejs core modules
// Node js has a set of built-in Modules which you can use without any further installation

let fs = require("fs");

//  fs.mkdirSync("./storage");
// console.log("folder created");

// create a new file inside that folder 

//fs.writeFileSync("./storage/text1.txt", "This is first line in this file");
// console.log("File created and text inserted");

// rename that file 
//fs.renameSync("./storage/text1.txt", "./storage/text-new.txt");
//console.log("File renamed Done");

// add new data in that file 
//fs.appendFileSync("./storage/text-new.txt", "     this is a new text inserintg after previous line ");
//console.log("New data inserted in that file ");

// read data form file 
// let data = fs.readFileSync("./storage/text-new.txt", "utf-8"); // it will give buffer data

// console.log("Data = " + data);


// delete file 
// fs.unlinkSync("./storage/text-new.txt");
// console.log("File Deleted !");


// delete folder that we created 

fs.rmdirSync("./storage");
console.log("Folder Deleted");




