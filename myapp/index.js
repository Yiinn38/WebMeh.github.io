let nombre = "Hola Mundo";
console.log(nombre);
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.get('/productos', (req, res) => {
    let productos = [
        {
            nombre: 'Refresco',
            precio: 17
        },
        {
            nombre: 'Papas',
            precio: 20
        },
        {
            nombre: 'Chocolates',
            precio: 25
        },
        {
            nombre: 'Kit Kat',
            precio: 30
        }
    ];

    let respuesta = '<table border="1">';
    productos.forEach(producto => {
        respuesta += `<tr><td>${producto.nombre}</td><td>${producto.precio}</td></tr>`;
    });
    respuesta += '</table>';

    res.send(respuesta);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


/*
    se ejecuta con:
    nodemon index.js
    node index.js
*/