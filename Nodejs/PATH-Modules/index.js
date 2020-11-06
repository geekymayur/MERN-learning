// PATH MODULES
const path = require("path");

// dirname , extname , format , basename 

// dirname
console.log(path.dirname("E:\Git Pull\MERN-learning\Nodejs\PATH-Modules\index.js"));

// extname
console.log(path.extname("E:\Git Pull\MERN-learning\Nodejs\PATH-Modules\index.js"));


// basename
console.log(path.basename("E:\Git Pull\MERN-learning\Nodejs\PATH-Modules\index.js"));

//path.pase()
console.log(path.parse("E:\Git Pull\MERN-learning\Nodejs\PATH-Modules\index.js"));
// we can use this as a objet 
let detail = path.parse("E:\Git Pull\MERN-learning\Nodejs\PATH-Modules\index.js");
console.log("Detail ext name = " + detail.ext);
console.log("Detail base name = " + detail.base);


