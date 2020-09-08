const express = require('express');
const routers = express.Router();
const path = require('path');
routers.get('/', (req, res) => res.end('Hello World'));
routers.get('/post/:id?', (req, res) => {
    res.send('artikel'+ req.params.id
    )
});

// routers.get('/', (req, res) => res.end('Hello World'));
// // routers.post('/contoh', (req, res) => res.end('Contoh POST'));
// // routers.put('/contoh', (req, res) => res.end('Contoh PUT'));
// // routers.delete('/contoh', (req, res) => res.end('Contoh DELETE'));
// routers.all('/contoh' ,(req, res)=>{ res.send(`Request dengan method ${req.method}`)});


routers.get('/page-*', (req, res) => {
    res.send('route'+ req.path
    )
});


routers.get('/foods', (req, res) => {
const page = req.query.page ? req.query.page : 1
res.write('Food page : '+ page + '\n');
if (req.query.sort) {4
    res.write(`Sort by ; ${req.query.sort}`);
}
res.end();
});

routers.post('/login', (req, res)=>{
    console.log(req);
    
    const { username, password } = req.body;
   res.send(`Anda sedang login dengan username ${username} dan password ${password}`);
  
});

routers.get('/download', function (req, res) {
    const filename = 'poto.png';
    res.sendFile(path.join(__dirname,filename), {
        headers : {
            'Content-Disposition' : 'attachment; filename="logo-utama.png"'
        }
    });
});

module.exports = routers;