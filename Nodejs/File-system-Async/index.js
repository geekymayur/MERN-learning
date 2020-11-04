// fs module a sync

// require fs module

const fs = require("fs");

// create a new folder in root path
// fs.mkdir("./folder1", (err) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log("Folder created");
//     }
// });

// CREATE A NEW FILE INSIDE THIS FOLDER AND INSER SOME TEXT 
// fs.writeFile("./folder1/mytext.txt", "Hello my name is mayur and this a some new text .", (err) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log("File Created and text inserted");
//     }
// });

// ADD SOME NEW TEXT 
// fs.appendFile("./folder1/mytext.txt", "   this is new line added ", (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("New Text inserted");
//     }
// });


// RENAME FILE 

// fs.rename("./folder1/mytext.txt", "./folder1/mytext1.txt", (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("File Renamed and saved");
//     }
// });


// READ DATA FROM FILE 
// fs.readFile("./folder1/mytext1.txt", (err, data) => {
//     if (err) {
//         throw data;
//     } else {
//         console.log("data = " + data);
//     }
// });

// DELETE FILE 
// fs.unlink("./folder1/mytext1.txt", (err) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log("File Removed in trash");
//     }
// });


// DELETE FOLDER
fs.rmdir("./folder1", (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("Folder Deleted");
    }
});
