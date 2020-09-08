const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// menngunakan middleware body parser
app.use(bodyParser.urlencoded({extended:true}));
//parse JSON
app.use(bodyParser.json());


// middleware unuk cetak log
const log = (req, res, next) => {
    console.log(Date.now() + ' '+ req.ip + ' '+ req.originalUrl);
    next();
}
app.use(log);

//middleware untuk routing
const routers = require('./routers.js');
app.use(routers);

//menangani gak ada halaman
const notFound = (req, res, next) => {
    res.json({
        status :'error',
        message :'halaman tidak ditemukan'
    })
};
app.use(notFound);

// menangani erro
const errorHandling =  (err, req, res, next) =>{
    console.error(err.stack);
    res.json({
        status : 'error',
        message : "terjadi kesalahan pada server"
    })

}
app.use(errorHandling)



app.listen(port , () => {
    console.log(`Server running at http://localhost:${port}`);
    
});