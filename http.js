const http = require('http');

http.createServer(function(req,res){
    console.log('servidor web iniciado');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('estas en la pagina hola');
            res.end();
            break;
        default:
            res.write('<h1><center>Mi primer servidor web con nodeJs</center></h1>');
            res.end();
    }
}).listen(5000);