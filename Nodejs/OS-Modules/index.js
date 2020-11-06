// os module
const os = require('os');

console.log(`Free memory: ${os.freemem() / 1000000 / 1024} GB \nOS type : ${os.arch()}\nOS Hostname: ${os.hostname()} \nOS interface: ${os.networkInterfaces()} \nOS Platform: ${os.platform()} \nOS UPtime: ${os.uptime() / 60 / 60} hours`);