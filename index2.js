const http = require('http');
// const hello = require('./hello.js');
const moment = require('moment');
const server = http.createServer((req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        // res.write(hello.hello());
        // res.write(moment().calendar());
        const url = req.url;
        if (url === '/employee') {
            
            res.write(JSON.stringify({
                "status" : "success",
                "message" : "data karyawan"
            }));

        } else {

            res.write(JSON.stringify({
                "status" : "success",
                "message" : "Data apa yang kamu perlukan ??"
            }));
            
        }
       
        res.end();
});

const hostname = '127.0.0.1'; // atau localhost
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server runnning at http://${hostname}:${port}`);
    
})

